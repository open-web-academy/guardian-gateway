import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function SailsInteraction() {
  return (
    <div>
      <h3>Sails Interaction</h3>
      <p>
        For creating components that can interact with the VARA Network within
        Eternacode, we base the style on React programming,
        using JavaScript, HTML5, and CSS with the possibility of using Bootstrap
        5 for easier style management within these components.
      </p>
      <p>
        To interact with a Sails type contract within the VARA Network, it is necessary to use the generated
        elements and meet the characteristics to ensure their correct
        functioning.
      </p>
      <hr className="my-5" />
      <h4>Available Elements</h4>
      <p>
        The elements that allow interaction with VARA have a syntax that must be
        followed to be called, and they have different characteristics for the
        internal functions they perform. These elements must be called as a
        React component as shown below:
      </p>
      <code>&lt;VaraNetwork.”Variant to call”/&gt;</code>
      <hr className="my-5" />
      <h4>Variants</h4>
      <p>
        Different types of variants can be found that perform various actions
        within the BOS component code. These variants are as follows:
      </p>
      <ul>
        <li>
          <strong>VaraNetwork.Wrapper</strong>
        </li>
        <li>
          <strong>VaraNetwork.Identicon</strong>
        </li>
        <li>
          <strong>VaraNetwork.SailsInteraction</strong>
        </li>
        <li>New elements under development…</li>
      </ul>
      <hr className="my-5" />
      <h3>VaraNetwork.Wrapper</h3>
      <p>
        This element allows encapsulating the entire component being developed,
        verifying that the user has connected their wallet with which they want
        to interact with VARA Network. This ensures that there is a wallet
        available to interact with the network and sign transactions correctly.
        If a selected wallet is found, this element will allow displaying the
        content enclosed within it, following the normal component process.
      </p>
      <h4>Syntax</h4>
      <p>To use this element, it must be called as follows:</p>
      <CopyBlock
        language={"jsx"}
        text={sample["wrapper"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />
      <h3>VaraNetwork.Identicon</h3>
      <p>
        This element allows displaying the icon corresponding to the selected
        wallet within the gateway. This icon is unique and generated based on
        the user's wallet address. You can specify the size of the icon in
        pixels. This Identicon is the same as those shown in Polkadot
        applications and wallets.
      </p>
      <h4>Syntax</h4>
      <p>To implement this element, the code should be written as follows:</p>
      <CopyBlock
        language={"jsx"}
        text={sample["identicon"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />
      <h3>VaraNetwork.SailsInteraction</h3>
      <br/>
      <p>
      With this element, the user can interact with the VARA Network through
      various functions with a Sails type contract. Depending on the call made
      by this element, it can read or write information from a contract 
      implemented in VARA, and use this information within the component 
      implemented in BOS. This element contains various functions that can be
      invoked through the trigger property. This property allows the user to
      add HTML code that uses these functions, triggering their operation. The
      available functions are the following:
      </p>
      <br/>
      <ul>
        <li>
          <strong>sendQuery</strong>
        </li>
        <li>
          <strong>signTransaction</strong>
        </li>
        <li>
          <strong>getAccountInfo</strong>
        </li>
      </ul>
      <br className="my-2"/>
      <h4>sendQuery</h4>
      <br/>
      <p>
      The readState function allows you to obtain information from any contract
      deployed on the VARA network. It returns a promise that, if executed correctly,
      provides the requested information. Errors found will be displayed
      in the console. sendQuery takes the following parameters:
      </p>
      <br/>
      <p><b>This function receives parameters through an object</b></p>
      <ul>
        <li>contractId (Contract address)</li>
        <li>idl (Contract metadata)</li>
        <li>serviceName (Name of the contract service)</li>
        <li>methodName (Name of the method to use)</li>
        <li>args(<b>Optional</b> Data required by the query)</li>
      </ul>
      <br className="my-2"/>
      <h4>signTransaction</h4>
      <br/>
      <p>
        The signTransaction function enables the user to generate and send a
        transaction to a contract deployed on VARA Network. Once the transaction
        signature is accepted, various alerts are shown to the user. If
        everything goes correctly, the user will see two alerts: one with the
        transaction ID currently executing, and another when the transaction is
        completed. If any issues arise, an alert will inform the user about the
        error encountered during execution. signTransaction takes the following
        parameters:
      </p>
      <br/>
      <ul>
        <li>contractId (Contract address)</li>
        <li>idl (Contract metadata)</li>
        <li>serviceName (Name of the contract service)</li>
        <li>methodName (Name of the method to use)</li>
        <li>args(<b>Optional</b> Data required by the query)</li>
        <li>value (<b>Optional</b> Amount of VARA tokens to send in the transaction)</li>
      </ul>
      <br className="my-2"/>
      <h4>getAccountInfo</h4>
      <br/>
      <p>
        This function allows retrieving information about the user's active
        wallet. It can send the address and display this information in the
        component interface. If there is a change in the wallet, it's essential
        to re-run this method to retrieve the updated information. This function
        does not take any parameters; it simply needs to be called.
      </p>
      <br/>
      <h4>Syntax</h4>
      <p>
        To implement this element, the code should be written in the editor as
        follows:
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["interaction"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
