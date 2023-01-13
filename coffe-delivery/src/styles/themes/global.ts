import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: 0;
}
body {
    background-color: ${props => props.theme["caqui-100"]};
    color: ${props => props.theme['caqui-700']};
    -webkit-font-smoothing: antialiased;
    width: calc(1440px - 350px);
    margin:auto;
    padding-bottom: 5rem;
}
body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
} 

`

