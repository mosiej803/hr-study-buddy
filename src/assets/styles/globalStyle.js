import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
     box-sizing: border-box;
}


*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}


body {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    overflow: hidden;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}

h3 {
    margin-bottom: 20px;
}
`;
