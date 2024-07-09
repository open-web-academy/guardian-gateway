import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MobileMenuButton } from "./MobileMenuButton";
import { NearSocialLogo } from "../../icons/NearSocialLogo";
import { NotificationWidget } from "../NotificationWidget";
import { SignInButton } from "../SignInButton";
import { StarButton } from "../StarButton";
import logo from "../../../images/BOS-vara-logo.png";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--white-light-2);
  z-index: 1000;
  padding: 10px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .logo-link {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .nav-notification-widget {
    margin: 0;
  }

  .nav-sign-in-btn {
    background: none;
    border: none;
    padding-right: 0;
  }
`;
const StyledLogo = styled.img`
  height: 40px;
`;
const Banner = styled.div`
  width: 100%;
  background-color: var(--white-light-2);
  background-color: var(--green-vara-1);
  padding: 10px 0 10px 0;
  margin: 5px 0 0 0;
  text-align: center;
  font-weight: 700;
`

export function Navigation(props) {
  return (
    <StyledNavigation>
      <Link
        to="/"
        className="logo-link"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <StyledLogo src={logo} />
      </Link>
      <Banner>
        <p className="m-0">For a complete experience check out this site from desktop</p>
      </Banner>
    </StyledNavigation>
  );
}
