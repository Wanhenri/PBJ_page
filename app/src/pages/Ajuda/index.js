import React from "react";
import { Wrapper, Section, ColoredLine } from "./styles";
import Title from "../../components/Title";
import MenuCarousel from "../../components/menuCarousel";

const Ajuda = () => (
   <Wrapper>
     <Section>

       <ColoredLine />
       <Title content={"COMO PODEMOS TE AJUDAR?"} />
       <MenuCarousel />
       <ColoredLine />

     </Section>
   </Wrapper>
);

export default Ajuda;