import { useTranslation } from "next-i18next";
import Link from "next/link";

import Navbar from "./Navbar";
import { Button } from "./Button";

function Hero(props) {
  const { t } = useTranslation("hero");

  return (
    <section className="bg-black bg-[url('../public/hero-home.jpg')] bg-cover bg-no-repeat bg-center w-full flex flex-col min-h-screen items-center justify-between">
      <Navbar />
      <div className="flex w-full px-6 xl:px-0 max-w-screen-lg flex-col gap-6">
        <p className="text-4xl w-2/3 uppercase font-light tracking-widest text-white">
          <span className="font-bold ">Your classics</span>
          <br /> fever, into a<br /> dream come true.
        </p>
        <p className="w-2/3 font-ubuntu font-light text-white">
          Discover the world of{" "}
          <span className="font-bold">investment in the classics</span>
          <br /> and follow the process{" "}
          <span className="font-bold">in real time</span>.
        </p>
        <Link href="/try">
          <a className="text-black bg-white text-center uppercase border-2 text-xs border-slate-100 rounded-md px-8 py-1 self-start">
            Go to App
          </a>
        </Link>
      </div>
      <div className="flex w-full min-h-[200px] bg-[url('../public/gradient-hero-home.svg')] bg-cover"></div>
    </section>
  );
}

export default Hero;
