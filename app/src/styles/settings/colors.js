import { createGlobalStyle} from "styled-components";

const Colors = createGlobalStyle`
    :root {
        --color-negative-light: rgba(0, 0, 0, 0.15);
        --color-base: #3A4042;        
        --color-zero: #FFFF;
        --color-first:#F25A70;
        --color-second: #191637;
        --color-third: #EAE6DA;
        --color-fundo: #FFF6F6
        --color-text: #484848
    }
`

export default Colors;