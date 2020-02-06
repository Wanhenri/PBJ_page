import React, { useState } from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { Button, Icon } from 'antd';

import turismo from "../../img/CarouselSlideItem/turismo.jpg";   
import serviços from "../../img/CarouselSlideItem/recepcao.jpg";
import restaurante from "../../img/CarouselSlideItem/restaurante.jpg";
import eventos from "../../img/CarouselSlideItem/eventos.jpg";

const Wrapper = styled.div`
  padding:0 20px;
  max-width: 1000px;
  margin:0 auto;
`;

//implementar
export default function imageCarousel(props) {
  return(
    <img
      height={props.height}
      alt= {props.title}
      src={props.}
    ></img>
  )
}

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
        leftChevron= {<Button><Icon type="left"></Icon></Button>}
        rightChevron={<Button><Icon type="right" ></Icon></Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 92.5, background: '#EEE', fontSize:24, display: 'flex', justifyContent: 'center', alignItems:'center' }}><img height="90" alt="teste" src={turismo}></img>TURISMO</div>
        <div style={{ height: 92.5, background: '#EEE', fontSize:24, display: 'flex', justifyContent: 'center', alignItems:'center' }}><img height="90" alt="teste" src={serviços}></img>SERVIÇOS</div>
        <div style={{ height: 92.5, background: '#EEE', fontSize:24, display: 'flex', justifyContent: 'center', alignItems:'center' }}><img height="90" alt="teste" src={restaurante}></img>RESTAURANTE</div>
        <div style={{ height: 92.5, background: '#EEE', fontSize:24, display: 'flex', justifyContent: 'center', alignItems:'center' }}><img height="90" alt="teste" src={eventos}></img>EVENTOS</div>
      </ItemsCarousel>
    </Wrapper>
  );
};

export default MenuCarousel;