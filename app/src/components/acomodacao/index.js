import React from "react";
import styled from "styled-components";

const logo = require("../../img/entrada.png");

const Container = styled.section`
  width: 100%;
  height: 30vw;
  background-size: cover;
  background-image: url(${logo});
`;

const Wrapper = styled.div`
  position: relative;
  top: 70%;
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
`;

export default () => (
  <Container>
    <Wrapper>
      <div style={{ margin: "auto" }}>
        <Button>Ver acomodações</Button>
      </div>
    </Wrapper>
  </Container>
);
