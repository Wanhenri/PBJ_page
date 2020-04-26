import React from "react";
//import styled from 'styled-components';
// import ItemsCarousel from 'react-items-carousel';
// import { Button, Icon } from 'antd';
//import turismo from "../../img/CarouselSlideItem/turismo.jpg";
//import serviços from "../../img/CarouselSlideItem/recepcao.jpg";
//import restaurante from "../../img/CarouselSlideItem/restaurante.jpg";
//import eventos from "../../img/CarouselSlideItem/eventos.jpg";
import { ColoredLine } from "../../pages/Home/styles";
import { Image, Recomendacoes } from "./style";

//const Wrapper = styled.div`
//
//  max-width: 1000px;
//  max-height: auto;
//  margin: auto;
//`;

//https://stackoverflow.com/questions/45120118/react-image-from-array-not-showing-up-in-img-src

export default function ListaRecomendacoes() {
  const recomenda = [
    {
      name: "laspezia",
      image: require("../../img/recomendacoes/laspezia.png"),
    },
    {
      name: "pepizza",
      image: require("../../img/recomendacoes/pepizza.jpg"),
    },
    {
      name: "supernovataxi",
      image: require("../../img/recomendacoes/supernovataxi.png"),
    },
    {
      name: "vignettos",
      image: require("../../img/recomendacoes/vignettos.jpg"),
    },
    {
      name: "pizzapuccini",
      image: require("../../img/recomendacoes/pizzapuccini.jpg"),
    },
    {
      name: "esfirraria",
      image: require("../../img/recomendacoes/esfirraria.png"),
    },
    {
      name: "comidajaponesa",
      image: require("../../img/recomendacoes/comidajaponesa.jpg"),
    },
  ];
  return (
    <div>
      <Recomendacoes>
        {recomenda.map((recomendas) => (
          <Image key={recomendas.name} src={recomendas.image} />
        ))}
      </Recomendacoes>
    </div>
  );
}
