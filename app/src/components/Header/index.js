import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const LogoPostal = styled.img.attrs({
  src: postal,
})`
  float: right;
  width: auto;
  height: 20px;
  padding-left: 15px;
`;

export const Header = styled.header`
  background-color: var(--color-gradient-medium);
  box-sizing: border-box;
  max-width: 100vw;
  width: 100%;
  height: 60px;

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
    <Header>
      <NavLink
        to={"/"}
        activeStyle={activeStyle}
        style={{
          height: "100%",
        }}
      >
        <LogoAvatar />
      </NavLink>
      <NavLink to={"/fale-conosco"} activeStyle={activeStyle}>
        <LogoPostal />
      </NavLink>
    </Header>
  );
};
