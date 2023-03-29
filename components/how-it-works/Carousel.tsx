import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

interface CarouselItemProps {
  title: string;
  icon: string;
  description: string;
}

const CarouselItem = ({ title, icon, description }: CarouselItemProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={icon} alt={title} width={25} height={25} />
        <h4 className="text-black uppercase text-xs font-semibold">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
}

const items = [
  {
    title: "Disassembly",
    icon: "/icons/car.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
  {
    title: "Inspection and Assessment",
    icon: "/icons/alert.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
  {
    title: "Restoration",
    icon: "/icons/trophy.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
  {
    title: "Assembly",
    icon: "/icons/trophy.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
  {
    title: "Testing and Adjustment",
    icon: "/icons/trophy.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
  {
    title: "Finishing and Detailing",
    icon: "/icons/trophy.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
  },
];

const Carousel: FC<CarouselProps> = ({ id, className }) => {
  return (
    <section
      className={cn("mx-auto flex flex-col gap-12 w-full max-w-7xl", className)}
    >
      <div className="flex gap-12">
        <div className="flex overflow-hidden swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper"
            spaceBetween={44}
            slidesPerView={3}
            // pagination={{ clickable: true }}
            // navigation={true}
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
            // loop={true}
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <CarouselItem
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center  w-1/3 mx-auto">
        <div className={`flex relative swiper-prev-${id}`}>
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
        <div className={`flex relative swiper-next-${id}`}>
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

export default Carousel;
