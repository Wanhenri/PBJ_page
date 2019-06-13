import styled from "styled-components";

import SubtitlePousada from "../../components/SubtitlePousada";
import TextPousada from "../../objects/TextPousada";
import AcomodacaoPousada from "../../components/acomodacao";

import { Form } from "../../components/FormLead/styles.js";

export const Section = styled.section`
    display:flex;
    flex-direction: column;
    
    width:60%;
    min-width: 545px; 
    
    &> ${SubtitlePousada},
    &> ${AcomodacaoPousada} {
        margin-bottom: var(--spacing-big);
        
    }  
    &> ${SubtitlePousada} {
        
        width: 500px;
    }
    &> ${TextPousada}{
        margin-bottom: var(--spacing-small);
    }
    &> ${Form}{
        min-width: 545px;
    }
`;

export const Wrapper = styled.main `
    background-color: var(--color-fundo);
    background:linear-gradient(to bottom, var(-color-gradient-top),var(--color-gradient-medium),var(--color-gardient-bottom));
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:left;
`;