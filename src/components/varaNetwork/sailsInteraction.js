import React from "react";
import { useAccount } from '@gear-js/react-hooks';
import {useMulticontractSails} from '../../hooks/useMulticontractSails'
import Swal from "sweetalert2";

export const SailsInteraction = ({ trigger, children }) => {
  const varaAccount = useAccount();
  
  const { sails } = useMulticontractSails();
  const signTransaction = async( data ) =>{
    console.log(data)
    try{
    const result = await sails.sendCommand(data);
    const { msgId, blockHash, txHash, response } = result;
    console.log(result.isFinalized)
    const resp = response()
    resp.then((res)=>{
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Transaction executed",
        text: "Transaction Hash: "+ txHash,
        showConfirmButton: false,
        icon: "success",
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
    })
    //alert.info(`Message in block: ${blockHash}`);
    return response()
    //const serviceResponse = await response();

    //alert.success('Message send !');

    //console.log("Response: ", Object.keys(serviceResponse)[0]);

    } catch(err){
      console.error(":( transaction failed", err);
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Transaction failed",
        text: err,
        showConfirmButton: false,
        icon: "error",
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
    }
  }

  const getAccountInfo = () =>{
    return varaAccount.account
  }

  const sendQuery = async(data) =>{
    const result = sails.sendQuery(data)
    return result
  }

  const sailsInteraction = {
    signTransaction,
    getAccountInfo,
    sendQuery
  };
  return (
    <>
      {trigger(sailsInteraction)}
      {children}
    </>
  );
};
