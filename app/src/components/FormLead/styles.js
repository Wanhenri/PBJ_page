import styled from "styled-components";

import InputPousada from "../../objects/InputPousada";

import TextPousada from '../../objects/TextPousada';

export const Form = styled.form`
    position:relative;
    &> ${TextPousada}{
        margin-bottom: var(--spacing-small);
    }
    &> ${InputPousada}{
        margin-right: var(--spacing-small);
    }
`;