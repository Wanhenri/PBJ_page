import styled from "styled-components";


export const Section = styled.section`
    display:flex;
    flex-direction: column;
    padding-top:0;
    
    height:70%;
    width:75%;
    min-width: 545px; 
`;

export const Wrapper = styled.main `
    background-color: var(--color-fundo);
    /*background:linear-gradient(to bottom, black,var(--color-gradient-medium),var(--color-gardient-bottom)); */
    min-height:100vh;
    min-width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
`;

