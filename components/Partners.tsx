import { useTranslation } from "next-i18next";
import Image from "next/image";
import { PartnerProps } from "../@types/partners";
import { cn } from "../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { useBreakpoint } from "~/hooks/useBreakpoints";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// or only core styles
// import "@splidejs/react-splide/css/core";

const Partners = ({
  title = "Partners who dream with us.",
  theme = "black",
  className,
  posts,
}: PartnerProps) => {
  const { t } = useTranslation("hero");
  const { isAboveMd } = useBreakpoint("md");

  return (
    <section
      className={cn(
        `w-full flex relative flex-col items-center gap-16 md:gap-8 justify-start`,
        theme == "black" ? "bg-dreamBlack" : "bg-white",
        className
      )}
    >
      <div className="flex w-full flex-col pb-12 md:pb-[72px]  gap-6 items-center relative justify-between">
        <h3
          id="partners-heading"
          className={cn(
            "text-xl md:text-2xl uppercase px-2 md:px-0",
            theme == "black" ? "text-white" : "text-primaryGrey"
          )}
        >
          {title}
        </h3>
        <div className="flex flex-col  w-full md:hidden gap-8">
          <div className="flex w-full swiper-wrapper ">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              className="swiper w-full"
              spaceBetween={30}
              slidesPerView="auto"
              // watchOverflow={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: `.swiper-pagination-20`,
              }}
              navigation={{
                enabled: true,
                nextEl: `.swiper-next-20`,
                prevEl: `.swiper-prev-20`,
              }}
              updateOnWindowResize
              observer
              observeParents
              initialSlide={0}

              // loop={true}
            >
              <SwiperSlide className="w-[400px]">
                <div
                  className={cn(
                    "flex  h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/bosch.svg"
                    alt="Bosch"
                    // width={149}
                    // height={36}
                    className="w-[149px]"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div
                  className={cn(
                    "h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/kodak.svg"
                    alt="Kodak"
                    layout="fill"
                    objectFit="contain"
                    // width={64}
                    // height={76}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div
                  className={cn(
                    "h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/porsche.svg"
                    alt="Porshce"
                    // width={149}
                    // height={36}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div
                  className={cn(
                    "h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/stihl.svg"
                    alt="Stihl"
                    // width={149}
                    // height={36}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div
                  className={cn(
                    "h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/wolkswagen.svg"
                    alt="Wolkswagen"
                    // width={60}
                    // height={60}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div
                  className={cn(
                    "h-[200px] w-[200px]",
                    theme == "black" ? "bg-dreamBlack" : "bg-white"
                  )}
                >
                  <Image
                    src="/brand/zeizz.svg"
                    alt="Zeizz"
                    // width={60}
                    // height={60}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex gap-6 justify-center items-center  md:w-1/5 mx-auto">
            <div className={`relative flex cursor-pointer swiper-prev-20`}>
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.45446 8.48242L20.8408 8.48242L20.8408 6.66702L1.45446 6.66702L1.45446 8.48242Z"
                  fill={theme == "black" ? "white" : "black"}
                />
                <path
                  d="M5.92514 0.149999L6.84082 1.47524L1.97963 7.575L6.84082 13.6748L5.92514 15L0.000136324 7.575L5.92514 0.149999Z"
                  fill={theme == "black" ? "white" : "black"}
                />
              </svg>
            </div>
            <div
              className={cn(
                "flex justify-center items-center gap-1  swiper-pagination-20",
                theme == "black" ? "text-white" : "text-black"
              )}
            />
            <div className={`flex relative cursor-pointer swiper-next-20`}>
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3864 6.51758L0 6.51758L-5.09513e-07 8.33298L19.3864 8.33298L19.3864 6.51758Z"
                  fill={theme == "black" ? "white" : "black"}
                />
                <path
                  d="M14.9157 14.85L14 13.5248L18.8612 7.425L14 1.32524L14.9157 1.37549e-07L20.8407 7.425L14.9157 14.85Z"
                  fill={theme == "black" ? "white" : "black"}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row flex-col items-center gap-24 justify-between">
          <Image src="/brand/bosch.svg" alt="Bosch" width={149} height={36} />
          <Image src="/brand/kodak.svg" alt="Kodak" width={64} height={76} />
          <Image
            src="/brand/porsche.svg"
            alt="Porshce"
            width={149}
            height={36}
          />
          <Image src="/brand/stihl.svg" alt="Stihl" width={149} height={36} />
          <Image
            src="/brand/wolkswagen.svg"
            alt="Wolkswagen"
            width={60}
            height={60}
          />
          <Image src="/brand/zeizz.svg" alt="Zeizz" width={72} height={72} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
