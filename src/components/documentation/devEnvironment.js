import React, { useEffect, useState, useMemo } from "react";


export default function DevEnvironment(props) {
  return (
    <div>
      <h3>Choose your Dev Environment</h3>
      <p>
        The environments in which you can develop Components are divided into
        two categories:
      </p>
      <ul>
        <li>
          <strong>Web Tools:</strong> Online tools that allow you to quickly
          start building and sharing components.
        </li>
        <li>
          <strong>Local Tools:</strong> Tools that allow you to develop and test
          components locally.
        </li>
      </ul>
      <hr className="my-5" />
      <h4>Web Tools</h4>
      <p>
        The quickest way to start building NEAR Components is by using one of
        the online tools. They are great for taking your first steps, while they
        let you find other developers and components in the NEAR ecosystem.
      </p>
      <h5>Jutsu.ai</h5>
      <p>
        <a href="https://jutsu.ai/">Jutsu.ai</a> is a web IDE made for NEAR developers. It contains examples and
        tutorials to help onboarding you.
      </p>
      <hr className="my-5" />
      <h4>Local Tools</h4>
      <p>
        If you want to collaborate with a team or work on a larger project, you
        will likely want more version control, automated testing and deployment,
        and other workflows. For this, the NEAR ecosystem offers a set of tools
        to easily develop and test your components entirely locally.
      </p>
      <h6>NEAR VSCode Extension</h6>
      <p>
        The <a href="https://marketplace.visualstudio.com/items?itemName=near-protocol.near-discovery-ide">NEAR VSCode Extension</a> integrates with the VSCode IDE to help you
        develop, preview and deploy components all within VSCode.
      </p>
      <h6>BOS Loader</h6>
      <p>
        A CLI tool to preview local components in NEAR BOS. A perfect companion
        to the <a href="https://github.com/FroVolod/bos-cli-rs">BOS CLI</a>.
      </p>
      <h6>BOS CLI</h6>
      <p>
        A command line utility that simplifies local component development for
        NEAR BOS.
      </p>
      <h6>BOS Workspace</h6>
      <p>
        A comprehensive toolset for simplifying the local development of NEAR
        components and applications, featuring hot reload, TypeScript support,
        multi-app management, and a local gateway.
      </p>
      <h6>Além</h6>
      <p>
        A web3 JavaScript/TypeScript library to create web3 applications for
        Near BOS. It's developer-friendly and uses React patterns, making it
        easy to organize files and write code. Access the
        <a href="https://alem.dev/">Além Docs</a> to get to know more.
      </p>
    </div>
  );
}
