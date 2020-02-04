import React from "react";

import styled from "styled-components";

export const Title = styled.h1`
    
    color: var(--color-second);
    font-size: var(--size-very-big);
    line-height:1.1em;
    padding-top:80px;
`;
export const Strong = styled.strong`
    color: var(--color-zero);
    font-size: 1.5em;
    
`;

const TitleAjuda = () => (
    <Title>COMO PODEMOS TE AJUDAR?</Title>
);

export default TitleAjuda;


