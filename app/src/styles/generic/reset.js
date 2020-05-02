import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
    }
    
    ol,ul {
        list-style:none;
    }
`;

export default Reset;
