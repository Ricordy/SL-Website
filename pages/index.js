import Head from "next/head";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Hero from "../components/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Security from "../components/Security";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          Something Legendary | It is in the solitude that legends are born
        </title>
        <meta
          name="description"
          content="Somenthing Legendary: It is in the solitude that legends are born."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Aboutus />
      <HowItWorks />
      <Roadmap />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "hero",
        "how-it-works",
        "roadmap",
        "newsletter",
        "about-us",
      ])),
      // Will be passed to the page component as props
    },
  };
}
