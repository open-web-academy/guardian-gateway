import React, { useState, useEffect, useMemo } from 'react';
import { useReadContract, useAccount } from 'wagmi';
import { useParams } from "react-router-dom";
import { abi } from '../config/abi';
import { Prism } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

export default function TestModelPage() {
  const { widgetSrc } = useParams();
  const [isRunning, setIsRunning] = useState(false);
  const [runError, setRunError] = useState(null);
  const account = useAccount();
  const [consoleLogs, setConsoleLogs] = useState([]);

  // Simplified src calculation
  const srcValues = useMemo(() => {
    const src = widgetSrc || '';
    return src.split('/');
  }, [widgetSrc]);

  // Read contract data
  const { data, isError, isLoading } = useReadContract({
    address: '0xB59f727832e52EADA1bE6f1a62e1d1806a2d1dfa',
    abi,
    functionName: 'getCurrentText',
    args: [srcValues[0], srcValues[1]],
    enabled: srcValues.length >= 2
  });

  // Initialize TensorFlow once
  useEffect(() => {
    const initTF = async () => {
      await tf.ready();
      await tf.setBackend('webgl');
    };
    initTF();
  }, []);

  // Add console capture function
  const captureLog = (type, ...args) => {
    const log = {
      type,
      message: args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
      ).join(' '),
      timestamp: new Date().toISOString()
    };
    setLogs(prev => [...prev, log]);
  };

  // Run model function
  const runModel = async () => {
    setConsoleLogs([]); // Clear previous logs
    setIsRunning(true);
    setRunError(null);
    const startTime = performance.now();
    
    try {
      const modelCode = data?.[1] || '';
      
      // Override console.log to capture training output
      const originalLog = console.log;
      console.log = (...args) => {
        originalLog.apply(console, args);
        const logMessage = args.join(' ');
        setConsoleLogs(prev => [...prev, {
          message: logMessage,
          timestamp: new Date().toLocaleTimeString()
        }]);
      };
      
      const safeEval = new Function('tf', modelCode);
      
      const result = await safeEval(tf);
      
      // Restore original console.log
      console.log = originalLog;
      
      // Process tensor information if result is a tensor
      let tensorData = null;
      if (result instanceof tf.Tensor) {
        tensorData = {
          shape: result.shape,
          dtype: result.dtype,
          data: Array.from(await result.data())
        };
      }
    } catch (error) {
      setRunError(error.message);
      console.error('Error running model:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="container p-5"> 
      {isLoading && <div>Loading model data...</div>}
      {isError && <div>Error loading model</div>}
      
      {data && (
        <>
         <h1 className='fw-bold pb-4'>{data[0]}</h1>
          <div className="mb-4">
            <h4 className='fw-bold pb-2'>Model Details</h4>
            <p><b>Created:</b> {new Date(Number(data[2]) * 1000).toLocaleString()}</p>
            <p><b>Updated:</b> {new Date(Number(data[3]) * 1000).toLocaleString()}</p>
          </div>
          
          <div className="mb-4">
            <button
              className="btn btn-success"
              onClick={runModel}
              disabled={isRunning}
            >
              {isRunning ? 'Running...' : 'Run Model'}
            </button>
          </div>

          {/* Console Output Section */}
            {consoleLogs.length > 0 && (
                <div className="card mb-4">
                <div className="card-header">
                    <h4>Console Output</h4>
                </div>
                <div 
                    className="card-body bg-dark text-light" 
                    style={{
                    maxHeight: '300px', 
                    overflow: 'auto',
                    fontFamily: 'monospace'
                    }}
                >
                    {consoleLogs.map((log, index) => (
                    <div key={index} className="mb-1">
                        <small className="text-muted">{log.timestamp}</small>
                        <pre className="m-0 text-light">{log.message}</pre>
                    </div>
                    ))}
                </div>
                </div>
            )}
            {runError && (
                <div className="alert alert-danger">
                <h4>Error Running Model</h4>
                <pre>{runError}</pre>
                </div>
            )}
          
          <div className="mb-4">
            <h4 className='fw-bold pb-2'>Model Code</h4>
            <Prism
              language="javascript"
              style={tomorrow}
              showLineNumbers
              PreTag="div"
              codeTagProps = {{
                "fontSize": "10",
              }}
            >
              {data[1]}
            </Prism>
          </div>
        </>
      )}

      
    </div>
  );
}