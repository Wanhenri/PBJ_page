import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";

export const Header = styled.header`
    
    padding-top:10px;
    

    position:absolute;
    z-index:1;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;

    &> ${LogoAvatar}{
        
    }

`;