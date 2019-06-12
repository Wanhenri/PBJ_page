import React from "react";

import FormLead from "../../components/FormLead";

import { Wrapper, Section } from './styles';

import AcomodacaoPousada from "../../components/acomodacao";

import TitleAcomodacao from "../../components/TitleAcomodacao"
import TitleAjuda from "../../components/TitleAjuda"

import SubtitlePousada from "../../components/SubtitlePousada";

const Home = () => (
    
    <Wrapper>
        <Section>
            <TitleAjuda>COMO PODEMOS TE AJUDAR?</TitleAjuda>
            <TitleAcomodacao>ACOMODAÇÕES COM QUALIDADE E CONFORTO</TitleAcomodacao>
            <SubtitlePousada>
                Acomodações com todos os confortos de sua casa e muito mais. 
                Venha conferir       
            </SubtitlePousada>

            <AcomodacaoPousada />
        
            <FormLead />                  

        </Section>  
    </Wrapper>
);

export default Home;