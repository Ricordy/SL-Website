import { useTranslation } from "next-i18next";
import Link from "next/link";

import Navbar from "./Navbar";
import { Button } from "./Button";

function Hero(props) {
  const { t } = useTranslation("hero");

  return (
    <section className="bg-black bg-[url('../public/hero-home.jpg')] bg-cover bg-no-repeat md:bg-top bg-right w-full relative flex flex-col min-h-screen items-center justify-between">
      <Navbar className="lg:mb-[132px]" />
      <div className="flex w-full px-6 xl:px-0 z-10 max-w-screen-lg flex-col gap-[52px] justify-between h-full ">
        <p className="text-2xl md:text-4xl w-full md:w-2/3 md:leading-[48px] pt-3 md:pt-[52px] uppercase font-light tracking-[4px] text-white">
          <span className="font-bold">Your classics</span>
          <br /> <b className="font-bold">fever</b>, into a<br /> dream come
          true.
        </p>
        <p className="w-full md:w-2/3 font-ubuntu md:leading-7 font-light text-white">
          Discover the world of{" "}
          <span className="font-bold">investment in classics</span>
          <br className="hidden md:block" /> and follow the process{" "}
          <span className="font-bold">in real time</span>.
        </p>
        <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
          <a className="text-black bg-white text-center uppercase border-2 text-xs border-slate-100 rounded-md px-8 py-1 self-start">
            Go to App
          </a>
        </Link>
      </div>
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 bg-opacity-75" /> */}
      <div className="absolute w-full h-full inset-0  bg-gradient-to-b from-black to-gray-950" />
      <div className="flex w-full min-h-[219px] -mb-[1px] bg-[url('../public/gradient-hero-home.svg')] bg-cover" />
    </section>
  );
}

export default Hero;
