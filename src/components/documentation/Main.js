import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";
import NearComponents from "./NearComponents";
import DevEnvironment from "./devEnvironment";
import AnaBasics from "./anatomyBasics";
import AnaNativeComp from "./anatomyNativeComp";
import AnaNear from "./anatomyNear";
import AnaSocial from "./anatomySocial";
import AnaWebBrowser from "./anatomyWebBrowser";
import WebApps from "./webApps";
import VaraNetwork from "./varaNetwork";

export default function main(props) {
  const { docsRoute } = useParams();
  console.log("ruta", docsRoute);
  let content;
  switch (docsRoute) {
    case "what-is":
      content = <NearComponents />;
      break;
    case "basics":
      content = <AnaBasics />;
      break;
    case "web-methods":
      content = <AnaWebBrowser />;
      break;
    case "builtin-components":
      content = <AnaNativeComp />;
      break;
    case "near":
      content = <AnaNear />;
      break;
    case "social":
      content = <AnaSocial />;
      break;
    case "vara-network":
      content = <VaraNetwork />;
      break;
    default:
      content = <Home />;
  }
  return (
    <div className="pt-4">
      <Container>
        <h2 className="mb-4">Vara + BOS Documentation</h2>
      </Container>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link><Link className="link-dark" to="/docs">What is BOS?</Link></Nav.Link>
            <Nav.Link><Link className="link-dark" to="/docs/what-is">What is a Component?</Link></Nav.Link>
            <NavDropdown
              title="Anatomy of a Component"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item><Link className="link-dark" to="/docs/basics">Basics</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link className="link-dark" to="/docs/web-methods">
                Web Browser Methods
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className="link-dark" to="/docs/builtin-components">
                List of Native Components
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className="link-dark" to="/docs/near">
                Interacting with Near
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className="link-dark" to="/docs/social">
                Social Interactions
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link className="link-dark" to="/docs/vara-network">VARA Network</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="py-4">
        <Container>{content}</Container>
      </div>
    </div>
  );
}
