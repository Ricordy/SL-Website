import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

interface CarouselItemProps {
  title: string;
  image: string;
  price: number;
  year: number;
  profit: number;
  description: string;
  actualIndex: number;
  selectedIndex: number;
}

const CarouselItem = ({
  title,
  image,
  price,
  year,
  profit,
  description,
  actualIndex,
  selectedIndex,
}: CarouselItemProps) => {
  return (
    <div
      className={cn(
        "flex md:w-[900px] w-[60vw] md:flex-row flex-col md:p-8 p-3 gap-4 rounded-md",
        actualIndex === selectedIndex ? "bg-[#F6F9F8]" : ""
      )}
    >
      <div className="flex flex-col md:items-start w-full md:w-1/2 md:pt-24 items-left">
        <h3 className="uppercase pb-1 text-primaryGreen text-left ">{title}</h3>
        <div className="flex gap-2 p-0 pb-4 leading-none font-light divide-x-2 divide-dreamBlack text-black">
          <div className="">{year}</div>
          <div className="pl-2">
            Sold by <span className="font-medium">{price}</span>
          </div>
          <div className="pl-2">
            <span className="font-medium">{profit}</span>% profit
          </div>
        </div>
        <div
          className="text-black w-full text-left"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={cn(
          "flex w-1/2 justify-center rounded-md bg-cover relative self-center"
        )}
      >
        <Image
          className="rounded-lg"
          src={image}
          width={440}
          height={394}
          alt={title}
        />
      </div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
  items?: any;
}

const items = [
  {
    title: "Maserati 3500 GT",
    image: "/projects/car-1.jpg",
    price: 350000,
    year: 1968,
    profit: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
  },
  {
    title: "Chevrolet 200",
    image: "/projects/car-2.jpg",
    price: 350000,
    year: 1968,
    profit: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
  },
  {
    title: "Chevrolet 300",
    image: "/projects/car-2.jpg",
    price: 350000,
    year: 1968,
    profit: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
  },
  {
    title: "Chevrolet 300",
    image: "/projects/car-2.jpg",
    price: 350000,
    year: 1968,
    profit: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
  },
];

const TrophyCarousel: FC<CarouselProps> = ({ id, className, items }) => {
  const [currentSwiper, setcurrentSwiper] = useState(0);
  // console.log(items);

  return (
    <section className={cn("mx-auto flex flex-col gap-16 w-full", className)}>
      <div className="flex flex-col items-center w-full relative">
        <h3 className="uppercase pb-1 text-center">Legendary Trophy Room</h3>
        <h4 className="pb-[52px] text-black uppercase">Growing hot wheels</h4>
        <div className="flex overflow-hidden   swiper-wrapper ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper"
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{
              clickable: true,
              el: `.swiper-pagination-${id}`,
            }}
            navigation={{
              nextEl: `.swiper-next-${id}`,
              prevEl: `.swiper-prev-${id}`,
            }}
            updateOnWindowResize
            observer
            observeParents
            initialSlide={0}
            onSlideChange={(swiper) => setcurrentSwiper(swiper.activeIndex)}
            // loop={true}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="">
                {/* <div className="bg-green-200">{`Slide ${index}`}</div> */}
                <CarouselItem
                  title={item.basicInvestment.car.basicInfo.title}
                  image={item.basicInvestment.car.basicInfo.cover.url}
                  price={item.soldBy}
                  year={item.basicInvestment.car.year}
                  profit={item.finalProfitRate}
                  description={item.soldText?.html}
                  actualIndex={index}
                  selectedIndex={currentSwiper}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center  w-1/5 mx-auto">
        <div className={`flex relative cursor-pointer swiper-prev-${id}`}>
          <Image
            src="/icons/pagination-prev.svg"
            width={20}
            height={15}
            alt="Previous"
          />
        </div>
        <div
          className={`flex justify-center items-center gap-1 text-black swiper-pagination-${id}`}
        />
        <div className={`flex relative cursor-pointer swiper-next-${id}`}>
          <Image
            src="/icons/pagination-next.svg"
            width={20}
            height={15}
            alt="Next"
          />
        </div>
      </div>
    </section>
  );
};

export default TrophyCarousel;
