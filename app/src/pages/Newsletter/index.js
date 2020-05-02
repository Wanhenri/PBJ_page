import React from "react";
import { Wrapper, Section, ColoredLine } from "./styles";

import FormLead from "../../components/FormLead";
import AcomodacaoPousada from "../../components/acomodacao";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

const Newsletter = () => (
    <Wrapper>
      <Section>  
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
  
  export default Newsletter;