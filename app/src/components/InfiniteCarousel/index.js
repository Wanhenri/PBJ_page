import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Image = styled.img`
  flex: 1 0 auto;
  height: 100%;
  width: auto !important;
  object-fit: cover;
  margin: 10px;
`;

export const Wrapper = styled.div`
  width: 40vw;
  margin: auto auto;

  .slider-wrapper {
    position: relative;
  }
`;

export default function CarouselComponent() {
  const recomenda = [
    {
      name: "Auditório São Paulo",
      image: require("../../img/agenda/evento1.png"),
      link:
        "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d5329084-Reviews-La_Spezia-Cachoeira_Paulista_State_of_Sao_Paulo.html",
    },
    {
      name: "Basilica Velha",
      image: require("../../img/agenda/evento2.png"),
      link: "https://www.facebook.com/pages/Pepizza/641020522619053",
    },
    {
      name: "Caminho do Rosario",
      image: require("../../img/agenda/evento3.png"),
      link: "https://supernovataxi.com/",
    },
    {
      name: "Casa de Betania",
      image: require("../../img/agenda/evento4.png"),
      link:
        "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d7125763-Reviews-Restaurante_Vignettos-Cachoeira_Paulista_State_of_Sao_Paulo.html",
    },
    {
      name: "Mirante da Santa",
      image: require("../../img/agenda/evento5.png"),
      link:
        "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d12323027-Reviews-Pizza_Puccini-Cachoeira_Paulista_State_of_Sao_Paulo.html",
    },
  ];
  return (
    <Wrapper className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows>
        {recomenda.map((recomendas) => (
          <div>
            <a>
              <Image key={recomendas.name} src={recomendas.image} />
              <button>
                <p className="legend">{recomendas.name}</p>
              </button>
            </a>
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
}

// <Carousel infiniteLoop useKeyboardArrows autoPlay>
