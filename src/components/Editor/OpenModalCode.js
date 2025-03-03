import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useWriteContract } from "wagmi";

export default function OpenModalCode(props) {
  const onHide = props.onHide;
  const code = props.code;
  const show = props.show;
  const { writeContract, isSuccess, isPaused} = useWriteContract()
  const trScroll = () => {
    console.log("hola")
    const result = writeContract({
      abi: [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            }
          ],
          "name": "addVersion",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            }
          ],
          "name": "grantPermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            }
          ],
          "name": "PermissionGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            }
          ],
          "name": "PermissionRevoked",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            }
          ],
          "name": "revokePermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "author",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "VersionAdded",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            }
          ],
          "name": "checkPermission",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getLatestVersion",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "content",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "author",
                  "type": "address"
                }
              ],
              "internalType": "struct EternacodeAI.AIModelVersion",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "getUserLatestIds",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "getVersion",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "content",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "author",
                  "type": "address"
                }
              ],
              "internalType": "struct EternacodeAI.AIModelVersion",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "count",
              "type": "uint256"
            }
          ],
          "name": "getVersionsPaginated",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "content",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "author",
                  "type": "address"
                }
              ],
              "internalType": "struct EternacodeAI.AIModelVersion[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "idToLatestAuthor",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      address: '0x12798B1BCBE59E924e64DB7f8A23EF6b2ADB9954',
      functionName: 'addVersion',
      args: [
        "3",
        code
      ],
    })
  }

  const [widgetSrc, setWidgetSrc] = useState("");
  let codeFormated = code ? code.replace(/\n$/, "") : ""
  return (
    <Modal size="xl" centered scrollable show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Saving model data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
          <div style={{height: "250px"}}>
            <Prism
              children={codeFormated}
              style={tomorrow}
              language="javascript"
              PreTag="div"
              showLineNumbers="true"
              codeTagProps = {{
                "fontSize": "10",
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={()=> trScroll()}>Save Data</button>
        <button
          className="btn btn-secondary"
          onClick={onHide}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
