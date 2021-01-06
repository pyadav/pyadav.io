import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GTM_ID } from "helpers/gtm";
import GTMNoScript from "components/GTMNoScript";

interface IDocumentProps {
  styleTags: React.ReactElement[];
}

export default class MyDocument extends Document<IDocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&family=Fira+Mono&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          {this.props.styleTags}

          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <GTMNoScript />
        </body>
      </Html>
    );
  }
}
