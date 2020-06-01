import React from "react";
import { Wrapper, Section, Icon, DateBlog, InfoBlogWrapper,ReactionBlogWrapper,BlogContainer } from "./styles";
import { ColoredLine } from '../../objects/ColoredLine';
import Title from "../../components/Title";
import CarouselComponent from "../../components/InfiniteCarousel";

import { FaCalendarAlt, FaHeart, FaComments, FaShareAlt } from "react-icons/fa";


import Subtitle from "../../objects/Subtitle";
import { Text } from "../../objects/Text";
import { Strong } from "../../objects/Strong";

// Used within styled.js
import { Card } from "../../objects/Card";


const Agenda = () => (
  <div>
    <Wrapper>
      <Section>
        <ColoredLine />
        <Title content={"AGENDA"} />
        <CarouselComponent />
        <ColoredLine />
      </Section>    
    </Wrapper>
    <BlogContainer>
      <Card style={{ maxWidth: 470 }}>
        <Strong>Aplicação da ferramenta Wgrib2 na manipulação de dados</Strong>
        <InfoBlogWrapper>
          <DateBlog>
            <FaCalendarAlt size={26} style={{ paddingRight: "10px" }} />
            Julho 21, 2020
          </DateBlog>
          <DateBlog>
            <FaComments size={26} style={{ paddingRight: "10px" }} />
            Comentários
          </DateBlog>
        </InfoBlogWrapper>
        <Title content={"Wanderson Henrique dos Santos"} />
        <Subtitle content={"teste"} />
        <Text>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        </Text>
        <ReactionBlogWrapper>
          <Icon>
            <FaHeart size={26} color="red" />
          </Icon>
          <Icon>
            <FaShareAlt size={26} color="blue" />
          </Icon>
        </ReactionBlogWrapper>
      </Card>
    </BlogContainer>
  </div>

);

export default Agenda;
