import { useTranslation } from "next-i18next";
import Image from "next/image";
import car from "../public/car.svg";
import heroGradient from "../public/gradient-hero-home.svg";

import Navbar from "./Navbar";
import { Button } from "./Button";

function Hero(props) {
  const { t } = useTranslation("hero");

  return (
    <section className="bg-slate-700 bg-[url('../public/hero-home.jpg')] bg-cover bg-no-repeat bg-center w-full flex flex-col min-h-screen items-center justify-between">
      <Navbar />
      <div className="flex w-full px-6 xl:px-0 max-w-7xl flex-col gap-6">
        <p className="text-4xl w-1/3 uppercase">
          <span className="font-bold">Your classics</span>
          <br /> fever, into a dream come true.
        </p>
        <p className="w-1/3">
          Discover the world of{" "}
          <span className="font-bold">investment in the classics</span> and
          follow the process <span className="font-bold">in real time</span>.
        </p>
        <Button className="self-start">Try it for free</Button>
      </div>
      <div className="flex w-full min-h-[200px] bg-[url('../public/gradient-hero-home.svg')] bg-cover"></div>
    </section>
  );
}

export default Hero;
