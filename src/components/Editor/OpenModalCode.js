import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useWriteContract } from "wagmi";

export default function OpenModalCode(props) {
  const onHide = props.onHide;
  const code = props.code;
  const modelName = props.modelName
  const show = props.show;
  const { writeContract, isSuccess, isPaused} = useWriteContract()
  const trScroll = () => {
    console.log("hola")
    writeContract({
      abi: [[
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            }
          ],
          "name": "createEntry",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "EntryCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "EntryUpdated",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "viewer",
              "type": "address"
            }
          ],
          "name": "grantPermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "viewer",
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
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "viewer",
              "type": "address"
            }
          ],
          "name": "PermissionRevoked",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "viewer",
              "type": "address"
            }
          ],
          "name": "revokePermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "newText",
              "type": "string"
            }
          ],
          "name": "updateEntry",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getAccessibleEntries",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "currentText",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "createdAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updatedAt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct TextStorage.AccessibleEntry[]",
              "name": "",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "currentText",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "createdAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updatedAt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct TextStorage.AccessibleEntry[]",
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
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "getCurrentText",
          "outputs": [
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
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
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "count",
              "type": "uint256"
            }
          ],
          "name": "getRecentVersions",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "text",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "modifiedAt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct TextStorage.Version[]",
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
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "getSpecificVersion",
          "outputs": [
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "modifiedAt",
              "type": "uint256"
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
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "getVersionCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]],
      address: '0xa8aF597A8bcAe610cdD4621B400131173acFddcF',
      functionName: 'createEntry',
      args: [
        modelName,
        code
      ],
    })
    console.log(isSuccess, isPaused)
    console.log("hola2")
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
