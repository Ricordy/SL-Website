import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Menu from '../components/Menu';
import { createContext } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
