import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function AnaNativeComp() {
  return (
    <div>
      <h1>List of Native Components</h1>
    <p>A list of all the built-in components to be used on Near Components.</p>
    <hr className="my-5" />
    <h2>Widget</h2>
    <p>The predefined component Widget allows you to include an existing component into your code, thus enabling to create complex applications by composing components.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["widget"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>IpfsImageUpload</h2>
    <p>A built-in component that enables users to directly upload an image to the InterPlanetary File System (IPFS).</p>
    <CopyBlock
        language={"jsx"}
        text={sample["ipfsImage"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>Files</h2>
    <p>A built-in component that enables to input files with drag and drop support.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["files"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>Markdown</h2>
    <p>A component that enables to render Markdown.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["markdown"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>OverlayTrigger</h2>
    <p>Used to display a message or icon when the mouse is over a DOM element.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["overlay"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>InfiniteScroll</h2>
    <p>Infinitely load a grid or list of items. This component allows you to create a simple, lightweight infinite scrolling page or element by supporting both window and scrollable elements.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["infiniteScroll"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>TypeAhead</h2>
    <p>Provides a type-ahead input field for selecting an option from a list of choices.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["typeahead"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>Styled Components</h2>
    <p>Styled Components is a popular library for styling React components using CSS-in-JS.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["styledComponent"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    <hr className="my-5" />
    <h2>Tooltip</h2>
    <p>Displays a message once the mouse hovers over a particular item. This component was imported from React-Bootstrap.</p>
    <CopyBlock
        language={"jsx"}
        text={sample["tooltip"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
