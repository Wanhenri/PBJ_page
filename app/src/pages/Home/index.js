import React, { Fragment } from "react";

import AcomodacaoPousada from "../../components/acomodacao";

import TitleAcomodacao from "../../components/TitleAcomodacao"
import TitleAjuda from "../../components/TitleAjuda"
import TitleNovidade from "../../components/TitleNovidade"
import SubtitlePousada from "../../components/SubtitlePousada";

const Home = () => (
    <Fragment>
        <TitleAjuda>COMO PODEMOS TE AJUDAR?</TitleAjuda>
        
        <TitleAcomodacao>ACOMODAÇÕES COM QUALIDADE E CONFORTO</TitleAcomodacao>
        
        <SubtitlePousada>
            Acomodações com todos os confortos de sua casa e muito mais. 
            Venha conferir       
        </SubtitlePousada>

        <AcomodacaoPousada />

        <TitleNovidade>QUER RECEBER NOVIDADES DOS EVENTOS E DISPONIBILIDADES DE VAGA?</TitleNovidade>

        <SubtitlePousada>Coloque seu nome e-mail abaixo</SubtitlePousada>

    
    </Fragment>
);

export default Home;