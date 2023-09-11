import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import How from "../public/media/about-1.jpg";
import Play from "../public/icons/play.svg";
import Link from "next/link";
import HighlightContent from "../components/HighlightContent";
import Posts from "../components/Posts";
import Banner from "../components/Banner";
import Carousel, {
  CarouselItem,
  items,
} from "../components/how-it-works/Carousel";
import { classNames } from "../lib/utils";
import { HygraphPostProps, PostItemProps } from "../@types/post";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HowItWorks = () => {
  const posts: HygraphPostProps[] = [
    {
      basic: {
        title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      },
      image: {
        url: "/posts/post-1.jpg",
      },
      slug: "lorem-1",
      description: {
        html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      },
    },
    {
      basic: {
        title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      },
      image: {
        url: "/posts/post-2.jpg",
      },
      slug: "lorem-2",
      description: {
        html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      },
    },
    {
      basic: {
        title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      },
      image: {
        url: "/posts/post-3.jpg",
      },
      slug: "lorem-3",
      description: {
        html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      },
    },
  ];
  let [categories] = useState({
    "01. Launch the App": [
      {
        id: 1,
        title: "Launch the App",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p className="pb-10">
              Launch the app, enter the platform, connect your wallet and start
              investing.
            </p>
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
              <a className="text-white  bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Launch app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "02. Buy a Membership Card": [
      {
        id: 1,
        title: "Buy a Membership Card",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p className="pb-10">
              Now you can browse the platform. To be able to interact with it
              and start investing, you must first buy a Membership Card. After
              completing this process, you&apos;re now part of the Something
              Legendary community and can now invest in your dream classic car.
            </p>
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Launch app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "03. Select a project": [
      {
        id: 1,
        title: "Select a project",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p className="pb-10">
              Now that you have access to the Ongoing Projects, the next step is
              to select the project you wish to join and determine the amount
              you&apos;d like to invest. Make your decision thoughtfully,
              considering the potential impact on your returns. Or choose a car
              you like... it&apos;s up to you!
            </p>
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Launch app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "04. Withdraw investment": [
      {
        id: 1,
        title: "Withdraw investment",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p className="pb-10">
              Have you had a good time on the trip? If you have, it&apos;s time
              to withdraw your investment funds! We hope you&apos;ve been
              pleased with how everything&apos;s been going. And if you really
              enjoyed the destination, get ready to pick another one.
            </p>
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Launch app
              </a>
            </Link>
          </>
        ),
      },
    ],
  });

  return (
    <>
      <section className="w-full mx-auto min-h-screen gap-[132px]  flex flex-col justify-start items-center bg-[url('/headers/how-it-works.jpg')] md:bg-contain bg-cover bg-top bg-no-repeat">
        <Navbar />
        <div className="flex flex-col  w-full relative items-center px-6 md:px-0">
          <div className="flex flex-col z-10 md:w-1/2 w-full gap-4">
            <h3 className="text-white font-normal w-full text-5xl uppercase text-center">
              <span className="font-semibold ">Invest in your dream</span>
              <br />
              in four steps
            </h3>
            <p className="text-white text-center">
              You are four miles away from achieving the experience you have
              <br />
              dreamed your whole life. Keep it going!
            </p>
          </div>
        </div>
        <section
          id="stepsSection"
          className="relative z-20 max-w-[1210px] mx-auto "
        >
          <div className="bg-white  rounded-md p-[52px] shadow-md md:block hidden">
            <Tab.Group>
              <Tab.List className="flex">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-4 font-normal tracking-wide  border-b text-2xl  leading-5 text-black whitespace-nowrap",
                        "  focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white font-medium ring-transparent border-b-4 border-black"
                          : "text-tabInactive hover:bg-black/5 hover:border-b-4 text-xl hover:border-black hover:text-black"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-0">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      " bg-white p-1",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li key={post.id} className="relative rounded-md p-3">
                          <section className="flex gap-24 w-full mt-[52px]">
                            <div className="flex flex-col gap-8 w-1/3  items-start justify-center">
                              <h3 className="uppercase">{post.title}</h3>
                              {post.content}
                            </div>
                            <Image
                              alt={post.title}
                              src={post.image}
                              width={592}
                              height={394}
                            />
                          </section>

                          {/* <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                          )}
                        /> */}
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="bg-white   rounded-md md:p-[52px] shadow-md md:hidden flex flex-col gap-10 pb-[32px]">
            <div className="k max-w-[100vw] w-screen  swiper-wrapper ">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                className="swiper w-full"
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination={{
                  clickable: true,
                  el: `.swiper-pagination-${5000}`,
                }}
                navigation={{
                  nextEl: `.swiper-next-${5000}`,
                  prevEl: `.swiper-prev-${5000}`,
                }}
                updateOnWindowResize
                observer
                observeParents
                initialSlide={0}
              >
                {Object.values(categories).map((posts, idx) => (
                  <SwiperSlide key={idx}>
                    <div key={idx} className="w-screen  px-6">
                      {posts.map((post) => (
                        <div key={post.id} className="relative rounded-md p-3 ">
                          <section className="flex flex-col-reverse gap-24 w-full mt-[52px] ">
                            <div className="flex flex-col gap-8   items-start justify-center">
                              <h3 className="uppercase text-left">
                                {`0${idx + 1}.`} {post.title}
                              </h3>
                              <div className="text-justify">{post.content}</div>
                            </div>
                            <Image
                              alt={post.title}
                              src={post.image}
                              width={592}
                              height={394}
                              className=" rounded-md"
                            />
                          </section>

                          {/* <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                          )}
                        /> */}
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex gap-6 justify-center items-center  w-1/3 mx-auto  ">
              <div className={`flex absolute left-1/4 swiper-prev-${5000}  `}>
                <Image
                  src="/icons/pagination-prev.svg"
                  width={20}
                  height={15}
                  alt="Previous"
                />
              </div>
              <div
                className={`flex justify-center items-center gap-1 text-black swiper-pagination-${5000}`}
              />
              <div className={`flex absolute right-1/4 swiper-next-${5000}`}>
                <Image
                  src="/icons/pagination-next.svg"
                  width={20}
                  height={15}
                  alt="Next"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-black/70 w-full absolute h-[816px] z-0" />
      </section>

      <section
        id="knowProcess"
        className="w-full max-w-[1210px] pt-24 mx-auto flex flex-col items-center gap-6 "
      >
        <div className="flex flex-col items-center gap-4  pb-8">
          <h3 className="text-black text-4xl uppercase md:text-start text-center">
            Know our process
          </h3>
          <p className="text-black px-4 md:px-0 text-center">
            The most important rules manual to achieve the dream.
          </p>
        </div>
        <section className="flex w-full relative justify-center bg-[url('/headers/about.jpg')] bg-cover bg-right bg-no-repeat min-h-[530px]">
          <div className="absolute z-10 self-center">
            {/* <Image alt="Play" src={Play} /> */}
          </div>
        </section>
      </section>
      <section className="py-[52px]  mx-auto md:hidden block self-center text-black text-center ">
        <Carousel id="12" slidesPerView={1} spaceBetween={0} />
      </section>
      <section className="py-[52px] w-full max-w-[1210px] mx-auto hidden md:block">
        <Carousel id="1" slidesPerView={3} spaceBetween={100} />
      </section>
      <section className="flex flex-col">
        <h3 className="text-center py-12 text-4xl uppercase">
          What to expect from us
        </h3>
        <div className="flex flex-col gap-24">
          <HighlightContent
            title={
              <h3 className="uppercase font-medium text-center md:text-start ">
                <span className="text-primaryGreen">Daydreaming</span> with
                <br />
                the process <span className="text-primaryGreen">24/7</span>.
              </h3>
            }
            image="/media/home-1.jpg"
          >
            <p className="text-ogBlack md:max-w-[500px] p-6 md:p-0 text-justify md:text-left ">
              Have you considered the possibility of monitoring the project in
              real time? We know you haven&apos;t, because until today it
              hasn&apos;t been done yet! Something Legendary offers you the
              possibility to follow the entire restoration directly from our
              garage! You are part of our restoration and we want you to give
              your opinion on each step taken.
            </p>
          </HighlightContent>
          <div className=" hidden md:block">
            <HighlightContent
              title={
                <h3 className=" text-black text-3xl uppercase tracking-widest md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
                  A{" "}
                  <span className="text-primaryGreen">legendary community</span>
                  <br />
                  is waiting for you.
                </h3>
              }
              image="/media/home-2.jpg"
              reverse={true}
            >
              <p className="text-ogBlack md:max-w-[500px] p-6 md:p-0 text-justify md:text-left  ">
                If you thought you were alone in this world, we introduce you to
                thousands of people interested in the world of classics whose
                vision of the process is similar to yours. The passion for
                classics has never been so close, and we are open to any
                enthusiast deserving of having their opinion shared.
              </p>
            </HighlightContent>
          </div>
          <div className=" md:hidden block">
            <HighlightContent
              title={
                <h3 className=" text-black text-3xl uppercase tracking-widest md:max-w-[500px] p-6 md:p-0  md:text-left">
                  A{" "}
                  <span className="text-primaryGreen">legendary community</span>
                  <br />
                  is waiting for you.
                </h3>
              }
              image="/media/home-2.jpg"
            >
              <p className="text-ogBlack md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
                If you thought you were alone in this world, we introduce you to
                thousands of people interested in the world of classics whose
                vision of the process is similar to yours. The passion for
                classics has never been so close and we are open to any
                enthusiast whose opinion deserves to be shared.
              </p>
            </HighlightContent>
          </div>
          <HighlightContent
            title={
              <h3 className="text-3xl uppercase tracking-widest md:max-w-[500px] p-6 md:p-0  md:text-left">
                The distance that <br />
                <span className=" text-primaryGreen ">unites us</span>, from
                digital <br /> to physycal events.
              </h3>
            }
            image="/media/home-3.jpg"
          >
            <p className="text-ogBlack md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
              We are closer than you might think, we travel the world in the
              biggest classic car events, in addition to being ambitious for
              constant knowledge, we make a point of knowing the latest trends
              in the market.
            </p>
            {/* <p className="text-ogBlack">
              Do you want to know where we&apos;re going to be in 2023? Check
              out our list of events!
            </p> */}
          </HighlightContent>
        </div>
      </section>
      <Posts
        className="py-24"
        title="Learn More"
        titleCentered={true}
        posts={posts}
        buttonMoreLink="/learn"
        buttonMoreText="See More"
        buttonMoreTextColor="text-black hover:text-white"
        buttonMoreBorderColor="border-black"
        buttonMoreBgColor="hover:bg-black"
      />
      <div className=" hidden md:block">
        <Banner
          title="
            Feel like you’re
already part of it?"
          subtitle="So don't waste any more time and start living the classics experience now."
          linkLabel="Launch app"
          linkUrl="https://beta.somethinglegendary.io"
          image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
        />
      </div>
    </>
  );
};

export default HowItWorks;
