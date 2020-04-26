import styled from "styled-components";

const logoEntrada = require("../../img/entrada.png");

export const AcomodacaoPousada = styled.img.attrs({
    src: logoEntrada
}) `
    
    width: 65%;
    height: 50%;
    margin: 10px auto 20px;
    display:block;
    border: 1px solid #FFF transparent;
    border-radius: 42px; /*var(--radius-medium); */
  
`;

export default AcomodacaoPousada;

