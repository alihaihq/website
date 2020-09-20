import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-114357378-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
                  
                  gtag("config", "UA-114357378-3");
          `,
          }}
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0099ff" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&family=Roboto:wght@300&family=Syncopate&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
