import React from "react";
import styled from "styled-components";

import avatar from "../../img/topo-azul.png";

const LogoAvatar = styled.img.attrs({
    src: avatar
})`
    float: left;
    position: absolute;
    margin: 15px 20px;
    width:auto;
    height: 90px;
    padding-left:15px;
`;

export const Header = styled.header`
    
    background-color: #F25A70; /*var(--color-gradient-medium);*/
    box-sizing: border-box;
    max-width:100vw;
    width:100%;
    height:120px;

    position:sticky;
    z-index:1;
    top:0;
    
    display: flex;
    text-align: center;
`;


const HeaderPousada = () => (
    <Header>
        <LogoAvatar />
    </Header>
);

export default HeaderPousada;