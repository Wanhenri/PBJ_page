import React from "react";

import FormLead from "../../components/FormLead";

import { Wrapper, Section, ColoredLine } from "./styles";

import AcomodacaoPousada from "../../components/acomodacao";

import HeaderPousada from "../../components/Header";

import Title from "../../components/Title";

import Subtitle from "../../components/Subtitle";

import MenuCarousel from "../../components/menuCarousel";

import ListaRecomendacoes from "../../components/ListaRecomendacoes";

const Home = () => (
  <Wrapper>
    <Section>
      <ColoredLine />

      <Title content={"ACOMODAÇÕES COM QUALIDADE E CONFORTO"} />
      <Subtitle
        content={
          "Acomodações com todos os confortos de sua casa e muito mais.< br/> Venha conferir"
        }
      />
      <AcomodacaoPousada />
      <ColoredLine />

      <Title content={"RECOMENDAÇÕES"} />
      <ListaRecomendacoes />
      <ColoredLine />

      <Title content={"COMO PODEMOS TE AJUDAR?"} />
      <MenuCarousel />
      <ColoredLine />

      <Title content={"ACOMODAÇÕES COM QUALIDADE E CONFORTO"} />
      <Subtitle
        content={
          <span>
            Acomodações com todos os confortos de sua casa e muito mais.
            <br /> Venha conferir
          </span>
        }
      />
      <AcomodacaoPousada />
      <FormLead />
    </Section>
  </Wrapper>
);

export default Home;
