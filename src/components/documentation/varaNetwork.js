import React from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";

export default function VaraNetwork() {
  return (
    <div>
      <h2>Creation of Components</h2>
    <p>For creating components that can interact with the VARA Network within the Blockchain Operating System, we base the style on React programming, using JavaScript, HTML5, and CSS with the possibility of using Bootstrap 5 for easier style management within these components.</p>
    <p>To interact with the VARA Network, it is necessary to use the generated elements and meet the characteristics to ensure their correct functioning.</p>
    <hr className="my-5"/>
    <h3>Available Elements</h3>
    <p>The elements that allow interaction with VARA have a syntax that must be followed to be called, and they have different characteristics for the internal functions they perform. These elements must be called as a React component as shown below:</p>
    <code>&lt;VaraNetwork.”Variant to call”/&gt;</code>
    <hr className="my-5"/>
    <h3>Variants</h3>
    <p>Different types of variants can be found that perform various actions within the BOS component code. These variants are as follows:</p>
    <ul>
        <li><strong>VaraNetwork.Wrapper</strong></li>
        <li><strong>VaraNetwork.Identicon</strong></li>
        <li><strong>VaraNetwork.Interaction</strong></li>
        <li>New elements under development…</li>
    </ul>
    <hr className="my-2"/>
    <h4>VaraNetwork.Wrapper</h4>
    <p>This element allows encapsulating the entire component being developed, verifying that the user has connected their wallet with which they want to interact with VARA Network. This ensures that there is a wallet available to interact with the network and sign transactions correctly. If a selected wallet is found, this element will allow displaying the content enclosed within it, following the normal component process.</p>
    <h5>Syntax</h5>
    <p>To use this element, it must be called as follows:</p>
    <CopyBlock
        language={"jsx"}
        text={sample["wrapper"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-2"/>
    <h2>VaraNetwork.Identicon</h2>
    <p>This element allows displaying the icon corresponding to the selected wallet within the gateway. This icon is unique and generated based on the user's wallet address. You can specify the size of the icon in pixels. This Identicon is the same as those shown in Polkadot applications and wallets.</p>
    <h3>Syntax</h3>
    <p>To implement this element, the code should be written as follows:</p>
    <CopyBlock
        language={"jsx"}
        text={sample["identicon"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-2"/>
    <h2>VaraNetwork.Interaction</h2>
    <p>With this element, the user can interact with the VARA Network through various functions. Depending on the call made by this element, it can read or write information from a contract deployed on VARA, and use this information within the component deployed on BOS. This element contains several functions that can be called using the trigger property. This property allows the user to add HTML code that uses these functions, activating their operation. The available functions are as follows:</p>
    <ul>
        <li><strong>readState</strong></li>
        <li><strong>signTransaction</strong></li>
        <li><strong>getAccountInfo</strong></li>
    </ul>
    <h3>readState</h3>
    <p>The readState function allows fetching the state of any contract deployed on VARA Network. It returns a promise which, if successful, provides the requested information. Any errors encountered will be shown in the console. readState takes the following parameters:</p>
    <ul>
        <li>programId (Contract address)</li>
        <li>metadata (Contract metadata)</li>
        <li>params (Parameters sent to perform the Read State operation)</li>
    </ul>
    <h3>signTransaction</h3>
    <p>The signTransaction function enables the user to generate and send a transaction to a contract deployed on VARA Network. Once the transaction signature is accepted, various alerts are shown to the user. If everything goes correctly, the user will see two alerts: one with the transaction ID currently executing, and another when the transaction is completed. If any issues arise, an alert will inform the user about the error encountered during execution. signTransaction takes the following parameters:</p>
    <ul>
        <li>programId (Contract address)</li>
        <li>metadata (Contract metadata)</li>
        <li>params (Parameters sent to execute the Sign Transaction)</li>
        <li>gas (Gas sent to execute the transaction)</li>
        <li>value (Amount of VARA tokens to send in the transaction)</li>
    </ul>
    <h3>getAccountInfo</h3>
    <p>This function allows retrieving information about the user's active wallet. It can send the address and display this information in the component interface. If there is a change in the wallet, it's essential to re-run this method to retrieve the updated information. This function does not take any parameters; it simply needs to be called.</p>
    <h3>Syntax</h3>
    <p>To implement this element, the code should be written in the editor as follows:</p>
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
