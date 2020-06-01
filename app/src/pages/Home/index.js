import React from "react";

import { ColoredLine } from '../../objects/ColoredLine'

import { Wrapper, Section } from "./styles";

import AcomodacaoPousada from "../../components/acomodacao";


import Title from "../../components/Title";

import Subtitle from "../../components/Subtitle";


import ListaRecomendacoes from "../../components/ListaRecomendacoes";

const Home = () => (
  <Wrapper>
    <Section>
      <ColoredLine />

      <Title content={"ACOMODAÇÕES COM QUALIDADE E CONFORTO"} />
      <Subtitle
        content={
          <span>
          Acomodações com todos os confortos de sua casa e muito mais.
          < br/> Venha conferir
          </span>
        }
      />
      <AcomodacaoPousada />
      <ColoredLine />

      <Title content={"RECOMENDAÇÕES"} />
      <ListaRecomendacoes />

    </Section>
  </Wrapper>
);

export default Home;
