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
    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    --font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --font-family-mono: 'League Mono', 'Fira Mono', monospace;
  }



  // prism
  figure.figure-code {
    margin-bottom: 4.1rem;
    padding: 3.7rem 0 1.6rem .4rem;
    border-radius: 1.1rem;
    overflow: hidden;
    background-color: #5f5f5f;
    background-image: url(/window-buttons.png);
    background-repeat: no-repeat;
    background-size: 44px 10px;
    background-position: 16px 14px;
  }
  
  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  

  /* Code blocks */
  pre[class*="language-"] {
    padding: 0;
    margin: 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: none;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0;
    border-radius: 0;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
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
