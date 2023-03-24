import "../styles/globals.css";
import "../styles/swiper.css";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);