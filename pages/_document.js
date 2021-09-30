import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {

  render() {
    return (
      <Html lang="en">
				<Head>
					<meta name="description" content="Portfolio for Orsbert Ayesigye" />
					<link rel="icon" href="/dp_tiny.png" />
					<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}