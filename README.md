# Description

This project is a website in which B.O.S (Blockchain Operating System) tool from NEAR Protocol is used, which serves to create and deploy 100% decentralized Frontends. In this project, an addition is being made to be able to use the tools found in the GEAR-JS packages to have connection and interaction with the VARA Network and to be able to generate useful components for users by deploying them on the blockchain and being able to consume and use them within this gateway.

<p style = 'text-align:center;'>
<img src="https://raw.githubusercontent.com/yaairnaavaa/Maverick/main/BOS-vara-logo.png" alt="VARA+BOS">
</p>

## What is Blockchain operating system?
Blockchain Operating System (BOS) is a blockchain operating system developed by the NEAR protocol that provides a development environment for creating secure, scalable, and user-friendly decentralized applications (dApps). This system stands out as a pioneering category in the industry and serves as a shared layer that facilitates the exploration and discovery of open web experiences, being compatible with any blockchain.

BOS is a real alternative to centralized platform systems and is available at near.org. It is a universally accessible system, available to both those familiar with web3 and those who are not. It facilitates navigation for both users and developers, simplifying the experience in both the web3 and web2 worlds.

BOS eliminates the need to choose between decentralization and visibility. Both developers and users can enjoy the best of both worlds, whether they are exploring web3 experiences for the first time or building an open web.

To accelerate the development of web3 applications, BOS provides a complete set of tools and capabilities that allow developers to get started quickly. These tools enable the rapid creation of open web applications, seamlessly onboard users, receive feedback, and enhance discoverability.

<p style = 'text-align:center;'>
<img src="https://pages.near.org/wp-content/uploads/2023/04/bos-social.png" alt="VARA+BOS"">
</p>

## BOS Features
1. Modularity: BOS is divided into a series of interconnected modules that can be reused and combined to create different applications.
2. Security: BOS uses a layered security approach to protect dApps from external attacks.
3. Scalability: BOS is designed to be scalable and capable of handling a large number of simultaneous transactions.
4. Flexibility: BOS is compatible with different programming languages and frameworks, allowing developers to use their favorite tools to create dApps.
5. Interoperability: BOS enables interoperability between different blockchains, allowing dApps to interact with different protocols easily and seamlessly.
6. Efficiency: BOS uses an optimized data structure and an efficient consensus model to ensure high performance and fast response times.

## Pillars of BOS
### Components / Widgets 
Components or Widgets are user interfaces developed to address specific problems. These frontend applications are designed by developers, and their source code is accessible through a gateway. In other words, they are modules designed to solve particular challenges within the BOS ecosystem.

### Blockchains
These are the digital platforms where components can invoke functions on any blockchain. Currently, BOS supports various blockchains, including all networks based on EVM (Ethereum Virtual Machine) and NEAR. The source code of the interfaces is stored on NEAR due to its efficient capability to store HTML, CSS, and JavaScript content.

### Gateways 
Gateways are designed to facilitate the availability of decentralized frontends that run locally for any user. In summary, they act as a simple means to render components in various contexts, ensuring that these applications can be displayed in multiple locations in an accessible manner.

## VARA Network + BOS interaction
As can be seen in the following image, the application architecture will be as follows: the frontend will be deployed on the Blockchain Operating System on the NEAR Protocol network, while the backend will run entirely on the VARA Network. This ensures that your applications are executed in a 100% decentralized manner on the blockchain.

<p style = 'text-align:center;'>
<img src="https://raw.githubusercontent.com/yaairnaavaa/Maverick/main/Captura%20de%20pantalla%202024-06-14%20153011.png" alt="VARA+BOS" width="400px">
</p>

## How do I deploy my component?
To deploy a component within the Blockchain Operating System, you need NEAR tokens and an account on the NEAR Protocol, either on the Mainnet or Testnet variant. When we want to save the code, it will be necessary to cover the storage costs within the network, and this must be paid with NEAR.
This gateway has two versions: a Mainnet version and a Testnet version where you can test your components, and once they are ready, you can deploy them on the Mainnet version. The links are as follows: 
- Mainnet: https://vara.ow.academy/ 
- Testnet: To be defined

## Setup & Development

