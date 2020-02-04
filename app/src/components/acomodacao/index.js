import styled from "styled-components";
import Inicio from "../../img/entrada.png";;

export const Wrapper = styled.div`
    transform: scale(1);
`; 

const AcomodacaoPousada = styled.div `
    display:inline-block;
    background-image: url(${Inicio});
    max-width:200px;
    max-height:150px;
    width: auto;
    height: auto
    /*display:inline-block;
    border:1px solid #FFFF transparent;
    border-radius: var(--radius-medium);
    background-image: url(${Inicio});
    width:100%;
    height:100%; */
`;


export default AcomodacaoPousada;

