import React from "react";
import { Wrapper, Section, ColoredLine } from "./styles";
import Title from "../../components/Title";
import CarouselComponent from "../../components/InfiniteCarousel";

const Agenda = () => (
  <Wrapper>
    <Section>
      <ColoredLine />
      <Title content={"AGENDA"} />
      <CarouselComponent />
      <ColoredLine />
    </Section>
  </Wrapper>
);

export default Agenda;
