import React from "react";

import FormLead from "../../components/FormLead";

import { Wrapper, Section, ColoredLine } from './styles';

import AcomodacaoPousada from "../../components/acomodacao";

import HeaderPousada from "../../components/HeaderPousada";

import TitleAcomodacao from "../../components/TitleAcomodacao";
import TitleAjuda from "../../components/TitleAjuda"

import SubtitlePousada from "../../components/SubtitlePousada";

import MenuCarousel from "../../components/menuCarousel"

import Recomendacoes from "../../components/recomendacoes"

//import ListaRecomendacoes from "../../components/ListaRecomendacoes"




const Home = () => (  

    <Wrapper>
        <Section>
            <HeaderPousada />
            <ColoredLine />
            <TitleAcomodacao />
            <SubtitlePousada />
            <AcomodacaoPousada /> 
            <Recomendacoes />
            <ColoredLine />
            <TitleAjuda/>
            <MenuCarousel />
            <ColoredLine />
            <TitleAcomodacao />
            <SubtitlePousada />
            <AcomodacaoPousada />  
            <FormLead />         
        </Section>  
    </Wrapper>
);

export default Home;