import React from 'react';
import {  StyledLink } from '../LayoutComponents';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../../store/actions';
import { eventGa } from '../../RouteTracker';
import { Settings } from '@styled-icons/fluentui-system-regular/Settings';
import { toggleSettingsOpen } from '../../store/SettingsStore/actions';
import { Search } from '@styled-icons/fluentui-system-filled';
import { RootState } from '../../store';
import { SettingsState } from '../../store/SettingsStore/settingsTypes';

export const HeaderStyled = styled.div<{darkMode: boolean}>`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    max-width: 100vw;
    width: 100%;
    position: fixed;
    box-shadow: 0px 0.5px 2px #D1DADC;
    background-color: ${props => props.darkMode ? "#1f1f1f" : "#FFF" };
    overflow: hidden;
    z-index: 1000;
`;


export const LogoStyled = styled.div<{darkMode: boolean}>`
    background-color: ${props => props.darkMode ? "#00c49a" : "#2f2f2f" };
    color: ${props => props.darkMode ? "#2f2f2f" : "#fff" };;
    font-family: "Work Sans Bold";
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    margin-left: 1.25rem;
    border-radius: 0.25rem;
    cursor: pointer;
`;

const One = styled.span<{darkMode: boolean}>`
    color: ${props => props.darkMode ? "#fff" : "#00c49a" };
`;

export const MagBox = styled.div<{darkMode: boolean}>`
    background-color: ${props => props.darkMode ? "#00c49a" : "#2f2f2f" };
    color: #FFFFFF;
    // border: 1px solid #FF8700;
    font-family: "Work Sans Bold";
    font-size: 1.5rem;
    padding: 0 1.5rem;
    margin: 0.5rem;
    margin-right: 1.25rem;
    border-radius: 2rem;
    cursor: pointer;
    @media (min-width: 768px) {
      &:hover {
          transform: scale(1.1);
        }
  }
`;
const Mag = styled.div`
  -webkit-transform: rotate(90deg); 
  -moz-transform: rotate(90deg); 
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const SettingsIcon = styled(Settings)<{ darkMode: boolean}>`
  color: ${props => props.darkMode ? "rgb(255,255,255,0.9)" : "#2f2f2f" };
  cursor: pointer;
  @media (min-width: 768px) {
      &:hover {
          transform: scale(1.1);
        }
  }
`;

const SearchIcon = styled(Search)`
      padding: 0;
      margin: 0.5rem 0 ;
`;


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const settings: SettingsState = useSelector((state: RootState) => state.settings);

  return (
      <React.Fragment>
        <HeaderStyled darkMode={settings.isDarkMode}> 
          <StyledLink to={"/"}>
            <LogoStyled darkMode={settings.isDarkMode}>
              REF<One darkMode={settings.isDarkMode}>1</One>
            </LogoStyled> 
          </StyledLink>

          <RightItems>
            <SettingsContainer>
              <SettingsIcon 
                darkMode={settings.isDarkMode}
                size={28} 
                onClick={ () => {
                  dispatch( toggleSettingsOpen() );
    
                }}
              />
            </SettingsContainer>
            <MagBox 
              darkMode={settings.isDarkMode}
              onClick={ () => {
                dispatch( toggleOpen() );
                eventGa("HeaderSearch", 'default', 'default');
            }} ><Mag><SearchIcon size={20} /></Mag></MagBox> 
          </RightItems>

        </HeaderStyled>
      </React.Fragment>
  );
};

export default Header;
