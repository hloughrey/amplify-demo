import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100vh;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1.571426;
    }
`;
