import React from "react";

import FormLead from "../../components/FormLead";

import { Wrapper, Section } from './styles';

import AcomodacaoPousada from "../../components/acomodacao";

import HeaderPousada from "../../components/HeaderPousada";

import TitleAcomodacao from "../../components/TitleAcomodacao";
import TitleAjuda from "../../components/TitleAjuda"

import SubtitlePousada from "../../components/SubtitlePousada";

const Home = () => (
    
    <Wrapper>

        <HeaderPousada />

        <Section>
            <TitleAjuda/>
            <TitleAcomodacao />
            <SubtitlePousada />
            <AcomodacaoPousada />        
            <FormLead />         
        </Section>  
    </Wrapper>
);

export default Home;