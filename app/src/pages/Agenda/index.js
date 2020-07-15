import React from "react";
import styled from "styled-components";
import { Wrapper, Section, Icon, DateBlog, InfoBlogWrapper,ReactionBlogWrapper,BlogContainer } from "./styles";
import { ColoredLine } from '../../objects/ColoredLine';
import Title from "../../components/Title";
import CarouselComponent from "../../components/InfiniteCarousel";

import { FaCalendarAlt, FaHeart, FaComments, FaShareAlt } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";


import Subtitle from "../../objects/Subtitle";
import { Text } from "../../objects/Text";
import { Strong } from "../../objects/Strong";

// Used within styled.js
import { Card } from "../../objects/Card";

const logo = require("../../img/agenda/teste.png");

const Container = styled.section`
  width: 100%;
  height: 10vw;
  background-size: cover;
  background-image: url(${logo});
`;


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
        <Container />
        
        <InfoBlogWrapper>
          <DateBlog>
            <FaCalendarAlt size={22} style={{ paddingRight: "10px" }} />
            Jul 21, 2020
          </DateBlog>
          <DateBlog>
            <TiStopwatch size={22} style={{ paddingRight: "10px" }} />
            countdown
          </DateBlog>
          <DateBlog>
            <MdLocationOn size={22} style={{ paddingRight: "10px" }}/> 
            Cachoeira Paulista - SP
          </DateBlog>
        </InfoBlogWrapper>
        <Title content={"Quinta-feira de Adoração"} />
        <Text>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type" 
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
