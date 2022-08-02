import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Main from "@components/Main";
import About from "@components/About";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andy Catlow | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
