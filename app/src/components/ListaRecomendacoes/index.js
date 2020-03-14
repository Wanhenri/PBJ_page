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

const ListaRecomendacoes = () => {
    <Wrapper>
        <img 
            height="230" 
            width="330"
            alt="teste" 
            src={turismo}>
        </img>
    </Wrapper>
};

export default ListaRecomendacoes;