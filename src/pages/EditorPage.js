import React, { useCallback, useEffect, useMemo, useState } from "react";
import ls from "local-storage";
import prettier, { check } from "prettier";
import parserBabel from "prettier/parser-babel";
import { useHistory, useParams } from "react-router-dom";
import Editor, { useMonaco } from "@monaco-editor/react";
import {
  Widget,
  useCache,
  useNear,
  CommitButton,
  useAccountId,
} from "near-social-vm";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import RenameModal from "../components/Editor/RenameModal";
import OpenModal from "../components/Editor/OpenModal";
import {
  FileTab,
  Filetype,
  StorageDomain,
  StorageType,
  toPath,
} from "../components/Editor/FileTab";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import vmTypesDeclaration from "raw-loader!near-social-vm-types";
import styled from "styled-components";
import { useAccount, useWriteContract } from "wagmi";
import { SaveCodeModal } from "../components/Editor/SaveCodeModal";
import OpenModalCode from "../components/Editor/OpenModalCode";

const LsKey = "social.near:v01:";
const EditorLayoutKey = LsKey + "editorLayout:";
const WidgetPropsKey = LsKey + "widgetProps:";
const EditorUncommittedPreviewsKey = LsKey + "editorUncommittedPreviews:";

const DefaultEditorCode = "return <div>Hello World</div>;";

const Tab = {
  Editor: "Editor",
  Props: "Props",
  Metadata: "Metadata",
  Widget: "Widget",
};

const Layout = {
  Tabs: "Tabs",
  Split: "Split",
};

