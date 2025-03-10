import React, { useEffect, useState } from "react";
import { Widget } from "near-social-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";
import { Prism } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ViewModelAIPage(props) {
  useHashRouterLegacy();

  const { widgetSrc } = useParams();
  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});
  const [code, setCode] = useState()

  const src =
    window?.InjectedConfig?.forcedWidget ||
    widgetSrc ||
    window?.InjectedConfig?.defaultWidget ||
    props.widgets.default;

  const showMenu = !window?.InjectedConfig?.hideMenu;
  const setWidgetSrc = props.setWidgetSrc;
  const viewSourceWidget = props.widgets.viewSource;

  const injectedProps = window?.InjectedConfig?.props;

  useEffect(() => {
    setWidgetProps(
      Object.assign(
        injectedProps || {},
        Object.fromEntries([...query.entries()])
      )
    );
  }, [query, injectedProps]);

  useEffect(() => {
    setTimeout(() => {
      setWidgetSrc(
        src === viewSourceWidget && query.get("src")
          ? {
              edit: query.get("src"),
              view: null,
            }
          : {
              edit: src,
              view: src,
            }
      );
      console.log(src)
      const code=`// Define the sigmoid activation function
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

// Define the derivative of the sigmoid function
function sigmoidPrime(x) {
  return x * (1 - x);
}

// Initialize random weights and biases
let InputHiddenWeights = [
  [Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random()],
];
let HiddenOutputWeight = [Math.random(), Math.random(), Math.random()];
let HiddenBias = [Math.random(), Math.random(), Math.random()];
let OutputBias = Math.random();

// Train the network using gradient descent
function train(inputs, targets, epochLimit = 10000, learningRate = 0.1) {
  for (let epoch = 0; epoch < epochLimit; epoch++) {
    for (let [x, y, target] of zip(inputs[0], inputs[1], targets)) {
      // Forward pass
      let HiddenLayer = InputHiddenWeights[0].map((w, i) =>
        sigmoid(x * w + y * InputHiddenWeights[1][i] + HiddenBias[i])
      );
      let Output = sigmoid(
        dotProduct(HiddenLayer, HiddenOutputWeight) + OutputBias
      );

      // Backward pass
      let OutputDelta = (Output - target) * sigmoidPrime(Output);
      let HiddenDeltas = HiddenLayer.map(
        (_, i) =>
          OutputDelta * HiddenOutputWeight[i] * sigmoidPrime(HiddenLayer[i])
      );

      // Update weights and biases
      HiddenOutputWeight = HiddenOutputWeight.map(
        (w, i) => w - learningRate * OutputDelta * HiddenLayer[i]
      );
      OutputBias -= learningRate * OutputDelta;
      InputHiddenWeights = InputHiddenWeights.map((input, i) => [
        input[0] - learningRate * HiddenDeltas[0] * x,
        input[1] - learningRate * HiddenDeltas[1] * x,
        input[2] - learningRate * HiddenDeltas[2] * x,
      ]);
      HiddenBias = HiddenBias.map(
        (bias, i) => bias - learningRate * HiddenDeltas[i]
      );

      // Log progress
      if (epoch % 1000 == 0) {
        console.log('Epoch: '+epoch+', Loss: '+(Output - target) ** 2);
      }
    }
  }
}

// Helper functions
function zip(...arrays) {
  return arrays[0].map((_, i) => arrays.map((array) => array[i]));
}

function dotProduct(a, b) {
  return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
}

// Train the XOR net
train(
  [
    [0, 0, 1, 1],
    [0, 1, 0, 1],
  ], //Inputs
  [0, 1, 1, 0], //Outputs
  10000, //Epoch limit
  0.1 //Learning rate
);
`
let codeFormated = code ? code.replace(/\n$/, "") : ""
setCode(codeFormated)
    }, 1);
  }, [src, query, setWidgetSrc, viewSourceWidget]);

  return (
    <div className="p-5">
      <h1 className="fw-bold pb-2">JS Neuron</h1>
      <div className="d-flex flex-row justify-content-between">
        <div className="pb-4">
          <h5 className="fw-bold">Owner:</h5>
          <p>0x693C41ab52acd72B8fD2Fb5b8334D614e5de5dD5</p>
        </div>
        <div className="pb-4">
          <h5 className="fw-bold">Accounts with access:</h5>
          <p>0x35723ac32f54d1f581C6aEb590e794858f36F48C</p>
        </div>
      </div>
      <div className="pb-4">
        <p><b>Created at:</b> 09/03/2025 12:00pm</p>
        <p><b>Last update:</b> 09/03/2025 12:00pm</p>
      </div>
      <div className="d-flex flex-row gap-2 pb-4">
        <button className="btn btn-outline-success">Grant access</button>
        <button className="btn btn-success">Edit</button>
      </div>
      <div>
        <h5 className="fw-bold">AI Model Code</h5>
      </div>
      <Prism
        children={code}
        style={tomorrow}
        language="javascript"
        PreTag="div"
        showLineNumbers="true"
        codeTagProps = {{
          "fontSize": "10",
        }}
      />
    </div>
  )
}
