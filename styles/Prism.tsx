import { css } from "styled-components";

export default css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: "Fira Code", Monaco, Andale Mono, Ubuntu Mono, monospace;
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

  pre[class*="language-"] {
    padding: var(--spacing-4) var(--spacing-6);
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: #d4d4d4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.constant,
  .token.deleted,
  .token.property,
  .token.symbol,
  .token.tag {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.attr-name,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
    color: #50fa7b;
  }

  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.operator,
  .token.url,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.class-name,
  .token.function {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.important,
  .token.regex {
    color: #ffb86c;
  }

  .token.bold,
  .token.important {
    font-weight: 700;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;
