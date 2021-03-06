import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  //   }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png"/>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ZBX8ZQEVT0"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZBX8ZQEVT0');
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
