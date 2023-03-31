import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mano</title>
        <meta name="title" property="og:title" content="Mano" />
        <meta name="description" content="My portfolio website" />
        <meta
          name="description"
          property="og:description"
          content="My portfolio website"
        />
        <meta property="og:type" content="Website" />
        <meta name="author" content="Mano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
