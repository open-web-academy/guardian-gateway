import React, { useEffect, useState } from "react";

export default function Home(props) {
  return (
    <div>
      <div >
        <h3>What is Blockchain Operating System?</h3>
        <p>
          Blockchain Operating System (BOS) is a blockchain operating system
          developed by the NEAR protocol that provides a development environment
          for creating secure, scalable, and user-friendly decentralized
          applications (dApps). This system stands out as a pioneering category
          in the industry and serves as a shared layer that facilitates the
          exploration and discovery of open web experiences, being compatible
          with any blockchain.
        </p>
        <p>
          BOS is a real alternative to centralized platform systems and is
          available at{" "}
          <a href="https://near.org" target="_blank">
            near.org
          </a>
          . It is a universally accessible system, available to both those
          familiar with web3 and those who are not. It facilitates navigation
          for both users and developers, simplifying the experience in both the
          web3 and web2 worlds.
        </p>
        <p>
          BOS eliminates the need to choose between decentralization and
          visibility. Both developers and users can enjoy the best of both
          worlds, whether they are exploring web3 experiences for the first time
          or building an open web.
        </p>
        <p>
          To accelerate the development of web3 applications, BOS provides a
          complete set of tools and capabilities that allow developers to get
          started quickly. These tools enable the rapid creation of open web
          applications, seamlessly onboard users, receive feedback, and enhance
          discoverability.
        </p>
      </div>
        <hr className="my-5"/>
      <div >
      <h3>BOS Features</h3>
      <ul>
        <li>
          <strong>Modularity:</strong> BOS is divided into a series of
          interconnected modules that can be reused and combined to create
          different applications.
        </li>
        <li>
          <strong>Security:</strong> BOS uses a layered security approach to
          protect dApps from external attacks.
        </li>
        <li>
          <strong>Scalability:</strong> BOS is designed to be scalable and
          capable of handling a large number of simultaneous transactions.
        </li>
        <li>
          <strong>Flexibility:</strong> BOS is compatible with different
          programming languages and frameworks, allowing developers to use their
          favorite tools to create dApps.
        </li>
        <li>
          <strong>Interoperability:</strong> BOS enables interoperability
          between different blockchains, allowing dApps to interact with
          different protocols easily and seamlessly.
        </li>
        <li>
          <strong>Efficiency:</strong> BOS uses an optimized data structure and
          an efficient consensus model to ensure high performance and fast
          response times.
        </li>
      </ul>
      </div>
      <hr className="my-5"/>
      <div >
      <h3>Pillars of BOS</h3>
      <h4>Components / Widgets</h4>
      <p>
        Components or Widgets are user interfaces developed to address specific
        problems. These frontend applications are designed by developers, and
        their source code is accessible through a gateway. In other words, they
        are modules designed to solve particular challenges within the BOS
        ecosystem.
      </p>

      <h4>Blockchains</h4>
      <p>
        These are the digital platforms where components can invoke functions on
        any blockchain. Currently, BOS supports various blockchains, including
        all networks based on EVM (Ethereum Virtual Machine) and NEAR. The
        source code of the interfaces is stored on NEAR due to its efficient
        capability to store HTML, CSS, and JavaScript content.
      </p>

      <h4>Gateways</h4>
      <p>
        Gateways are designed to facilitate the availability of decentralized
        frontends that run locally for any user. In summary, they act as a
        simple means to render components in various contexts, ensuring that
        these applications can be displayed in multiple locations in an
        accessible manner.
      </p>
      </div>
      <hr className="my-5"/>
      <div >
      <h3>VARA Network + BOS interaction</h3>
      <p>
        As can be seen in the following image, the application architecture will
        be as follows: the frontend will be deployed on the Blockchain Operating
        System on the NEAR Protocol network, while the backend will run entirely
        on the VARA Network. This ensures that your applications are executed in
        a 100% decentralized manner on the blockchain.
      </p>
      <img className="mx-auto d-block" src="https://raw.githubusercontent.com/yaairnaavaa/Maverick/main/Captura%20de%20pantalla%202024-06-14%20153011.png" alt="VARA+BOS" width="400px"/>
      </div>
      <hr className="my-5"/>
      <div >
      <h4>How do I deploy my component?</h4>
      <p>
        To deploy a component within the Blockchain Operating System, you need
        NEAR tokens and an account on the NEAR Protocol, either on the Mainnet
        or Testnet variant. When we want to save the code, it will be necessary
        to cover the storage costs within the network, and this must be paid
        with NEAR.
      </p>
      <p>
        This gateway has two versions: a Mainnet version and a Testnet version
        where you can test your components, and once they are ready, you can
        deploy them on the Mainnet version. The links are as follows:
      </p>
      <ul>
        <li>
          Mainnet:{" "}
          <a href="https://vara.ow.academy/" target="_blank">
            https://vara.ow.academy/
          </a>
        </li>
        <li>Testnet: To be defined</li>
      </ul>
      </div>
      <hr className="my-5"/>
      <div >
      <h3>Creation of Components</h3>
      <p>
        For creating components that can interact with the VARA Network within
        the Blockchain Operating System, we base the style on React programming,
        using JavaScript, HTML5, and CSS with the possibility of using Bootstrap
        5 for easier style management within these components.
      </p>
      <p>
        To interact with the VARA Network, it is necessary to use the generated
        elements and meet the characteristics to ensure their correct
        functioning.
      </p>
      </div>
    </div>
  );
}
