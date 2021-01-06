import React from "react";
import { createGlobalStyle } from "styled-components";
import { LIGHT_COLORS, TRANSITION_DURATION_BASE } from "constant";
import Reset from "styles/Reset";
import Prism from "styles/Prism";
import Variables from "styles/Variables";

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Prism}

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
  
  body::-webkit-scrollbar {
    display: none;
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

  figure.figure-code {
    margin-bottom: 4.1rem;
    padding: 3.7rem 0 1.6rem 0.4rem;
    border-radius: 1.1rem;
    overflow: hidden;
    background-color: #5f5f5f;
    background-image: url(/window-buttons.png);
    background-repeat: no-repeat;
    background-size: 44px 10px;
    background-position: 16px 14px;
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
  ${Variables}

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
