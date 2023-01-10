import { type NextPage } from "next";
import Head from "next/head";
import HomeView from "../components/HomeView/HomeView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bonjour</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeView />
      </main>
    </>
  );
};

export default Home;
