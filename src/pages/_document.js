import Document, { Head, Main, Html, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="ru"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Head />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/style.css" />
        <body
          style={{
            height: '100%',
            width: '100%',
            color: '#202020',
            padding: '0',
            backgroundColor: '#00695C',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ),
  };
};
export default MyDocument;
