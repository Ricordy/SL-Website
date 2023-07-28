import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

interface CarouselItemProps {
  title: string;
  image: string;
  status: string;
  completion: string;
}

const CarouselItem = ({
  title,
  image,
  status,
  completion,
}: CarouselItemProps) => {
  return (
    <div className="flex flex-col w-max rounded-md bg-progressBackground">
      <div
        className={cn(
          "flex flex-col justify-end items-center min-h-[394px] rounded-t-md  bg-cover relative gap-3 w-96",
          image
        )}
      >
        <h4 className="z-10 uppercase text-3xl">{title}</h4>
        <div className="flex z-10 relative  pb-6 justify-around w-full">
          <div className="flex">
            <div className="flex gap-3">
              <span>Status:</span>
              <span className="font-medium">{status}</span>
            </div>
          </div>
          <div className="flex ">{completion}% finished</div>
        </div>
        <div className="flex z-0 absolute w-full min-h-[200px] bg-[url('../public/projects/car-gradient.svg')] bg-cover"></div>
      </div>
      <div
        className={`flex rounded-bl-md bg-progressHighlight h-3`}
        style={{ width: `${completion}%` }}
      ></div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
}

const items = [
  {
    title: "Maserati 3500 GT",
    image: "bg-[url('/projects/car-1.jpg')]",
    status: "Renewing",
    completion: "15",
  },
  {
    title: "Chevrolet 200",
    image: "bg-[url('/projects/car-2.jpg')]",
    status: "Renewing",
    completion: "45",
  },
  ,
  {
    title: "Chevrolet 300",
    image: "bg-[url('/projects/car-2.jpg')]",
    status: "Renewing",
    completion: "85",
  },
];

const Carousel: FC<CarouselProps> = ({ id, className }) => {
  return (
    <section
      className={cn(
        "mx-auto flex flex-col gap-8 w-full max-w-screen-lg",
        className
      )}
    >
      <div className="flex gap-12">
        <div className="flex flex-col pt-[72px] gap-8 w-2/6">
          <h3 className="uppercase font-light">
            Our <span className="font-medium">ongoing</span> projects
          </h3>
          <p>
            Made with love and a lot of passion for every detail, this is our
            atual range of products.
          </p>
          <Link href="https://beta.somethinglegenary.io">
            <a className="uppercase dark:border-primaryGreen dark:text-primaryGreen dark:hover:text-white dark:hover:bg-primaryGreen hover:text-white hover:bg-primaryGreen border-2 py-1 px-8 text-sm self-start rounded-md text-primaryGreen">
              Go to app
            </a>
          </Link>
        </div>

        <div className="flex overflow-hidden swiper-wrapper ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper"
            spaceBetween={30}
            slidesPerView={1}
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
              <SwiperSlide key={index}>
                <CarouselItem
                  title={item.title}
                  image={item.image}
                  status={item.status}
                  completion={item.completion}
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
