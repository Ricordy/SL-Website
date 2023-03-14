import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Aboutus />
      <HowItWorks />
      <Roadmap />
      <Contact />
      <Newsletter />
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
