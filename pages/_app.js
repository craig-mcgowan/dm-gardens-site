import "../styles/global.css";
import Head from "next/head";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dan Miller Gardens</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
