import React, { useState } from 'react';

import styled, {css} from "styled-components";

export const TextPousada = styled.p `
    color:var(--color-text);
    font-size: var(--size-small);
    
`;

export const InputPousada = styled.input`
    background-color: var(--color-negative-light);
    box-sizing:border-box;
    width:350px;
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

export const Wrapper = styled.div`
    transform: scale(1);
`; 

export const BtnPousada = styled.button.attrs({
    type: "submit"

})`
    
    right: 0;
    bottom:0;
    box-sizing:border-box;
    background-color:var(--color-zero);
    width:${({loading}) => loading ? "100%" : "140px"};
    height:40px;    
    border-radius: var(--radius-small);
    color:var(--color-base);
    /* Criado de acordo com o especificado no figma*/
    font-weight:bold;
    font-size:var(--size-small);
    cursor: pointer;
    will-change:transform, width;
    transition: transform 100ms linear,
                box-shadow 100ms linear, 
                width 600ms cubic-bezier(.94, -0.64,0,1);
    box-shadow: 0px 0px 0px var(--color-base);
    ${({loading}) => !loading && css ` 
            &focus,
            &:hover {
                transform:translateY(-3px);
                box-shadow: 0px 2px 4px var(--color-base);
            }
            &:active {
                transform: translateY(-1px);
            }
        `
    }
`;




export const Form = styled.form`

    position:relative;
    
    &> ${TextPousada}{
        margin-bottom: var(--spacing-small);
    }
    &> ${InputPousada}{
        margin-right: 20px;
        margin-top:30px
        margin-botton:30px
    }
`;



const FormLead = () => {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState("Receber")

    return(
        <Form>
            <TextPousada 
                style={{ 
                    paddingTop:70, 
                    fontWeight:'bold' }}
                >
                QUER RECEBER NOVIDADES DOS EVENTOS E DISPONIBILIDADES DE VAGA?
            </TextPousada >
            <TextPousada 
                style={{ paddingTop:30,  }}>
                     Coloque seu nome e e-mail abaixo
            </TextPousada>
            <InputPousada placeholder="Nome"/>
            <InputPousada placeholder="Email"/>

            <BtnPousada 
                onClick={event => {
                        event.preventDefault();
                        setLoading(true);
                        setContent("Enviando..");
                    }
                } 
                loading={loading} 
            >
                {content}
            </BtnPousada>

        </Form>
    );
};

export default FormLead;