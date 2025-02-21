import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>trivison</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
