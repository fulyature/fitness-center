import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        padding: 0;
        box-sizing: 0;
        margin: 0;
    }
    body{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background:#A78295 ;
    }
    p{
        font-size: 1.5rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        line-height: 1;
    }
`;
