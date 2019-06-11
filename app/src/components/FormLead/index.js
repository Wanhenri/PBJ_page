import React, { useState } from 'react';

import { Form } from "./styles";
import InputPousada from "../../objects/InputPousada";
import BtnPousada from '../BtnPousada';

import TextPousada from '../../objects/TextPousada';


const FormLead = () => {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState("Receber")

    return(
        <Form>
            <TextPousada>
            QUER RECEBER NOVIDADES DOS EVENTOS E DISPONIBILIDADES DE VAGA?.
            </TextPousada>

            <InputPousada placeholder="Nome"/>
            <InputPousada placeholder="Email"/>

            <BtnPousada 
                onClick={event => {
                        event.preventDefault();
                        setLoading(true);
                        setContent("Enviando..");
                    }
                } 
                loading={loading} 
            >
                {content}
            </BtnPousada>

        </Form>
    );
};

export default FormLead;