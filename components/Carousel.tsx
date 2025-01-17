"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { cn, investmentABI } from "../lib/utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ethers } from "ethers";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useBreakpoint } from "~/hooks/useBreakpoints";
import "swiper/css/navigation";

interface CarouselItemProps {
  title: string;
  image: string;
  status: string;
  totalInvestment: number;
  address: string;
  className?: string;
}

const CarouselItem = ({
  title,
  image,
  status,
  totalInvestment,
  address,
  className,
}: CarouselItemProps) => {
  const [completion, setCompletion] = useState(0);
  console.log("Completion: ", String(completion));
  useEffect(() => {
    const readBC = async () => {
      try {
        const provider = new ethers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_ALCHEMY_URL_ID
        );
        const contract = new ethers.Contract(address, investmentABI, provider);

        let totalInvested = await contract.totalSupply();
        setCompletion(
          Number(
            ((Number(totalInvested) / 10 ** 6 / totalInvestment) * 100).toFixed(
              2
            )
          )
        );
      } catch (error) {}
    };

    readBC();
    return () => {};
  }, []);

  return (
    <Link
      className={cn("flex flex-col w-full  bg-progressBackground ", className)}
      href={`${process.env.NEXT_PUBLIC_PLATFORM_URL}/investment/${address}`}
    >
      <div
        className="cursor-pointer w-[320px] md:w-[360px]  min-h-[394px] relative px-6 flex rounded-t-md rounded-b-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={cn(
            "flex flex-col  justify-end items-center  w-full  gap-3  "
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
            <div className="flex ">Progress: {completion}%</div>
          </div>
          <div className="flex z-0 absolute w-full min-h-[200px] rounded-b-lg bg-[url('../public/projects/car-gradient.svg')] bg-cover"></div>
        </div>
        <div className="absolute bottom-0 left-0 z-10 flex h-3 w-full rounded-b-md bg-[#DCDCDC]">
          <div
            className={cn(
              " bg-progressHighlight",
              completion == 100 ? "rounded-b-md" : "rounded-bl-md"
            )}
            style={{
              width: `${completion}%`,
            }}
          ></div>
        </div>
      </div>
    </Link>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
  items?: any;
}

const Carousel: FC<CarouselProps> = ({ id, className, items }) => {
  const { isAboveMd } = useBreakpoint("md");

  return (
    <section className={cn("flex flex-col gap-8 md:ml-[209px]", className)}>
      <div className="flex md:flex-row flex-col gap-12 w-full">
        <div className="flex flex-col py-6 md:pt-[72px] gap-8 w-full  md:px-0 px-6 ">
          <h3 className="uppercase font-light">
            Our <span className="font-medium">ongoing</span>
            <br className="hidden md:block" /> projects.
          </h3>
          <p>
            Made with passion and a lot of attention to detail. <br />
            Browse our current range of products.
          </p>
          <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
            <a className="uppercase dark:border-primaryGreen dark:text-primaryGreen dark:hover:text-white dark:hover:bg-primaryGreen hover:text-white hover:bg-primaryGreen border-2 py-1 px-8 text-sm self-start rounded-md text-primaryGreen">
              Launch app
            </a>
          </Link>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper "
            spaceBetween={35}
            centeredSlides={true}
            slidesPerGroupSkip={2}
            slidesPerView={isAboveMd ? 2 : "auto"}
            // pagination={{ clickable: true }}
            // navigation={true}
            pagination={{
              clickable: true,
              //el: `.swiper-pagination-${id}`,
              dynamicBullets: true,
            }}
            // navigation={{
            //   nextEl: `.swiper-next-${id}`,
            //   prevEl: `.swiper-prev-${id}`,
            // }}
            navigation
            updateOnWindowResize
            observer
            observeParents
            initialSlide={1}
            // loop={true}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="">
                <CarouselItem
                  title={item.basicInvestment.car.basicInfo.title}
                  image={item.basicInvestment.car.basicInfo.cover.url}
                  status={item.basicInvestment.investmentStatus}
                  totalInvestment={item.basicInvestment.totalInvestment}
                  address={item.address}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="flex gap-6 justify-center items-center  md:w-1/3 mx-auto">
            <div
              className={`flex relative disabled:bg-red-200 swiper-prev-${id}`}
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
            <div className={`flex relative swiper-next-${id}`}>
              <Image
                src="/icons/pagination-next.svg"
                width={20}
                height={15}
                alt="Next"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
