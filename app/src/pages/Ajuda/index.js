import React from "react";
import { Wrapper, Section} from "./styles";
import Title from "../../components/Title";
import MenuCarousel from "../../components/menuCarousel";

import { ColoredLine } from '../../objects/ColoredLine';

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