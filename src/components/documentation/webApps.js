import React, { useEffect, useState, useMemo } from "react";

export default function WebApps(props) {
  return (
    <div>
      <h1>Using components on WebApps</h1>
      <p>
        In order to use the components you create in a WebApp you need to use
        what is known as the NEAR VM. This virtual machine helps you to easily
        fetch components from the blockchain and transform them into executable
        code.
      </p>
      <p>There are two possible scenarios:</p>
      <ul>
        <li>You want to start a WebApp from scratch.</li>
        <li>You want to integrate components into an existing WebApp.</li>
      </ul>
      <hr className="my-5"/>
      <h2>Starting a WebApp from scratch</h2>
      <p>
        If you want to start a WebApp from scratch, the simplest option is to
        use <code>create-near-app</code>. To use it, you only need to have
        node.js installed on your computer.
      </p>
      <p>Simply run the following command and follow the instructions:</p>
      <pre>
        <code>npx create-near-app@latest</code>
      </pre>
      <hr className="my-5"/>
      <h2>Integrating Components into your WebApp</h2>
      <p>
        In order to integrate components into your WebApp you will leverage two
        libraries:
      </p>
      <ul>
        <li>
          <strong>Wallet Selector</strong>: Allows user to login using their
          preferred NEAR wallet.
        </li>
        <li>
          <strong>NEAR VM</strong>: Simplifies fetching NEAR components from the
          blockchain and rendering them.
        </li>
      </ul>
      <p>
        The best way to learn how to integrate components into your WebApp is by
        following our tutorial:
      </p>
    </div>
  );
}
