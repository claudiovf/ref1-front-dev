import React from 'react';
import { HeaderStyled, LogoStyled } from './style';


const Header: React.FC = () => {


  return (
      <React.Fragment>
        <HeaderStyled> 
            <LogoStyled>REF1</LogoStyled> 
        </HeaderStyled>
      </React.Fragment>
  );
};

export default Header;
