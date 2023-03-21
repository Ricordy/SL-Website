import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Dreamers from "../components/Dreamers";
import Image from "next/image";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Dreamers />
      <section className="w-full -mt-12">
        <div className="flex">
          <Image
            className="rounded-md"
            src="/media/home-1.jpg"
            width={644}
            height={528}
            alt=""
          />
          <div className="flex flex-col p-16 w-1/2">
            <h3 className=" text-black font-semibold text-3xl uppercase">
              Your dream project,
            </h3>
            <h3 className="font-semibold text-primaryGreen text-3xl uppercase">
              without leaving home.
            </h3>
            <p className="text-black">
              The opportunity to travel across borders, we know it
              doesn`&apos;`t seem real but imagine the process of restoring a
              classic directly from your sofa in the living room, accompanying
              this restoration and still having the chance to profit from it.
              That`&apos;`s what we do, with distinction.
            </p>
            <Button
              variant="outline"
              className="dark:border-primaryGreen dark:text-primaryGreen"
            >
              Try it for free
            </Button>
          </div>
        </div>
      </section>
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
