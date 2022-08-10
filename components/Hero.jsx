import { useTranslation } from "next-i18next"
import Image from "next/image"
import car from "../public/car.svg"

function Hero(props) {
  const { t } = useTranslation('hero');

  return (
    <section  className=" bg-gradient-to-tr from-[#d9b061] to-[#8d6f57] flex flex-col py-12 min-h-screen">
      <div className="content flex">
        <p className="font-serif text-3xl md:text-5xl">
        {t("slogan")}
        </p>
        <div className="car pt-4 w-1/2 h-1/2">
          <Image src={car} alt="Classic Car" className="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
