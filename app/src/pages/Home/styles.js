import styled from "styled-components";

import SubtitlePousada from "../../components/SubtitlePousada";
import TextPousada from "../../objects/TextPousada";
import AcomodacaoPousada from "../../components/acomodacao";

import { Form } from "../../components/FormLead/styles.js";

export const Section = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    width:60%;
    min-width: 545px; 
    
    &> ${SubtitlePousada},
    &> ${AcomodacaoPousada} {
        margin-bottom: var(--spacing-big);
    }  
    &> ${SubtitlePousada} {
        text-align:center;
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
    background-color: var(--color-first);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;