import React from 'react';
import { Fonts } from '../LayoutComponents';
import styled from "styled-components";

export const HeaderStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    min-height: 3rem;
    width: 100%;
    position: fixed;
    box-shadow: 0px 0.5px 2px #D1DADC;
    background-color: #FFFFFF;
    // backdrop-filter: blur(3px);
`;


export const LogoStyled = styled.div`
    background-color: #EF435C;
    color: #FFFFFF;
    font-family: "Work Sans Bold";
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 4px;
`;


const Header: React.FC = () => {


  return (
      <React.Fragment>
        <HeaderStyled> 
          <Fonts />
          <LogoStyled>REF1</LogoStyled> 
        </HeaderStyled>
      </React.Fragment>
  );
};

export default Header;
