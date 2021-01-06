import { css } from "styled-components";

const lightVars = `
  --color-background: #FCFFFF;
  --color-text: #0D0E14;
  --accents-0: #AAAAAA;
  --accents-radius-1: 4px;
  --accents-radius-2: 6px;
  --dashed-border: #9B9B9B;
  --color-background-overlay: #FFFFFF;
`;

const darkVars = `
  --color-background: #0D0E14; 
  --color-text: #EDEDED;
  --accents-0: #9B9B9B;
  --accents-radius-1: 4px;
  --accents-radius-2: 6px;
  --dashed-border: #9B9B9B;
  --color-background-overlay: #0D0E14;
 `;

export default css`
  // default theme in case refers-color-scheme is not supported
  :root {
    ${lightVars}

    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    --font-family: "Quicksand", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --font-family-mono: "Fira Mono", monospace;
  }

  @media (prefers-color-scheme: light) {
    :root {
      ${lightVars}
    }
    // dark override
    .dark {
      ${darkVars}
    }
  }
  @media (prefers-color-scheme: dark) {
    :root {
      ${darkVars}
    }

    // light override
    .light {
      ${lightVars}
    }
  }
  @media (prefers-color-scheme: no-preference) {
  }
`;