export default function EditorPage(props) {
  useHashRouterLegacy();
  const { widgetSrc } = useParams();
  const [localWidgetSrc, setLocalWidgetSrc] = useState(widgetSrc);
  const history = useHistory();
  const setWidgetSrc = props.setWidgetSrc;
  const account = useAccount()
  

  const [showModalCode, setShowModalCode] = useState(false)
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(undefined);
  const [path, setPath] = useState(undefined);
  const [files, setFiles] = useState(undefined);
  const [lastPath, setLastPath] = useState(undefined);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [allSaved, setAllSaved] = useState({});
  const [uncommittedPreviews, setUncommittedPreviews] = useState(
    ls.get(EditorUncommittedPreviewsKey) ?? true
  );
  const [widgetConfig, setWidgetConfig] = useState(undefined);

  const [renderCode, setRenderCode] = useState(code);
  const [widgetProps, setWidgetProps] = useState(
    ls.get(WidgetPropsKey) || "{}"
  );
  const [parsedWidgetProps, setParsedWidgetProps] = useState({});
  const [propsError, setPropsError] = useState(null);
  const [metadata, setMetadata] = useState(undefined);
  const [forkDetails, setForkDetails] = useState(undefined);
  const near = useNear();
  const cache = useCache();
  const accountId = useAccountId();

  const [tab, setTab] = useState(Tab.Editor);
  const [layout, setLayoutState] = useState(
    ls.get(EditorLayoutKey) || Layout.Split
  );
  const [previewKey, setPreviewKey] = useState("");

  const testVara = `
  declare namespace vara {
    const varaAccount: Object = varaAccount2;
  }
  `
  

  const handleModalCode = () =>{
    setShowModalCode(!showModalCode)
  }

  const monaco = useMonaco();
  

  useEffect(() => {
    if (monaco) {
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      monaco.languages.typescript.javascriptDefaults.addExtraLib(
        vmTypesDeclaration
      );
    }
  }, [monaco]);

  const setLayout = useCallback(
    (layout) => {
      ls.set(EditorLayoutKey, layout);
      setLayoutState(layout);
    },
    [setLayoutState]
  );

  const getForkDetails = async (path) => {
    try {
      if (localWidgetSrc) {
        const res = await fetch(`${near.config.apiUrl}/keys`, {
          method: "POST",
          body: JSON.stringify({
            keys: [localWidgetSrc],
            options: { return_type: "BlockHeight" },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const sourceWidget = await res.json();

        const srcArr = localWidgetSrc.split("/");
        const forkOf =
          localWidgetSrc + "@" + sourceWidget[srcArr[0]][srcArr[1]][srcArr[2]];

        storeForkDetails(path, forkOf);
        return;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const checkForkDetails = async (path) => {
    try {
      if (path.unnamed) return;
      const response = await cache.asyncLocalStorageGet(StorageDomain, {
        path,
        type: StorageType.forkDetails,
      });

      if (response?.fork_of) {
        setForkDetails(response);
        return response;
      } else if (JSON.stringify(response) === "{}") {
        setForkDetails(undefined);
      } else if (localWidgetSrc && JSON.stringify(response) !== "{}") {
        getForkDetails(path);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const storeForkDetails = useCallback(
    async (path, forkOf) => {
      try {
        let forkDetails = {
          fork_of: forkOf,
          time: Date.now(),
        };
        // differentiate new components from forked components
        forkOf === null ? (forkDetails = {}) : forkDetails;

        await cache.localStorageSet(
          StorageDomain,
          {
            path,
            type: StorageType.forkDetails,
          },
          forkDetails
        );
        setForkDetails(forkDetails);
        return;
      } catch (e) {
        console.error(e);
        return { error: e };
      }
    },
    [setForkDetails]
  );

  useEffect(() => {
    if (forkDetails?.fork_of) {
      setMetadata({
        ...metadata,
        fork_of: forkDetails.fork_of,
      });
    }
  }, [forkDetails]);

  // prevent metadata from being overwritten by empty object
  useEffect(() => {
    if (JSON.stringify(metadata) === "{}") {
      setMetadata(undefined);
    }
  }, [metadata]);

  useEffect(() => {
    if (path || (localWidgetSrc && path)) {
      checkForkDetails(path);
    }
  }, [localWidgetSrc, path]);

  useEffect(() => {
    setWidgetSrc({
      edit: null,
      view: localWidgetSrc,
    });

    if (localWidgetSrc) {
      checkForkDetails(localWidgetSrc);
    }
  }, [localWidgetSrc, widgetSrc, setWidgetSrc]);

  const updateCode = useCallback(
    (path, code) => {
      cache.localStorageSet(
        StorageDomain,
        {
          path,
          type: StorageType.Code,
        },
        {
          code,
          time: Date.now(),
        }
      );
      setCode(code);
    },
    [cache, setCode]
  );

  useEffect(() => {
    ls.set(WidgetPropsKey, widgetProps);
    try {
      const parsedWidgetProps = JSON.parse(widgetProps);
      setParsedWidgetProps(parsedWidgetProps);
      setPropsError(null);
    } catch (e) {
      setParsedWidgetProps({});
      setPropsError(e.message);
    }
  }, [widgetProps]);

  const removeFromFiles = useCallback(
    (path) => {
      path = JSON.stringify(path);
      setFiles((files) =>
        files.filter((file) => JSON.stringify(file) !== path)
      );
      setLastPath(path);
    },
    [setFiles, setLastPath]
  );

  const addToFiles = useCallback(
    (path) => {
      const jpath = JSON.stringify(path);
      setFiles((files) => {
        const newFiles = [...files];
        if (!files.find((file) => JSON.stringify(file) === jpath)) {
          newFiles.push(path);
        }
        return newFiles;
      });
      setLastPath(path);
    },
    [setFiles, setLastPath]
  );

  useEffect(() => {
    if (files && lastPath) {
      cache.localStorageSet(
        StorageDomain,
        {
          type: StorageType.Files,
        },
        { files, lastPath }
      );
    }
  }, [files, lastPath, cache]);

  const openFile = useCallback(
    (path, code) => {
      setPath(path);
      addToFiles(path);
      setMetadata(undefined);
      setRenderCode(null);
      if (code !== undefined) {
        updateCode(path, code);
        checkForkDetails(path);
      } else {
        setLoading(true);
        cache
          .asyncLocalStorageGet(StorageDomain, {
            path,
            type: StorageType.Code,
          })
          .then(({ code }) => {
            updateCode(path, code);

            checkForkDetails(path);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [updateCode, addToFiles]
  );

  const updateSaved = useCallback((jp, saved, localCode) => {
    setAllSaved((allSaved) => {
      return Object.assign({}, allSaved, { [jp]: saved || localCode });
    });
  }, []);

  const loadFile = useCallback(
    (nameOrPath) => {
      if (!near) {
        return;
      }
      const widgetSrc =
        nameOrPath.indexOf("/") >= 0
          ? nameOrPath
          : `${accountId}/widget/${nameOrPath}`;

      setLocalWidgetSrc(widgetSrc);

      const c = () => {
        const code = cache.socialGet(
          near,
          widgetSrc,
          false,
          undefined,
          undefined,
          c
        );
        if (code) {
          const name = widgetSrc.split("/").slice(2).join("/");

          openFile(toPath(Filetype.Widget, widgetSrc), code);
        }
      };

      c();
    },
    [accountId, openFile, toPath, near, cache, setLocalWidgetSrc]
  );

  const generateNewName = useCallback(
    (type) => {
      for (let i = 0; ; i++) {
        const name = `New-Draft-${i}`;
        const path = toPath(type, name);
        path.unnamed = true;
        const jPath = JSON.stringify(path);
        if (!files?.find((file) => JSON.stringify(file) === jPath)) {
          return path;
        }
      }
    },
    [toPath, files]
  );

  const createFile = useCallback(
    (type) => {
      setForkDetails(undefined);
      setMetadata(undefined);
      setLocalWidgetSrc("");
      const path = generateNewName(type);

      openFile(path, DefaultEditorCode);
    },
    [generateNewName, openFile]
  );

  const renameFile = useCallback(
    async (newName, code) => {
      try {
        const newPath = toPath(path.type, newName);
        const jNewPath = JSON.stringify(newPath);
        const jPath = JSON.stringify(path);
        forkDetails?.fork_of && !path.name.includes("New-Draft")
          ? await storeForkDetails(newPath, forkDetails.fork_of)
          : storeForkDetails(newPath, null);
        setFiles((files) => {
          const newFiles = files.filter(
            (file) => JSON.stringify(file) !== jNewPath
          );
          const i = newFiles.findIndex(
            (file) => JSON.stringify(file) === jPath
          );
          if (i >= 0) {
            newFiles[i] = newPath;
          }
          return newFiles;
        });
        setLastPath(newPath);
        setPath(newPath);
        updateCode(newPath, code);
      } catch (e) {
        console.error(e);
      }
    },
    [forkDetails, path, toPath, updateCode]
  );

  useEffect(() => {
    cache
      .asyncLocalStorageGet(StorageDomain, { type: StorageType.Files })
      .then((value) => {
        const { files, lastPath } = value || {};
        setFiles(files || []);
        setLastPath(lastPath);
      });
  }, [cache]);

  useEffect(() => {
    cache
      .asyncLocalStorageGet(StorageDomain, { type: StorageType.forkDetails })
      .then((value) => {})
      .catch((e) => {
        console.error(e);
      });
  }, [cache]);

  useEffect(() => {
    if (!near || !files) {
      return;
    }
    if (widgetSrc) {
      if (widgetSrc === "new") {
        createFile(Filetype.Widget);
      } else {
        loadFile(widgetSrc);
      }
      history.replace(`/edit/`);
    } else if (path === undefined) {
      if (files.length === 0) {
        createFile(Filetype.Widget);
      } else {
        openFile(lastPath, undefined);
      }
    }
  }, [near, createFile, lastPath, files, path, widgetSrc, openFile, loadFile]);

  const reformat = useCallback(
    (path, code) => {
      try {
        const formattedCode = prettier.format(code, {
          parser: "babel",
          plugins: [parserBabel],
        });
        updateCode(path, formattedCode);
        checkForkDetails(path);
      } catch (e) {
        console.error(e);
      }
    },
    [updateCode]
  );

  const reformatProps = useCallback(
    (props) => {
      try {
        const formattedProps = JSON.stringify(JSON.parse(props), null, 2);
        setWidgetProps(formattedProps);
      } catch (e) {
        console.error(e);
      }
    },
    [setWidgetProps]
  );

  const closeCommitted = useCallback(
    (path, allSaved) => {
      setFiles((files) => {
        files = files.filter((file) => allSaved[JSON.stringify(file)] !== true);
        if (allSaved[JSON.stringify(path)] === true) {
          if (files.length > 0) {
            openFile(files[files.length - 1], undefined);
          } else {
            createFile(Filetype.Widget);
          }
        }
        return files;
      });
    },
    [openFile, createFile]
  );

  const layoutClass = layout === Layout.Split ? "col-lg-6" : "";

  const onLayoutChange = useCallback(
    (e) => {
      const layout = e.target.value;
      if (layout === Layout.Split && tab === Tab.Widget) {
        setTab(Tab.Editor);
      }
      setLayout(layout);
    },
    [setLayout, tab, setTab]
  );

  const pathToSrc = useCallback(
    (path) => {
      return `${accountId}/${path?.type}/${path?.name}`;
    },
    [accountId]
  );

  const generateWidgetConfig = useCallback(
    (uncommittedPreviews) => {
      return uncommittedPreviews
        ? {
            redirectMap: Object.fromEntries(
              Object.entries(allSaved)
                .filter(([jpath, code]) => code !== true)
                .map(([jpath, code]) => {
                  const path = JSON.parse(jpath);
                  return [
                    pathToSrc(path),
                    {
                      code,
                    },
                  ];
                })
            ),
          }
        : undefined;
    },
    [allSaved, pathToSrc]
  );

  const widgetName = path?.name;

  const commitButton = (
    <CommitButton
      className="btn btn-outline-success"
      disabled={!widgetName}
      near={near}
      data={{
        widget: {
          [widgetName]: {
            "": code,
            metadata,
          },
        },
      }}
    >
      Save
    </CommitButton>
  );

  const widgetPath = `${accountId}/${path?.type}/${path?.name}`;
  const jpath = JSON.stringify(path);

  const renderPreview = (code) => {
    setWidgetConfig(generateWidgetConfig(uncommittedPreviews));
    setRenderCode(code);
    setPreviewKey(`preview-${Date.now()}`);
  };

  const Buttons = styled.div`
    display: flex;
    align-items: center;
    .btn {
      border-radius: 2em;
      flex-grow: 1;
      flex-basis: 0;
      white-space: nowrap;
    }
  `;

  return (
    <>
    <style type="text/css">
    {`
    .nav-tabs .nav-link {
      background-color: white !important;
      color: black !important;
      font-weight: 600;
    }
    
    .nav-tabs .nav-link.active {
      background-color: #75FBC7 !important;
      color: black !important;
      font-weight: 600;
    }
    .nav-item .nav-link {
      background-color: white !important;
      color: black !important;
      font-weight: 600;
    }
    
    .nav-item .nav-link.active {
      background-color: #75FBC7 !important;
      color: black !important;
      font-weight: 600;
    }
    `}
    </style>
    <div className="container-fluid mt-1 mb-3">
      <RenameModal
        key={`rename-modal-${jpath}`}
        show={showRenameModal}
        name={path?.name}
        onRename={(newName) => renameFile(newName, code)}
        onHide={() => setShowRenameModal(false)}
      />
      <OpenModal
        show={showOpenModal}
        onOpen={(newName) => loadFile(newName)}
        onNew={(newName) =>
          newName
            ? openFile(toPath(Filetype.Widget, newName), DefaultEditorCode)
            : createFile(Filetype.Widget)
        }
        onHide={() => setShowOpenModal(false)}
      />
      <OpenModalCode
        show={showModalCode}
        code ={code}
        onHide={() => setShowModalCode(false)}
      />
      
      <div className="mb-3">
        <Nav
          variant="pills mb-1"
          activeKey={jpath}
          onSelect={(key) => openFile(JSON.parse(key))}
        >
          {files?.map((p, idx) => {
            const jp = JSON.stringify(p);
            const active = jp === jpath;
            return (
              <FileTab
                key={jp}
                {...{
                  p,
                  jp,
                  idx,
                  active,
                  openFile,
                  createFile,
                  removeFromFiles,
                  files,
                  code: jp === jpath ? code : undefined,
                  updateSaved,
                  setForkDetails,
                  setMetadata,
                  setWidgetSrc,
                  setLocalWidgetSrc,
                }}
              />
            );
          })}
          <Nav.Item>
            <Nav.Link
              className="text-decoration-none text-test"
              onClick={() => setShowOpenModal(true)}
            >
              <i className="bi bi-file-earmark-plus"></i> Add
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-decoration-none text-test"
              onClick={() => closeCommitted(path, allSaved)}
            >
              <i className="bi bi-x-lg"></i> Close unchanged
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {props.widgets.editorComponentSearch && (
          <div>
            <Widget
              src={props.widgets.editorComponentSearch}
              props={useMemo(
                () => ({
                  extraButtons: ({ widgetName, widgetPath, onHide }) => (
                    <OverlayTrigger
                      placement="auto"
                      overlay={
                        <Tooltip>
                          Open "${widgetName}" component in the editor
                        </Tooltip>
                      }
                    >
                      <button
                        className="btn btn-outline-success"
                        onClick={(e) => {
                          e.preventDefault();
                          loadFile(widgetPath);
                          onHide && onHide();
                        }}
                      >
                        Open
                      </button>
                    </OverlayTrigger>
                  ),
                }),
                [loadFile]
              )}
            />
          </div>
        )}
      </div>
      <div className="d-flex align-content-start">
        <div className="me-2">
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Layout selection"
          >
            <input
              type="radio"
              className="btn-check"
              name="layout-radio"
              id="layout-tabs"
              autoComplete="off"
              checked={layout === Layout.Tabs}
              onChange={onLayoutChange}
              value={Layout.Tabs}
              title={"Set layout to Tabs mode"}
            />
            <label className="btn btn-outline-secondary" htmlFor="layout-tabs">
              <i className="bi bi-square" />
            </label>

            <input
              type="radio"
              className="btn-check"
              name="layout-radio"
              id="layout-split"
              autoComplete="off"
              checked={layout === Layout.Split}
              value={Layout.Split}
              title={"Set layout to Split mode"}
              onChange={onLayoutChange}
            />
            <label className="btn btn-outline-secondary" htmlFor="layout-split">
              <i className="bi bi-layout-split" />
            </label>
          </div>
        </div>
        <div className="flex-grow-1">
          <div className="row">
            <div className={layoutClass}>
              <ul className={`nav nav-tabs mb-2`}>
                <li className="nav-item">
                  <button
                    className={`nav-link text-success ${tab === Tab.Editor ? "active text-dark" : ""}`}
                    aria-current="page"
                    onClick={() => setTab(Tab.Editor)}
                  >
                    Editor
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link text-success ${tab === Tab.Props ? "active text-dark" : ""}`}
                    aria-current="page"
                    onClick={() => setTab(Tab.Props)}
                  >
                    Props
                  </button>
                </li>
                {props.widgets.widgetMetadataEditor && (
                  <li className="nav-item">
                    <button
                      className={`nav-link text-success ${
                        tab === Tab.Metadata ? "active text-dark" : ""
                      }`}
                      aria-current="page"
                      onClick={() => setTab(Tab.Metadata)}
                    >
                      Metadata
                    </button>
                  </li>
                )}
                {layout === Layout.Tabs && (
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        tab === Tab.Widget ? "active" : ""
                      }`}
                      aria-current="page"
                      onClick={() => {
                        renderPreview(code);
                        setTab(Tab.Widget);
                      }}
                    >
                      Preview
                    </button>
                  </li>
                )}
              </ul>

              <div className={`${tab === Tab.Editor ? "" : "visually-hidden"}`}>
                <div
                  className="d-flex flex-column overflow-hidden"
                  style={{ height: "80vh" }}
                >
                  <div
                    className="mb-2 flex-grow-1 border"
                    style={{ minHeight: 1 }}
                  >
                    <Editor
                      value={code}
                      path={widgetPath}
                      defaultLanguage="javascript"
                      onChange={(code) => {
                        updateCode(path, code);
                        checkForkDetails(path);
                      }}
                      wrapperProps={{
                        onBlur: () => reformat(path, code),
                      }}
                    />
                  </div>
                  <Buttons className="mb-3 d-flex gap-2 flex-wrap">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        renderPreview(code);
                        if (layout === Layout.Tabs) {
                          setTab(Tab.Widget);
                        }
                      }}
                    >
                      Preview
                    </button>
                    {!path?.unnamed && commitButton}
                    
                    <button
                      className={`btn ${
                        path?.unnamed ? "btn-success" : "btn-outline-secondary"
                      }`}
                      onClick={() => {
                        setShowRenameModal(true);
                      }}
                    >
                      Rename
                    </button>
                    {path && accountId && (
                      <a
                        key="open-comp"
                        className="btn btn-outline-secondary"
                        href={`/${widgetPath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Component
                      </a>
                    )}

                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary flex-shrink-1"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-sliders" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button
                            onClick={() => {
                              const v = !uncommittedPreviews;
                              ls.set(EditorUncommittedPreviewsKey, v);
                              setUncommittedPreviews(v);
                              setWidgetConfig(generateWidgetConfig(v));
                            }}
                            className={`dropdown-item text-nowrap`}
                            data-toggle="button"
                            aria-pressed={uncommittedPreviews}
                            title="When enabled, the preview uses uncommitted code from all opened files"
                          >
                            <i className="bi bi-asterisk" /> Multi-file preview
                            ({uncommittedPreviews ? "ON" : "OFF"})
                          </button>
                        </li>
                      </ul>
                    </div>
                  </Buttons>
                </div>
              </div>
              <div className={`${tab === Tab.Props ? "" : "visually-hidden"}`}>
                <div
                  className="d-flex flex-column overflow-hidden"
                  style={{ height: "80vh" }}
                >
                  <div
                    className="mb-2 flex-grow-1 border"
                    style={{ minHeight: 1 }}
                  >
                    <Editor
                      value={widgetProps}
                      defaultLanguage="json"
                      onChange={(props) => setWidgetProps(props)}
                      wrapperProps={{
                        onBlur: () => reformatProps(widgetProps),
                      }}
                    />
                  </div>
                  <div className=" mb-3">^^ Props for debugging (in JSON)</div>
                  {propsError && (
                    <pre className="alert alert-danger">{propsError}</pre>
                  )}{" "}
                </div>
              </div>
              <div
                className={`${
                  tab === Tab.Metadata && props.widgets.widgetMetadataEditor
                    ? ""
                    : "visually-hidden"
                }`}
              >
                <div className="mb-3">
                  <Widget
                    src={props.widgets.widgetMetadataEditor}
                    key={`metadata-editor-${jpath}`}
                    props={useMemo(
                      () => ({
                        widgetPath,
                        onChange: setMetadata,
                      }),
                      [widgetPath]
                    )}
                  />
                </div>
                <div className="mb-3">{commitButton}</div>
              </div>
            </div>
            <div
              className={`${
                tab === Tab.Widget ||
                (layout === Layout.Split && tab !== Tab.Metadata)
                  ? layoutClass
                  : "visually-hidden"
              }`}
            >
              <div className="container">
                <div className="row">
                  <div className="position-relative">
                    {renderCode ? (
                      <Widget
                        key={`${previewKey}-${jpath}`}
                        config={widgetConfig}
                        code={renderCode}
                        props={parsedWidgetProps}
                      />
                    ) : (
                      'Click "Preview" button to render the widget'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                tab === Tab.Metadata ? layoutClass : "visually-hidden"
              }`}
            >
              <div className="container">
                <div className="row">
                  <div className="position-relative">
                    <Widget
                      key={`metadata-${jpath}`}
                      src={props.widgets.widgetMetadata}
                      props={useMemo(
                        () => ({ metadata, accountId, widgetName }),
                        [metadata, accountId, widgetName]
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
