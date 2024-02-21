import { createGlobalStyle } from 'styled-components';
import { colorOptions } from './tokens';

export const globalTheme = createGlobalStyle`
    *, *:after, *:before {
        // box-sizing: border-box;
    }
    html, {
        font-size: 62.5%;
        height: 100%;

        --color-white: ${colorOptions.white};
        --color-black: ${colorOptions.black};
        --color-darkSilver: ${colorOptions.darkSilver};
        --color-mediumSilver: ${colorOptions.mediumSilver};
        --color-lightSilver: ${colorOptions.lightSilver};
        
        --color-darkNavy: ${colorOptions.darkNavy};
        --color-navy: ${colorOptions.navy};
        --color-fadedNavy: ${colorOptions.fadedNavy};
        --color-roseTaupe: ${colorOptions.roseTaupe};
        --color-jasper: ${colorOptions.jasper};
        --color-platinumBlue: ${colorOptions.platinumBlue};
        --color-verdigris: ${colorOptions.verdigris};
        --color-naplesYellow: ${colorOptions.naplesYellow};
        --color-orange: ${colorOptions.orange};
        --color-coral: ${colorOptions.coral};
    }
    h1, h2, h3, h4, h5, h6, p, li, a, {
        font-family: Montserrat, sans-serif;
    }

    html, body {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.30;
        background-color: var(--color-white);
        letter-spacing: 0.01rem;
    }

    #root {
        height:100%;
    }
`;
