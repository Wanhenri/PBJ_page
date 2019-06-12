import styled, { css } from "styled-components";

const BtnPousada = styled.button.attrs({
    type: "submit"

})`
    position: absolute;
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

export default BtnPousada;