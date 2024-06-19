import React, { useEffect, useState, useMemo } from "react";
import { CopyBlock, github } from "react-code-blocks";
import { default as sample } from "./codeblocks";


export default function NearComponents(props) {
  return (
    <div>
      <h3>What are NEAR Components?</h3>
      <p>
        NEAR Components are a new way to build web applications. They are
        composable, reusable, and decentralized.
      </p>
      <img
        className="mx-auto d-block"
        src="https://raw.githubusercontent.com/yaairnaavaa/Maverick/main/components-landing.png"
        alt="VARA+BOS"
      />
      <hr className="my-5" />

      <h4>Familiar to Web Developers</h4>
      <p>
        NEAR Components are built on top of React Components, meaning that they:
      </p>
      <ul>
        <li>
          Handle input through the <code>prop</code>
        </li>
        <li>
          Handle side effects through the <code>useEffect</code> hooks variable
        </li>
        <li>
          Handle state through the <code>useState</code> hook
        </li>
      </ul>
      <CopyBlock
        language={"jsx"}
        text={sample["familiarWD"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <p>
        In contrast with React, NEAR Components are not wrapped in a function or
        class definition. Indeed, when writing a NEAR Component, you focus on
        writing the body of the component, which is a function that returns the
        JSX to be rendered.
      </p>

      <hr className="my-5" />

      <h4>NEAR Native</h4>
      <p>
        NEAR Components can readily interact with smart contracts in the NEAR
        Blockchain. While view methods are free to query by anyone, call methods
        require the user to be logged in.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["nearNative"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <hr className="my-5" />

      <h4>Social from the Get-Go</h4>
      <p>
        NEAR Components are easily integrated with NEAR Social, a social network
        built on NEAR.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["socialGetGo"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <hr className="my-5" />

      <h4>Fully On-Chain & Easily Composable</h4>
      <p>
        Leveraging the cheap storage and computation of the NEAR Blockchain,
        NEAR Components' code is stored fully on-chain in the SocialDB smart
        contract (<code>social.near</code>).
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["codeOnchain"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />

      <p>
        Once deployed, a component can be imported and used by any other
        component. Composing components as LEGO blocks allows you to build
        complex applications.
      </p>
      <CopyBlock
        language={"jsx"}
        text={sample["deployed"]}
        showLineNumbers={true}
        theme={github}
        wrapLines={true}
        codeBlock
      />
      <hr className="my-5" />

      <h4>Multi-Chain by Design</h4>
      <p>
        NEAR Components can easily interact with Ethereum-compatible
        blockchains, helping to easily create decentralized frontends for
        multi-chain applications.
      </p>
      <h5>Link to an example: <a href="https://near.social/mob.near/widget/WidgetSource?src=zavodil.near/widget/Lido">Lido Component</a></h5>
    </div>
  );
}
