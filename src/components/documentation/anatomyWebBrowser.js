import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function AnaWebBrowser() {
  return (
    <div>
      <h3>Web Browser Methods</h3>
      <p>
        NEAR Components have access to classic web methods that enable them to:
      </p>
      <ul>
        <li>Fetch data from external sources.</li>
        <li>Cache values to avoid redundant computations.</li>
        <li>Use LocalStorage to store data in the web browser.</li>
        <li>Access to the Clipboard.</li>
      </ul>
      <hr className="my-5" />

      <h4>Fetch</h4>
      <p>
        <code>fetch</code> allows to fetch data from the URL. It acts like a
        hook. It's a wrapper around the fetch function from the browser behind
        the caching layer.
      </p>
      <p>The possible returned values are:</p>
      <ul>
        <li>
          If the data is not cached, it returns null and fetches the data in the
          background.
        </li>
        <li>
          If the data is cached, it returns the cached value and then
          revalidates it.
        </li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["fetch"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <h5>Async Version</h5>
      <p>
        <code>asyncFetch</code> is the async version of <code>fetch</code>,
        meaning that it returns a promise instead of a value.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["asyncFetch"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />

      <h4>Cache</h4>
      <p>
        The <code>useCache</code> hook takes a promise through a generator
        function, fetches the data and caches it. It can be used to easily use
        and cache data from async data sources.
      </p>
      <p>
        The cache is global for the VM, but each cached element is identified by
        a unique <code>dataKey</code> within each component.
      </p>
      <p>The possible values returned are:</p>
      <ul>
        <li>null if the cache is cold and data is fetching</li>
        <li>the cached value while the data is being fetched</li>
        <li>A new value if new data is fetched.</li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["cache"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h6>Parameters</h6>
      <table class="table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Required</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>promiseGenerator</td>
            <td>required</td>
            <td>object</td>
            <td>a function that returns a promise, which generates data.</td>
          </tr>
          <tr>
            <td>dataKey</td>
            <td>required</td>
            <td>object</td>
            <td>
              the unique name (within the current component) to identify the
              data.
            </td>
          </tr>
          <tr>
            <td>options</td>
            <td>optional</td>
            <td>object</td>
            <td>optional argument.</td>
          </tr>
        </tbody>
      </table>
      <h6>Options object</h6>
      <p>
        <strong>subscribe</strong> (optional): if true, the data refreshes
        periodically by invalidating cache.
      </p>
      <hr className="my-5" />
      <h4>LocalStorage</h4>
      <p>
        NEAR Components have access to a simulated localStorage through the{" "}
        <code>Storage</code> object:
      </p>
      <ul>
        <li>
          <code>Storage.get</code>
        </li>
        <li>
          <code>Storage.set</code>
        </li>
        <li>
          <code>Storage.privateGet</code>
        </li>
        <li>
          <code>Storage.privateSet</code>
        </li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["localstorage"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <h5>Parameters</h5>
      <h6>Storage.get</h6>
      <p>
        <code>Storage.get(key, widgetSrc?)</code> - returns the public value for
        a given key under the given <code>widgetSrc</code> or the current
        component if <code>widgetSrc</code> is omitted. Can only read public
        values.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Required</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined key</td>
          </tr>
          <tr>
            <td>widgetSrc</td>
            <td>optional</td>
            <td>object</td>
            <td>a user-defined component</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-2" />
      <h6>Storage.set</h6>
      <p>
        <code>Storage.set(key, value)</code> - sets the public value for a given
        key under the current widget. The value will be public, so other widgets
        can read it.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Required</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined key</td>
          </tr>
          <tr>
            <td>value</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined value</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-2" />
      <h6>Storage.privateGet</h6>
      <p>
        <code>Storage.privateGet(key)</code> - returns the private value for a
        given key under the current component.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Required</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined key under the current component</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-2" />
      <h6>Storage.privateSet</h6>
      <p>
        <code>Storage.privateSet(key, value)</code> - sets the private value for
        a given key under the current component. The value is private, only the
        current component can read it.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Param</th>
            <th>Required</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>key</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined key under the current component</td>
          </tr>
          <tr>
            <td>value</td>
            <td>required</td>
            <td>object</td>
            <td>a user-defined value</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-5" />
      <h4>Clipboard</h4>
      <p>
        NEAR Components can write data to the system's clipboard through the{" "}
        <code>clipboard.writeText</code> method.
      </p>
      <p>
        Writing to the clipboard is only allowed in trusted actions, for
        example, when the user clicks a button.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["clipboard"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
