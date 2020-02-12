import React, { useState } from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { Button, Icon } from 'antd';

import turismo from "../../img/CarouselSlideItem/turismo.jpg";   
import serviços from "../../img/CarouselSlideItem/recepcao.jpg";
import restaurante from "../../img/CarouselSlideItem/restaurante.jpg";
import eventos from "../../img/CarouselSlideItem/eventos.jpg";

const Wrapper = styled.div`
  
  max-width: 1000px;
  max-height: auto;
  margin: auto;
`;

//implementar
//export default function imageCarousel(props) {
//  return(
//    <img
//      height={props.height}
//      alt= {props.title}
//      src={props.}
//    ></img>
//  )
//}

const MenuCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <Wrapper>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <Button>
            <Icon 
              type="left"
              style={{fontSize:'35px', "backgroundColor": "#FFF6F6"}}>
            </Icon>
          </Button>}
        rightChevron={
          <Button>
            <Icon 
              type="right"
              style={{fontSize:'35px', "backgroundColor":"#FFF6F6"}}>
            </Icon>
          </Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <img 
            height="230" 
            width="330"
            alt="teste" 
            src={turismo}>
          </img></div>
        <div>
          <img 
            height="230" 
            width="330"
            alt="teste" 
            src={serviços}>
          </img></div>
        <div>
          <img 
            height="230" 
            width="330"
            alt="teste" 
            src={restaurante}>
          </img></div>
        <div>
          <img 
            height="230" 
            width="330"
            alt="teste" 
            src={eventos}>
          </img></div>
      </ItemsCarousel>
    </Wrapper>
  );
};

export default MenuCarousel;