import React from "react";

import { Link, Header, LogoAvatar } from "./style";

export default () => {
  const activeStyle = {
    borderBottom: "1px grey solid",
  };

  return (
    <Header>     
        <LogoAvatar />    
      <div style={{ float: "right", padding: "10px 0", marginRight: 20 }}>
        <Link to="/" exact activeStyle={activeStyle}>
          Acomodações
        </Link>
        <Link to="/agenda" exact activeStyle={activeStyle}>
          Agenda
        </Link>
        <Link to="/experiencias" exact activeStyle={activeStyle}>
          Experiencias
        </Link>
        <Link to="/ajuda" exact activeStyle={activeStyle}>
          Ajuda
        </Link>
        <Link to="/fale-conosco" exact activeStyle={activeStyle}>
          Contato
        </Link>
      </div>
    </Header>
  );
};
