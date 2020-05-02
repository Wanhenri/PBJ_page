import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const logo = require("../../img/entrada.png");

const Container = styled.section`
  width: 100%;
  height: 30vw;
  background-size: cover;
  background-image: url(${logo});
`;

const Wrapper = styled.div`
  position: relative;
  top: 80%;
  text-align: center;
`;

const Button = styled.button`
  -webkit-appearance: none;
  background-color: white;
  color: black;
  border-radius: 25px;
  padding: 15px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: 'Titillium Web', sans-serif,
  cursor: pointer;
  transition: filter 0.2s;

  &:hover  {
    filter: brightness(90%);
    transform: translate(0%, -5%);
    transition: 0.1s ease-out;
  }
`;

export default () => (
  <Container>
    <Wrapper>
      <div style={{ margin: "auto" }}>
        <Link to={"/"}><Button>Ver acomodações</Button></Link>
      </div>
    </Wrapper>
  </Container>
);
