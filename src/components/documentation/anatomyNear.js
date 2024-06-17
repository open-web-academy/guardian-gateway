import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function AnaNear() {
  return (
    <div>
      <h1>Interacting with Near</h1>
      <p>
        The components can use the Near object to interact with smart contracts
        in the NEAR blockchain. There are three methods:
      </p>

      <ul>
        <li>Near.view</li>
        <li>Near.block</li>
        <li>Near.call</li>
      </ul>
      <hr className="my-5" />

      <h2>Near.view</h2>
      <p>Queries a read-only method from a NEAR smart contract, returning:</p>
      <ul>
        <li>null: If the query is still being processed</li>
        <li>
          undefined: If the query is complete and no value was returned by the
          contract
        </li>
        <li>
          A value: If the query is complete and a value was returned by the
          contract
        </li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["view1"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>contractName</td>
            <td>required</td>
            <td>string</td>
            <td>Name of the smart contract</td>
          </tr>
          <tr>
            <td>methodName</td>
            <td>required</td>
            <td>string</td>
            <td>Name of the method to call</td>
          </tr>
          <tr>
            <td>args</td>
            <td>optional</td>
            <td>object instance</td>
            <td>Arguments to pass to the method</td>
          </tr>
          <tr>
            <td>blockId/finality</td>
            <td>optional</td>
            <td>string</td>
            <td>Block ID or finality of the transaction</td>
          </tr>
          <tr>
            <td>subscribe</td>
            <td>optional</td>
            <td>boolean</td>
            <td>
              This feature allows users to subscribe to a query, which
              automatically refreshes the data for all subscribers every 5
              seconds.
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Avoiding a Common Pitfall:</h4>
      <p>
        If you want to initialize the state with the result of a Near.view call,
        be sure to check first that the value was obtained, to avoid
        initializing the state with null.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["view2"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <p>
        If you don't want to delay the render of your component, you can also
        use the useEffect hook to control the value returned by Near.view.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["view3"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />

      <h2>Near.call</h2>
      <p>
        Calls a smart contract method from the blockchain. Since a transaction
        needs to be signed, the user must be logged in in order to make the
        call.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["call"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>contractName</td>
            <td>required</td>
            <td>string</td>
            <td>Name of the smart contract to call</td>
          </tr>
          <tr>
            <td>methodName</td>
            <td>required</td>
            <td>string</td>
            <td>Name of the method to call on the smart contract</td>
          </tr>
          <tr>
            <td>args</td>
            <td>optional</td>
            <td>object instance</td>
            <td>
              Arguments to pass to the smart contract method as an object
              instance
            </td>
          </tr>
          <tr>
            <td>gas</td>
            <td>optional</td>
            <td>string / number</td>
            <td>
              Maximum amount of gas to be used for the transaction (default
              300Tg)
            </td>
          </tr>
          <tr>
            <td>deposit</td>
            <td>optional</td>
            <td>string / number</td>
            <td>
              Amount of NEAR tokens to attach to the call as deposit (in
              yoctoNEAR units)
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="my-5" />

      <h2>Near.block</h2>
      <p>Queries a block from the blockchain.</p>
      <CopyBlock
        language={"jsx"}
        text={sample["block"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <h4>Parameters</h4>
      <table class="table">
        <thead>
          <tr>
            <th>param</th>
            <th>required</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>blockHeightOrFinality</td>
            <td>optional</td>
            <td>any</td>
            <td>
              The block height or finality level to use for the blockchain query
              (desired block height, or one of the following strings:
              optimistic, final)
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>
          desired block height: The height of the specific block to query,
          expressed as a positive integer
        </li>
        <li>
          optimistic: Uses the latest block recorded on the node that responded
          to your query (&lt; 1 second delay)
        </li>
        <li>
          final: a block that has been validated on at least 66% of the nodes in
          the network (approx. 2s)
        </li>
      </ul>
    </div>
  );
}
