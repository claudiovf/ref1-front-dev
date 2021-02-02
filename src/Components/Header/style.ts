import styled from "styled-components";
import workSansBold from '../../Assets/WorkSans/static/WorkSans-Bold.ttf';
import workSansReg from '../../Assets/WorkSans/static/WorkSans-Regular.ttf';

export const HeaderStyled = styled.div`

    @font-face {
        font-family: "Work Sans Bold";
        src: url(${workSansBold}) format('truetype');
    }
    @font-face {
        font-family: "Work Sans Reg";
        src: url(${workSansReg}) format('truetype');
    }

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: auto;
    width: 100%;
    position: fixed;
    box-shadow: 0px 0.5px 2px #D1DADC;
    backdrop-filter: blur(3px);
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



// #24282E Raisin Black
// #D1DADC Light Gray
// #FFFFFF White 
// #388659 Sea Green
// #EF233C Imperial Red
// #6279B8 Glaucous
