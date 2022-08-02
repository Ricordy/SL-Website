import Menu from '../components/Menu'
import Image from "next/image"
import car from "../public/car.svg"

function Hero() {
  return (
    <section  className=" bg-gradient-to-tr from-[#d9b061] to-[#8d6f57] flex flex-col py-12 min-h-screen">
      <Menu />
      <div className="content flex">
        <p className="font-serif text-3xl md:text-5xl">
        It is in the solitude that legends are born.
        </p>
        <div className="car pt-4 w-1/2 h-1/2">
          <Image src={car} alt="Classic Car" className="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
