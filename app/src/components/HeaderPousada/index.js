import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

import avatar from "../../img/topo-azul.png";
import postal from "../../img/postal.png";

const LogoAvatar = styled.img.attrs({
    src: avatar
})`
    float: left;
    position: absolute;
    margin: 12px 20px;
    width:auto;
    height: 55px;
    padding-left:15px;
`;

const LogoPostal = styled.img.attrs({
    src: postal
})`
    float: right;
    position: absolute;
    margin: 15px 1200px;
    width:auto;
    height: 20px;
    padding-left:15px;
    
`;

export const Header = styled.header`
    
    background-color: var(--color-gradient-medium);
    box-sizing: border-box;
    max-width:100vw;
    width:100%;
    height:55px;

    position:sticky;
    z-index:1;
    top:0;
    
    display: flex;
    text-align: center;
`;


const HeaderPousada = () => {
  const activeStyle = { color: "#F15B2A" }

  return(
  <Header>
      <LogoAvatar />
      
      <LogoPostal />
  </Header>
)};

export default HeaderPousada;