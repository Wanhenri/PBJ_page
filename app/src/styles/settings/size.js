import { createGlobalStyle } from "styled-components";

const Size = createGlobalStyle`
    :root {
        --radius-small: 4px;
        --radius-medium: 9px;
        --size-base:10px;
        --size-small:1.5em;
        --size-medium:1.4em;
        --size-big:1.9em;
        --size-very-big:2.4em;
    }
    @media (max-height:700px) {
        :root{
            --size-base:9.8px;
        }
    }
`;

export default Size;
