import styled from "styled-components";

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

export const ColoredLine = styled.hr`
    display: block;
    border: none;
    border-top: 1px solid lightgrey;
    color: rgba(0,0,0,0.65);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem; 
    line-height: 10px;
    
`;
