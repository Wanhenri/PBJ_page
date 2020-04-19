import React from "react";

import styled from "styled-components";

import ListaRecomendacoes from '../ListaRecomendacoes'

export const Title = styled.h1`
    
    color: var(--color-second);
    font-size: var(--size-very-big);
    line-height:1.1em;
    padding-bottom:20px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const TitleAjuda = () => (
    <div>
        <Title>RECOMENDAÇÕES</Title>
        <ListaRecomendacoes />
    </div>
);

export default TitleAjuda;


