import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/queries.css";

import App from "next/app";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  
  return (
    <GlobalContext.Provider value={global}>
      {/* {console.log("GLOBAL: ", global)} */}
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const global = await fetchAPI("/global");
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global } };
// };

export default MyApp;