Use NodeJS v20^

Initialize repo:

```
yarn
```

Start development version:

```
yarn start
```

## Widget example

### Basic interaction with FT contract

```jsx
const contract =
  "0xeb4a8f9f5b11f644812306647a4c15161c90813a5451dc35fa24feb10dcb73d9";
const contractData =
  "00010001000000000001030000000107000000000000000108000000a90b3400081466745f696f28496e6974436f6e66696700000c01106e616d65040118537472696e6700011873796d626f6c040118537472696e67000120646563696d616c73080108753800000400000502000800000503000c081466745f696f204654416374696f6e000118104d696e74040010011075313238000000104275726e040010011075313238000100205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380002001c417070726f7665080108746f14011c4163746f724964000118616d6f756e74100110753132380003002c546f74616c537570706c790004002442616c616e63654f66040014011c4163746f724964000500001000000507001410106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001801205b75383b2033325d0000180000032000000008001c081466745f696f1c46544576656e74000110205472616e736665720c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380000001c417070726f76650c011066726f6d14011c4163746f724964000108746f14011c4163746f724964000118616d6f756e74100110753132380001002c546f74616c537570706c790400100110753132380002001c42616c616e63650400100110753132380003000020081466745f696f3c496f46756e6769626c65546f6b656e00001801106e616d65040118537472696e6700011873796d626f6c040118537472696e67000130746f74616c5f737570706c791001107531323800012062616c616e6365732401505665633c284163746f7249642c2075313238293e000128616c6c6f77616e6365732c01905665633c284163746f7249642c205665633c284163746f7249642c2075313238293e293e000120646563696d616c730801087538000024000002280028000004081410002c00000230003000000408142400";

const [ftData, setFtData] = useState(undefined);
const [account, setAccount] = useState(undefined);
return (
  <>
    <VaraNetwork.Wrapper>
      <div className="border border-black p-3 rounded">
        <h4 className="mb-2">Vara Interaction Functions</h4>
        <div className="d-flex flex-row gap-3">
          <VaraNetwork.Interaction
            trigger={({ signTransaction }) => (
              <>
                <button
                  onClick={() => {
                    signTransaction(
                      contract,
                      contractData,
                      { mint: 10 },
                      899819245,
                      0
                    );
                  }}
                >
                  Test Sign Transaction
                </button>
              </>
            )}
          />
          <VaraNetwork.Interaction
            trigger={({ readState }) => (
              <>
                <button
                  onClick={() => {
                    const info = readState(contract, contractData, "");
                    info.then((res) => {
                      console.log("ReadState", res);
                      setFtData(res);
                    });
                  }}
                >
                  {ftData ? "Reload Data" : "Test Read State"}
                </button>
              </>
            )}
          />
          <VaraNetwork.Interaction
            trigger={({ getAccountInfo }) => (
              <>
                <button
                  onClick={() => {
                    setAccount(getAccountInfo());
                  }}
                >
                  {account
                    ? "Reload Account Information"
                    : "Get Account Information"}
                </button>
              </>
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        {account && (
          <div className="border border-black p-3 rounded">
            <h4 className="mb-2">Account Data</h4>
            <div className="d-flex flex-row gap-2">
              <VaraNetwork.Identicon size={30} />
              <p className="m-0 fw-bold">{account.meta.name}</p>
            </div>
            <p className="fw-semibold">{account.decodedAddress}</p>
          </div>
        )}
        {ftData && (
          <div className="border border-black p-3 rounded mt-2">
            <h4 className="mb-2">Fungible Token Contract Data</h4>
            <div>
              <p>
                Token Name: <b>{ftData.name}</b>
              </p>
              <p>
                Symbol: <b>{ftData.symbol}</b>
              </p>
              <p>
                Decimals: <b>{ftData.decimals}</b>
              </p>
              <p>
                Total Supply: <b>{ftData.totalSupply}</b>
              </p>
              <div>
                <p>Balances:</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Account</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ftData.balances.map((data) => {
                      return (
                        <tr>
                          <td>{data[0]}</td>
                          <td>{data[1]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </VaraNetwork.Wrapper>
  </>
);
```
