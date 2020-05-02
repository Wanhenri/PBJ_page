import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import avatar from "../../img/topo-azul.png";
import postal from "../../img/postal.png";

const LogoAvatar = styled.img.attrs({
  src: avatar,
})`
  float: left;
  width: auto;
  height: -webkit-fill-available;
  padding-left: 15px;
`;

export const Header = styled.header`
  background-color: var(--color-gradient-medium);
  box-sizing: border-box;
  max-width: 100vw;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;

  position: sticky;
  z-index: 1;
  top: 0;

  text-align: center;
  img {
    margin: auto auto;
  }
`;

export default () => {
  const activeStyle = { backgroundColor: "#F15B2A" };



  return (
    <Header >
      <Link
        to={"/"}       
      >
        <LogoAvatar
          style={{
          height: "100%",
        }} />
      </Link>
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          fontSize:" 1.9em",
          color: "var(--color-second)",
          height: "20px",
          marginLeft: "1000px", 
          marginRight: "20px",
          paddingTop:"20px",
          textDecoration: "none"
        }}>
          Acomodações
      </Link>
      <Link 
        to="/agenda" 
        style={{
          display: "inline-block",
          fontSize:" 1.9em",
          color: "var(--color-second)",
          height: "20px",
          
          marginRight: "20px",
          paddingTop:"20px",
          textDecoration: "none"
        }}>
          Agenda
      </Link>
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          fontSize: "1.9em",
          color: "var(--color-second)",
          height: "20px",
          marginRight: "20px",
          marginTop: "20px",
          textDecoration: "none" 
          }} 
        >Experiencias
      </Link>
      <Link 
        to="/ajuda" 
        style={{
          display: "inline-block",
          fontSize: "1.9em",
          color: "var(--color-second)",
          height: "20px",
          marginRight: "20px",
          marginTop: "20px",
          textDecoration: "none"
        }} 
        >Ajuda
      </Link>
      <Link 
        to={"/fale-conosco"}        
        style={{
          display: "inline-block",
          fontSize: "1.9em",
          color: "var(--color-second)",
          height: "20px", 
          marginRight: "20px",
          marginTop: "20px",
          textDecoration: "none"
        }}> 
        Contato        
      </Link>
    </Header>
  );
};
