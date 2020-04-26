import React from 'react';
//import styled from 'styled-components';
// import ItemsCarousel from 'react-items-carousel';
// import { Button, Icon } from 'antd';
//import turismo from "../../img/CarouselSlideItem/turismo.jpg";   
//import serviços from "../../img/CarouselSlideItem/recepcao.jpg";
//import restaurante from "../../img/CarouselSlideItem/restaurante.jpg";
//import eventos from "../../img/CarouselSlideItem/eventos.jpg";
import { ColoredLine } from '../../pages/Home/styles';

//const Wrapper = styled.div`
//  
//  max-width: 1000px;
//  max-height: auto;
//  margin: auto;
//`;

//https://stackoverflow.com/questions/45120118/react-image-from-array-not-showing-up-in-img-src

export default function ListaRecomendacoes(){
    const recomenda = [
        {
            name: "turismo",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/laspezia.png")
        },
        {
            name: "serviços",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/pepizza.jpg")
        },
        {
            name: "restaurante",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/supernovataxi.png")
        },
        {
            name: "eventos",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/vignettos.jpg")
        },
        {
            name: "eventos",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/pizzapuccini.jpg")
        },
        {
            name: "eventos",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/esfirraria.png")
        },
        {
            name: "eventos",
            height: "130", 
            width: "200",
            alt: "",
            image: require("../../img/recomendacoes/comidajaponesa.jpg")
        },
    ];
    return (
    <div>
      <ColoredLine />
      <div>
          {recomenda.map(recomendas => (
              <img key={recomendas.name} src={recomendas.image}{...recomendas} />
          ))}
      </div>      
    </div>
  );
}
