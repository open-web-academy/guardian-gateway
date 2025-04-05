import React, { useEffect, useState } from 'react';
import { GearWalletButton } from '../varaNetwork/gearWalletButton';
import { useAccount, useBalance, useBalanceFormat, useApi } from "@gear-js/react-hooks";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = (props) => {
  const { isAppReady } = props;
  const { account } = useAccount();
  const { isApiReady } = useApi();
  const [balance, setBalance] = useState(null);
  const accountBalance = useBalance(account?.address);
  const [ apiReady, setApiReady ] = useState(false);
  //const formatBalance  = useBalanceFormat();
  const { getFormattedBalance } = useBalanceFormat();
  if(isApiReady && !apiReady){
    setApiReady(true);
  }
  useEffect(() => {
    if(isApiReady && accountBalance.isBalanceReady){
      console.log("cargo api");
      console.log("balance", accountBalance);
      console.log("formatBalance", getFormattedBalance(accountBalance.balance));
      //const formattedBalance = accountBalance.isBalanceReady ? getFormattedBalance(accountBalance) : undefined
      //console.log("formatBalance", formatBalance.getFormattedBalance(accountBalance));
      //const { getFormattedBalance } = useBalanceFormat();
      //const formattedBalance = accountBalance ? formatBalance.getFormattedBalance(accountBalance) : undefined
      //setBalance(formattedBalance);
    }
  }, [apiReady, accountBalance.isBalanceReady]);
  
  //const formattedBalance = balance ? getFormattedBalance(balance) : undefined
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo/Imagen a la izquierda */}
        <div className="navbar-brand">
          <img
            src="/Guardian.png"
            alt="Logo"
            height="30"
            className="d-inline-block align-text-top"
          />
        </div>

        {/* Balance y Botón a la derecha */}
        <div className="ms-auto d-flex align-items-center gap-3">
          {balance !== null && (
            <span className="text-light fw-bold">{} VARA</span>
          )}
          <GearWalletButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 