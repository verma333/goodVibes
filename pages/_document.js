import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';



export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
        <Html>
            <Head>
            <link rel="shortcut icon" href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1611744812/Concierge/bmykknhiqk44krgobz6n.png" />
             
               
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

  
}