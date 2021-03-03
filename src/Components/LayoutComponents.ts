import styled, { createGlobalStyle } from "styled-components";
import workSansBold from '../Assets/WorkSans/static/WorkSans-Bold.ttf';
import workSansSemiBold from '../Assets/WorkSans/static/WorkSans-SemiBold.ttf';
import workSansExtraBold from '../Assets/WorkSans/static/WorkSans-ExtraBold.ttf';
import workSansReg from '../Assets/WorkSans/static/WorkSans-Regular.ttf';
import { Link } from "react-router-dom";

// #24282E Raisin Black
// #D1DADC Light Gray
// #FFFFFF White 
// #388659 Sea Green
// #EF233C Imperial Red
// #6279B8 Glaucous

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: "Work Sans Extra Bold";
        src: url(${workSansExtraBold}) format('truetype');
    }
    @font-face {
        font-family: "Work Sans Bold";
        src: url(${workSansBold}) format('truetype');
    }
    @font-face {
        font-family: "Work Sans Semi Bold";
        src: url(${workSansSemiBold}) format('truetype');
    }
    @font-face {
        font-family: "Work Sans Reg";
        src: url(${workSansReg}) format('truetype');
    }
`;


export const Spacer = styled.div`
    min-height: 3rem;
`;

export const Spinner = styled.div`
    font-family: "Work Sans Bold";
    min-height: 6rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    height: auto;
    width: 100%;
    // background-color: turquoise;
`;


export const Title = styled.div`
    // background-color: #EF435C;
    text-align: left;
    color: #000000;
    font-family: "Work Sans Bold";
    font-size: 1rem;
    padding: 1rem;
    padding-bottom: 0;
`;

export const Scroll = styled.div`
    // background-color: tomato;
    display: flex;
    flex-flow: row nowrap;
    font-size: 1rem;
    padding: 0 0 0.25rem 0.5rem;
    overflow: auto;
    scroll-snap-type: x mandatory;
`;

export const Cards = styled.div<{ bg: string}>`
    
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledButton = styled.button`
    outline: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        outline: none;
    }
`;


export const BackHome = styled.div`
    font-family: "Work Sans Semi Bold";
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: #2E2E2E;
    background-color: #FFFFFF;
    font-size: 1rem;
    padding: 1rem 1rem;
    box-shadow: 0px 1px 1px #DDDDDD;
    position: fixed;
`;

export const Period = styled.div`
    color: #888888;
`;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 1rem;
`;

export const Label = styled.div`
    font-family: "Work Sans Semi Bold";
    color: rgb(255,255,255,0.75);
    font-size: 0.75rem;
`;

export const Value = styled.div`
    font-family: "Work Sans Bold";
    color: #FFFFFF;
    font-size: 1rem;
`;

export const AchIcon = styled.span`
    font-size: 1.5rem;
    padding: 0.5rem;
`;

// #24282E Raisin Black
// #D1DADC Light Gray
// #FFFFFF White 
// #388659 Sea Green
// #EF233C Imperial Red
// #6279B8 Glaucous
