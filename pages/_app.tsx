import React from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { THEME } from "constant";
import GlobalStyles from "components/GlobalStyles";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={THEME}>
      <DefaultSeo title="I am yadav" />
      <GlobalStyles />

      <>
        <div id="mobile-nav-portal" />
        <Component {...pageProps} />
        <div id="confetti-portal" />
        <div id="portals" />
      </>
    </ThemeProvider>
  );
};

export default App;
