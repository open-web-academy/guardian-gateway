import React from 'react';
import { GearWalletButton } from '../varaNetwork/gearWalletButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
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

        {/* Botón a la derecha */}
        <div className="ms-auto">
          <GearWalletButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 