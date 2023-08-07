import { useTranslation } from "next-i18next";
import Link from "next/link";

import Navbar from "./Navbar";
import { Button } from "./Button";

function Hero(props) {
  const { t } = useTranslation("hero");

  return (
    <section className="bg-black bg-[url('../public/hero-home.jpg')] bg-contain bg-no-repeat bg-top w-full flex flex-col min-h-screen items-center justify-between">
      <Navbar className="mb-[132px]" />
      <div className="flex w-full px-6 xl:px-0 max-w-screen-lg flex-col gap-[52px]">
        <p className="text-4xl w-2/3 leading-[48px] pt-[52px] uppercase font-light tracking-[4px] text-white">
          <span className="font-bold">Your classics</span>
          <br /> fever, into a<br /> dream come true.
        </p>
        <p className="w-2/3 font-ubuntu leading-7 font-light text-white">
          Discover the world of{" "}
          <span className="font-bold">investment in the classics</span>
          <br /> and follow the process{" "}
          <span className="font-bold">in real time</span>.
        </p>
        <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
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
