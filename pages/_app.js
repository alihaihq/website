import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import 'antd/dist/antd.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      title="Alihai Store"
      description="Fashion is in your hand, we just help you to make it."
      openGraph={{
        url: 'https://alihaistore.com/',
        title: 'Alihai Store',
        description: 'Fashion is in your hand, we just help you to make it.',
        images: [
          {
            url: 'http://avatars0.githubusercontent.com/u/70004592?s=200&v=4',
            width: 200,
            height: 200,
            alt: 'Fashion is in your hand, we just help you to make it.',
          },
        ],
        site_name: 'Alihai Store',
      }}
    />
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-114357378-3"
      />
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
      />
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

export default App;
