import React from "react";
import styled from "styled-components";

import avatar from "../../img/topo-azul.png";

const LogoAvatar = styled.img.attrs({
    src: avatar
})`
    width:10%;
    padding-left:15px;
`;

export const Header = styled.header`
    
    padding-top:10px;
    width:100vw;
    height:120px;

    position:absolute;
    z-index:1;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;

    &> ${LogoAvatar}{
        
    }

`;

const HeaderPousada = () => (
    <Header>
        <LogoAvatar />
    </Header>
);

export default HeaderPousada;