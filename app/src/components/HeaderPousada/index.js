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
    
    
    width:100vw;
    height:120px;

    position:absolute;
    z-index:1;
    top:0;
    left:0;
`;

const ColoredLine = ({ color }) => (
    <hr 
        style={{
            color: color,
            backgroundColor: color,
            heigth: 2,
            width: 100
        }}
    />
)

const HeaderPousada = () => (
    <Header>
        <LogoAvatar />
        <ColoredLine color="#00033" />
    </Header>
);

export default HeaderPousada;