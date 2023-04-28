import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
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
    <div className="flex w-[850px] gap-14 rounded-md">
      <div
        className={cn("flex w-1/2 rounded-md bg-cover relative gap-3", image)}
      >
        <Image
          src={image}
          className="rounded-lg"
          width={440}
          height={394}
          alt="Gonçalo Severino"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-1/2 pt-[52px]">
        <span className="text-tabInactive uppercase">
          Chief Financial Officer
        </span>
        <h3 className="uppercase pb-8">
          <span className="text-primaryGreen">Gonçalo</span>
          <br />
          Severino
        </h3>
        <p className="text-left">
          João Dias, engineering training, 32 years of which in the last 15 he
          was involved in sports and classic cars. With training done and
          experience gained in restoration workshops, collectors, races and
          competitions, he was workshop manager at just 22 years old leading a
          team of 17 &quot;masters&quot; of restoration for their knowledge,
          taste and ability to make things happen.
        </p>
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
    title: "Maserati 3500 GT",
    image: "/about-us/cfo.jpg",
    status: "Renewing",
    completion: "15",
  },
  {
    title: "Chevrolet 200",
    image: "/about-us/cfo.jpg",
    status: "Renewing",
    completion: "45",
  },
  ,
  {
    title: "Chevrolet 300",
    image: "/about-us/cfo.jpg",
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
        <div className="flex overflow-hidden swiper-wrapper ">
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
      <div className="flex gap-6 justify-center items-center  w-1/5 mx-auto">
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
