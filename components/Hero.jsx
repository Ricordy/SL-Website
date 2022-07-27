import Image from "next/image"
import car from "../public/classic-car.png"

function Hero() {
  return (
    <div  className="flex py-12">
    <p className="font-serif text-5xl">
    It is in the solitude that legends are born.
    </p>
    <div className="car bg-gradient-to-br from-transparent to-cyan-500 rounded-full pt-4 w-1/2 h-1/2">
      <Image src={car} alt="Classic Car" className="" />
    </div>
    
    </div>
  )
}

export default Hero
