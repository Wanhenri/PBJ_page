import styled from "styled-components";
import { NavLink } from "react-router-dom";

import avatar from "../../img/topo-azul.png";

export const LogoAvatar = styled.img.attrs({
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
  width: 100%;
  height: 60px;
  position: sticky;
  z-index: 1;
  top: 0;

  img {
    margin: auto auto;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 1.9em;
  color: var(--color-second);
  margin: auto 5px;
  padding: 5px;
  text-decoration: none;

  :hover {
    border-bottom: 1px grey solid;
  }
`;
