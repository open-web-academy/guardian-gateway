import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function AnaBasics() {
  return (
    <div>
      <h1>Basics</h1>
      <p>
        Borrowing from React, Near Components use hooks such as{" "}
        <code>useState</code> and <code>useEffect</code> to handle the state's
        logic, and props to receive parameters.
      </p>
      <p>
        Near Components are stored in the blockchain, for which you will use the
        NEAR VM to retrieve and execute them in the browser.
      </p>
      <p>
        Using a VM enforces components to be sandboxed, making them very secure
        since they cannot access your LocalStorage or other elements in the page
        they are incorporated to. However, because of this, components cannot
        import external libraries. However, they can import functions from other
        components.
      </p>
      <hr className="my-5" />

      <h2>State</h2>
      <p>
        To handle the component's state you can use <code>useState</code> hook.
        The <code>useState</code> hook returns a tuple of two values: the
        current state and a function that updates it.
      </p>

      <CopyBlock
        language={"jsx"}
        text={sample["state"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <p>
        Each time a state variable is updated, the component will be
        re-rendered. This means that the whole code will run again.
      </p>
      <hr className="my-5" />

      <h2>Props</h2>
      <p>
        Each component has access to a local variable named <code>props</code>{" "}
        which holds the properties received as input when the component is
        composed.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["props"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />

      <h2>useEffect Hook</h2>
      <p>
        The <code>useEffect</code> hook is used to handle side effects. It will
        execute each time one of the dependencies changes.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["useEffect"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />

      <h2>Import</h2>
      <p>
        Components can import functions from other components. This is useful to
        reuse code and to create libraries of components.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["import"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <p>Where the code of the Math component is:</p>
      <CopyBlock
        language={"jsx"}
        text={sample["importCode"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
