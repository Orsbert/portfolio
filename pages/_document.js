import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='I help brands & businesses design, develop, test, deploy and monitor web-based applications.'
          />
          <link rel='icon' href='/dp_tiny.png' />
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat'
            rel='stylesheet'
          ></link>
          <meta property='og:title' content="Orsbert Ayesigye's Portfolio" />
          <meta
            property='og:description'
            content='I help brands & businesses design, develop, test, deploy and monitor web-based applications.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://orsbert.com' />
          <meta property='og:image:url' content='https://orsbert.com/dp.png' />
          <meta property='og:image' content='https://orsbert.com/dp.png' />
          <meta
            property='og:image:secure_url'
            content='https://orsbert.com/dp.png'
          />
          <meta property='og:image:width' content='343' />
          <meta property='og:image:height' content='343' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src='https://player.vimeo.com/api/player.js'></script>
      </Html>
    );
  }
}
