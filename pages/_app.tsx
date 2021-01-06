import React from "react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { THEME } from "constant";
import GlobalStyles from "styles/GlobalStyles";
import GoogleTagManager from "components/GoogleTagManager";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={THEME}>
      <DefaultSeo title="I am yadav" />
      <GlobalStyles />

      <>
        <GoogleTagManager>
          <Component {...pageProps} />
        </GoogleTagManager>
        <div id="confetti-portal" />
        <div id="portals" />
      </>
    </ThemeProvider>
  );
};

export default App;
