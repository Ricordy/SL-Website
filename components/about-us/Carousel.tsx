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
  name?: string;
  lastName?: string;
  description?: string;
}

const chiefsInfo = [
  {
    title: "Chief Financial Officer",
    name: "Gonçalo",
    lastName: "Severino",
    image: "/chiefs/gonçalo3.jpg",
    description: `Gonçalo Severino, managment graduate, started to delve into finance and economy by the time he was 18. Driven by a passion for the world of finances, he found his way into learning more about the stock market. 
His intrigue extended to cryptocurrencies and NFTs, areas where he aimed to stand out rather than blend in. While still in university, he began consulting for individual entrepreneurs and enterprises, within advertising and marketing. In early 2022, he co-founded Web 360 Labs, a Web 3.0 firm. Their services span legal and financial guidance, practical IT development, branding, marketing, and business model shaping—ultimately converting concepts into consumer-ready products.`,
  },
  {
    title: "Chief Executive Officer",
    name: "João",
    lastName: "Fernandes",
    image: "/chiefs/joao.jpg",
    description: `João is a businessman of diverse passions, he's always been interested in classic cars. As an accomplished entrepreneur and investor, he's spearheaded successful ventures spanning architecture, restaurants, real estate, and even co-founded a UK-listed stem cell company. His Web 3.0 consulting endeavor reflects their inclination for tech innovation.
The extensive global travels and business ventures have fostered adaptability to diverse markets and cultures. Serving as Albania's honorary consul emphasizes the commitment to community engagement.
However, it's his passion for restoring classic cars that ignited the creation of Something Legendary. By merging their classic car proficiency with Web 3.0 technology, they aspire to revolutionize the industry, leaving a potent, positive legacy on a global scale.`,
  },
  {
    title: "Classic cars especialist",
    name: "João",
    lastName: "Dias",
    image: "/chiefs/gonçalo3.jpg",
    description: `João Dias, an engineering enthusiast, boasts an impressive 32-year journey, with the last 15 years passionately dedicated to the realms of sports and classic cars. His expertise is a fusion of formal training and hands-on experience gleaned from restoration workshops, collectors' networks, races, and competitions. A feat worth noting is his ascendancy to workshop manager at the young age of 22, overseeing a team of 17 restoration "maestros" celebrated for their expertise, refined taste, and adeptness in overcoming challenges. Through his remarkable journey, João continues to leave an indelible mark in the world of automotive restoration, embodying the very essence of skill, passion, and accomplishment.`,
  },
];

const CarouselItem = ({
  title,
  image,
  name,
  lastName,
  description,
}: CarouselItemProps) => {
  return (
    <div className="flex md:flex-row w-full flex-col md:w-[850px] md:gap-12 gap-8 md:rounded-md">
      <div
        className={cn(
          "flex w-[400px] md:w-1/2 items-center justify-center align-top rounded-md bg-cover relative md:flex-row flex-col gap-3 ",
          image
        )}
      >
        <Image
          src={image}
          className="rounded-lg w-fit h-fit "
          width={440}
          height={600}
          alt="Gonçalo Severino"
        />
      </div>
      <div className="flex flex-col md:justify-start w-full md:items-start md:w-1/2  px-6 md:px-0 ">
        <div className="text-tabInactive flex uppercase">{title}</div>
        <h3 className="uppercase pb-8 flex w-full gap-1 justify-start ">
          <span className="text-primaryGreen ">{name}</span>
          <br />
          <span>{lastName}</span>
        </h3>
        <p className="w-full flex md:text-left text-justify">{description}</p>
      </div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
}

const Carousel: FC<CarouselProps> = ({ id, className }) => {
  return (
    <section
      className={cn(
        "mx-auto flex flex-col gap-8 w-full max-w-screen-lg",
        className
      )}
    >
      <div className="flex gap-12">
        <div className="flex w-full swiper-wrapper ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper w-full"
            spaceBetween={30}
            slidesPerView="auto"
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
            {chiefsInfo.map((item, index) => (
              <SwiperSlide key={index} className="w-[400px]">
                <CarouselItem
                  title={item.title}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  lastName={item.lastName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center  w-1/3 mx-auto">
        <div className={`flex md:relative absolute left-1/4 swiper-prev-${id}`}>
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
          className={`flex md:relative absolute right-1/4 swiper-next-${id}`}
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
