import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { PortfolioList } from "../components/PortfolioList";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Orsbert Ayesigye - Crafting captivating & intuitive interactive web
          interfaces, sites, and applications.
        </title>
      </Head>
      <Nav />
      <Header />
      <PortfolioList />
      <Footer />
    </>
  );
}
