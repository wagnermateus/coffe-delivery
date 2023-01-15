import { createGlobalStyle, ThemeConsumer } from "styled-components";

export const GlobaStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
}
body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}
input:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
}
button{
    cursor: pointer;
}

`;
