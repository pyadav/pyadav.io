import { TRANSITION_DURATION_BASE } from "constant";

import { css } from "styled-components";

export default css`
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

  body,
  input,
  button,
  select,
  option {
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: var(--font-weight-bold);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-heading);
    line-height: var(--lineHeight-normal);
    letter-spacing: -0.025em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
  }

  h1 {
    font-weight: var(--fontWeight-black);
    font-size: var(--fontSize-6);
    color: var(--color-heading);
    margin-top: var(--spacing-12);
    margin-bottom: var(--spacing-6);
  }

  h2 {
    font-size: var(--fontSize-5);
    margin-top: var(--spacing-10);
    margin-bottom: var(--spacing-5);
  }

  h3 {
    font-size: var(--fontSize-4);
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-4);
  }

  h4 {
    font-size: var(--fontSize-3);
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-3);
  }

  h5 {
    font-size: var(--fontSize-2);
    margin-top: var(--spacing-4);
    margin-bottom: var(--spacing-2);
  }

  h6 {
    font-size: var(--fontSize-1);
    margin-top: var(--spacing-2);
    margin-bottom: var(--spacing-1);
  }

  code {
    font-size: 0.95em;
    font-weight: var(--font-weight-bolder);
  }

  figure.figure-code {
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-6) var(--spacing-0) var(--spacing-0) var(--spacing-0);
    border-radius: var(--accents-radius-2);
    overflow: hidden;
    background-color: #5f5f5f;
    background-image: url(/window-buttons.png);
    background-repeat: no-repeat;
    background-size: 44px 10px;
    background-position: var(--spacing-6) var(--spacing-4);
  }

  /* Scrollbar and selection styles */
  ::selection {
    --text-opacity: 0.8;
    background-color: rgba(129, 140, 248, var(--text-opacity));
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

  // blog post

  .blog-post,
  .blog-post > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
  }

  .blog-post > p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h1 > a,
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
  }

  p {
    font-size: 1.15rem;

    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-8) var(--spacing-0) var(--spacing-8) var(--spacing-0);
  }

  ol,
  p,
  ul {
    padding: var(--spacing-0);
  }

  ol,
  ul {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
  }

  ol li,
  ul li {
    padding-left: var(--spacing-0);
  }

  li > p,
  ol li,
  ul li {
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li :last-child {
    margin-bottom: var(--spacing-0);
  }

  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }

  blockquote {
    color: var(--color-text);
    margin-left: calc(var(--spacing-6) * -1);
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-primary);
    --border-opacity: 1;
    border-color: rgba(99, 102, 241, var(--border-opacity));
    border-left-width: 4px;
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
  }

  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }

  blockquote > ol,
  blockquote > ul {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid var(--color-accent);
  }

  a {
    color: rgba(129, 140, 248);
  }

  a:focus,
  a:hover {
    text-decoration: underline;
  }

  .inline {
    display: inline;
  }

  .relative {
    position: relative;
  }

  .text-base {
    font-size: var(--fontSize-1);
    line-height: var(--lineHeight-normal);
  }
`;
