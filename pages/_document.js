import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {

  render() {
    return (
      <Html lang="en" >
				<Head>
					<meta name="description" content="I help brands & businesses design, develop, test, deploy and monitor web-based applications." />
					<link rel="icon" href="/dp_tiny.png" />
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
          <meta property="og:title" content="Orsbert Ayesigye's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://orsbert.com" />
          <meta property="og:image:url" content="/dp.png" />
          <meta property="og:description" content="I help brands & businesses design, develop, test, deploy and monitor web-based applications." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}