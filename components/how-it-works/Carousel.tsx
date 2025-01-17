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

export const CarouselItem = ({
  title,
  icon,
  description,
}: CarouselItemProps) => {
  return (
    <div className="flex flex-col md:w-full items-center w-screen ">
      <div className="flex flex-col justify-center items-center gap-3 w-[350px]">
        <Image src={icon} alt={title} width={64} height={40} />
        <h4 className="text-black uppercase text-xs font-semibold">{title}</h4>
        <p
          className="text-justify md:text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
  slidesPerView: number;
  spaceBetween: number;
}

export const items = [
  {
    title: "Disassembly",
    icon: "/icons/disassembly.svg",
    description:
      "<strong> Disassembly involves taking apart the entire vehicle to assess the condition of each individual part. This includes removing the engine, transmission, body panels, interior components, and other parts. </strong>",
  },
  {
    title: "Inspection and Assessment",
    icon: "/icons/inspection-and-assessment.svg",
    description:
      " <b> Once the car is disassembled, each part is inspected and assessed to determine its condition. </b>",
  },
  {
    title: "Restoration",
    icon: "/icons/restoration.svg",
    description:
      "<strong> During this stage, each component that needs repair or refurbishment is restored to its original condition. </strong> .",
  },
  {
    title: "Assembly",
    icon: "/icons/assembly.svg",
    description:
      "<strong> Once all the parts have been restored, the vehicle is reassembled. </strong>",
  },
  {
    title: "Testing and Adjustment",
    icon: "/icons/testing-and-adjustment.svg",
    description:
      "<strong> After the car has been reassembled, it is tested to ensure everything is functioning properly. This includes checking the engine, brakes, suspension, and other systems. </strong>",
  },
  {
    title: "Finishing and Detailing",
    icon: "/icons/finishing-and-detailing.svg",
    description:
      "<strong> The final stage involves finishing touches and detailing. This includes adding final trim pieces, waxing and buffing the paint, and cleaning the interior. </strong>",
  },
];

const Carousel: FC<CarouselProps> = ({
  id,
  className,
  slidesPerView,
  spaceBetween,
}) => {
  return (
    <section
      className={cn("mx-auto flex flex-col gap-12 w-full max-w-7xl", className)}
    >
      <div className="flex gap-12">
        <div className="flex overflow-hidden swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper"
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
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
        <div
          className={`flex md:relative absolute left-1/4  swiper-prev-${id}`}
        >
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
        <div
          className={`flex md:relative absolute  right-1/4 swiper-next-${id}`}
        >
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
