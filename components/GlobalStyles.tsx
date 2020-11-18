import React from "react";
import { createGlobalStyle } from "styled-components";
import { LIGHT_COLORS, TRANSITION_DURATION_BASE } from "constant";
const GlobalStyles = createGlobalStyle`

  /* CSS RESET */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: var(--color-text);
    background: var(--color-background);

    transition: ${() => {
      return `color ${TRANSITION_DURATION_BASE}ms, background ${TRANSITION_DURATION_BASE}ms`;
    }};
  }

  a:focus {
    outline: 5px auto var(--color-primary);
  }

  body, input, button, select, option {
    font-family: var(--font-family);
    font-weight: var(--font-weight-light);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: var(--font-weight-bold);
  }

  code {
    font-size: 0.95em;
  }

  /* Scrollbar and selection styles */
  ::selection {
    background-color: ${LIGHT_COLORS.primary};
    color: white;
  }

  @media (orientation: landscape) {
    ::-webkit-scrollbar {
      width: 12px;
      background-color: var(--color-gray-100);
    }
    ::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: var(--color-gray-700);
      border: 2px solid var(--color-gray-100);
    }
  }


  /* CSS Variables */
  :root {
    /*  Colors are injected in 'gatsby-ssr.js'  */
    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    --font-family: 'Ubuntu', Futura, -apple-system, sans-serif;
    --font-family-mono: 'League Mono', 'Fira Mono', monospace;

    /* HACK:
      Reach UI tests for loaded styles, but I'm providing my own.
      This is to avoid a noisy warning in dev.
    */
   --reach-dialog: 1;
  }
`;

const Wrapper = (props: any) => {
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px",
    );
  }, []);
  return <GlobalStyles {...props} />;
};

export default React.memo(Wrapper);
