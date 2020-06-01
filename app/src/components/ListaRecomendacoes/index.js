import React from "react";
import { Image, Recomendacoes } from "./style";

export default function ListaRecomendacoes() {
  const recomenda = [
    {
      name: "laspezia",
      image: require("../../img/recomendacoes/laspezia.png"),
      link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d5329084-Reviews-La_Spezia-Cachoeira_Paulista_State_of_Sao_Paulo.html"
    },
    {
      name: "pepizza",
      image: require("../../img/recomendacoes/pepizza.jpg"),
      link: "https://www.facebook.com/pages/Pepizza/641020522619053"
    },
    {
      name: "supernovataxi",
      image: require("../../img/recomendacoes/supernovataxi.png"),
      link: "https://supernovataxi.com/"
    },
    {
      name: "vignettos",
      image: require("../../img/recomendacoes/vignettos.jpg"),
      link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d7125763-Reviews-Restaurante_Vignettos-Cachoeira_Paulista_State_of_Sao_Paulo.html"
    },
    {
      name: "pizzapuccini",
      image: require("../../img/recomendacoes/pizzapuccini.jpg"),
      link: "https://www.tripadvisor.com.br/Restaurant_Review-g2348787-d12323027-Reviews-Pizza_Puccini-Cachoeira_Paulista_State_of_Sao_Paulo.html"
    },
    {
      name: "esfirraria",
      image: require("../../img/recomendacoes/esfirraria.png"),
      link: "https://www.facebook.com/Esfihariaboulevard"
    },
    {
      name: "comidajaponesa",
      image: require("../../img/recomendacoes/comidajaponesa.jpg"),
      link: "https://www.facebook.com/sushienkasa/"
    },
  ];
  return (
    <div>
      <Recomendacoes>
        {recomenda.map((recomendas) => (
          <a href={recomendas.link} target="_blank">
            <Image key={recomendas.name} src={recomendas.image} />
          </a>
        ))}
      </Recomendacoes>
    </div>
  );
}




//https://stackoverflow.com/questions/45120118/react-image-from-array-not-showing-up-in-img-src