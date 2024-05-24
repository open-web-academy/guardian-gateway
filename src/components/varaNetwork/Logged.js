import React from "react";
import {GearWalletButton} from './gearWalletButton'
import { useStore } from "./state";

export const Wrapper = ({children}) => {
  const { account } = useStore();

  return (
  <>
    {account? 
    children 
    : 
    <div className="d-flex flex-column gap-4 align-items-center pt-5">
        <h2 className="text-center fw-semibold m-0">Connect your Vara Network wallet</h2>
        <GearWalletButton/>
    </div>
    }
  </>);
};
