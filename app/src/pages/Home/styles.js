import styled from "styled-components";

import SubtitlePousada from "../../components/SubtitlePousada";

import AcomodacaoPousada from "../../components/acomodacao";

export const TextPousada = styled.p `
    color:var(--color-text);
    font-size: var(--size-small);
    font-weight:bold;
`;


export const InputPousada = styled.input`
    background-color: var(--color-negative-light);
    box-sizing:border-box;
    width:190px;
    height:38px;
    border-radius: var(--radius-small);
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
    color:var(--color-zero);
    font-size:var(--size-small);
    border:1px solid transparent;
    transition: border-color 200ms linear;
    &::placeholder {
        color: var(--color-zero);
        font-weight:bold;
    }
    &:focus,
    &:hover {
        border:1px solid var(--color-third);
    }
`;


export const Form = styled.form`

    position:relative;
    
    &> ${TextPousada}{
        margin-bottom: var(--spacing-small);
    }
    &> ${InputPousada}{
        margin-right: var(--spacing-small);
    }
`;

export const Section = styled.section`
    display:flex;
    flex-direction: column;
    padding-top:70px
    
    width:60%;
    min-width: 545px; 
    
    &> ${SubtitlePousada},
    &> ${AcomodacaoPousada} {
        margin-bottom: var(--spacing-big);
        
    }  
    &> ${SubtitlePousada} {
        
        width: 500px;
    }
    &> ${TextPousada}{
        margin-bottom: var(--spacing-small);
    }
    &> ${Form}{
        min-width: 545px;
    }
`;

export const Wrapper = styled.main `
    background-color: var(--color-fundo);
    /*background:linear-gradient(to bottom, black,var(--color-gradient-medium),var(--color-gardient-bottom)); */
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:left;
`;