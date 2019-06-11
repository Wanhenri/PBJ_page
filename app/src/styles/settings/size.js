import { createGlobalStyle} from "styled-components";


const Size = createGlobalStyle `
    :root {
        --radius-small: 4px;
        --size-base:10px;
        --size-small:1.5em;
        --size-medium:1.1em;
        --size-very-big:1.5em;
    }
    @media (max-height:700px) {
        :root{
            --size-base:9.8px;
        }
    }
`;

export default Size;