import { css } from "styled-components";

const lightVars = `
  --color-background: #FCFFFF;
  --color-text: #2e353f;
  --color-primary: #005b99;
  --color-heading: #1a202c;
  --color-accent: #d1dce5;
  --accents-radius-1: 4px;
  --accents-radius-2: 6px;
  --dashed-border: #9B9B9B;
  --color-background-overlay: #FFFFFF;
`;

const darkVars = `
  --color-background: #0D0E14; 
  --color-text: #EDEDED;
  --color-heading: #1a202c;
  --color-accent: #9B9B9B;
  --accents-radius-1: 4px;
  --accents-radius-2: 6px;
  --dashed-border: #9B9B9B;
  --color-background-overlay: #0D0E14;
 `;

export default css`
  // default theme in case refers-color-scheme is not supported
  :root {
    ${lightVars}

    // Font weight
    --font-weight-bolder: 500;
    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;

    // Font Family
    --font-family: "Quicksand", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    --font-family-heading: "Quicksand", -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    --font-family-mono: "Fira Mono", monospace;

    // Max width
    --maxWidth-none: "none";
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-full: "100%";
    --maxWidth-wrapper: var(--maxWidth-2xl);

    // Spacing
    --spacing-px: "1px";
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;

    // Font Weight
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semibold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extrabold: 800;
    --fontWeight-black: 900;
    --fontSize-root: 16px;

    // LineHeight
    --lineHeight-none: 1;
    --lineHeight-tight: 1.1;
    --lineHeight-normal: 1.5;
    --lineHeight-relaxed: 1.625;

    // Font Size
    --fontSize-0: 0.833rem;
    --fontSize-1: 1rem;
    --fontSize-2: 1.2rem;
    --fontSize-3: 1.44rem;
    --fontSize-4: 1.728rem;
    --fontSize-5: 2.074rem;
    --fontSize-6: 2.488rem;
    --fontSize-7: 2.986rem;
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
