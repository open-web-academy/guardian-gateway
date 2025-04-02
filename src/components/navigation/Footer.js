import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
width: 100%;
display: grid;
background-color: rgba(248,173,24,255);
padding: 20px 0 20px 0;
margin: 0px;
text-align: center;
font-weight: 700;
`


export function Footer(){
    return(
        <StyledFooter>
            <p className="m-0">© 2025 Eternacode X Guardian Protocol</p>
        </StyledFooter>
    )
}