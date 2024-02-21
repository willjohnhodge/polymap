import { createGlobalStyle } from 'styled-components';
import { colorOptions } from './tokens';

export const globalTheme = createGlobalStyle`
    *, *:after, *:before {
        box-sizing: border-box;
    }
    html, {
        font-size: 62.5%;
        height: 100%;
        line-spacing: 1.3;

        --color-white: ${colorOptions.white};
        --color-black: ${colorOptions.black};
    }
    h1, h2, h3, h4, h5, h6, p, li, a, {
        font-family: Montserrat, sans-serif;
    }

    html, body {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.40;
        background-color: var(--color-white);
        letter-spacing: 0.05rem;
    }

    #root {
        height:100%;
    }
`;
