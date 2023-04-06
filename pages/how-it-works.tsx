import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import How from "../public/media/about-1.jpg";
import Play from "../public/icons/play.svg";
import Link from "next/link";
import HighlightContent from "../components/HighlightContent";
import Posts from "../components/Posts";
import Banner from "../components/Banner";
import Carousel from "../components/how-it-works/Carousel";
import { classNames } from "../lib/utils";
import { PostItemProps } from "../@types/post";
import Navbar from "../components/Navbar";

const HowItWorks = () => {
  const posts: PostItemProps[] = [
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-1.jpg",
      slug: "lorem-1",
      children: (
        <p className="text-ogBlack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-2.jpg",
      slug: "lorem-2",
      children: (
        <p className="text-ogBlack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-3.jpg",
      slug: "lorem-3",
      children: (
        <p className="text-ogBlack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
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
            <p>
              The user clicks on launch App and enters the platform, then clicks
              on connect wallet for which he must have one to be able to
              connect, if not, redirect to create one. Don&apos;t know how to
              create one? Click this link!
            </p>
            <Link href="http://beta.somethinglegendary.io">
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Go to app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "02.Buy an entry NFT": [
      {
        id: 1,
        title: "Buy an entry NFT",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p>
              You&apos;re already connected and now you can view all over the
              platform! To be able to interact with it and start investing, you
              have to buy the entry ticket (NFT). After completing this process,
              you&apos;re now part of the Something Legendary community and can
              invest in your dream classic car.
            </p>
            <Link href="http://beta.somethinglegendary.io">
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Go to app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "03.Select a project": [
      {
        id: 1,
        title: "Select a project",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p>
              Now that you have visibility on the ON GOING projects, it remains
              to choose which project you want to be part of and the amount you
              want to invest. Choose wisely, don&apos;t let your personal tastes
              influence your margins... or do, its your choice.
            </p>
            <Link href="http://beta.somethinglegendary.io">
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Go to app
              </a>
            </Link>
          </>
        ),
      },
    ],
    "04.Withdraw investment": [
      {
        id: 1,
        title: "Withdraw investment",
        image: "/media/about-1.jpg",
        content: (
          <>
            <p>
              Have you enjoyed the trip yet? Then it&apos;s time to withdraw
              your investment funds! We hope that the entire follow-up of the
              process has been to your liking. If you really liked the
              destination, get ready to choose another one.
            </p>
            <Link href="http://beta.somethinglegendary.io">
              <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                Go to app
              </a>
            </Link>
          </>
        ),
      },
    ],
  });

  return (
    <>
      <section className="w-full mx-auto min-h-screen gap-48  flex flex-col justify-start items-center bg-[url('/headers/how-it-works.jpg')] bg-cover bg-top bg-no-repeat">
        <Navbar />
        <div className="flex flex-col  w-full relative items-center justify-center">
          <div className="flex flex-col z-10 md:w-1/3 gap-6 items-center justify-center">
            <h3 className="text-white font-light text-4xl uppercase text-center">
              <span className="font-medium">Invest in your dream</span>
              <br />
              in four steps
            </h3>
            <p className="text-white text-center">
              You are four miles away from achieving the experience you have
              dreamed your whole life. Keep it going!
            </p>
          </div>
        </div>

        <div className="bg-black/70 w-full absolute h-full z-0" />
      </section>
      <section className="relative -mt-72 z-20 px-24 max-w-7xl mx-auto">
        <div className="bg-white  rounded-md p-12 shadow-md">
          <Tab.Group>
            <Tab.List className="flex p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 font-light  border-b text-lg  leading-5 text-black",
                      "  focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white font-medium ring-transparent border-b-4 border-black"
                        : "text-tabInactive hover:bg-black/5 hover:border-b-4 hover:border-black hover:text-black"
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
                        <section className="flex gap-24 w-full mt-24">
                          <div className="flex flex-col gap-6 w-1/3 max-w-md items-start justify-center">
                            <h3 className="uppercase">{post.title}</h3>
                            {post.content}
                          </div>
                          <Image
                            alt={post.title}
                            src={post.image}
                            width={592}
                            height={566}
                          />
                        </section>

                        {/* <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
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
      </section>
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center pt-24 pb-6">
          <h3 className="text-black text-4xl uppercase">Know our process</h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do{" "}
          </p>
        </div>
        <section className="flex w-full relative justify-center bg-[url('/headers/about.jpg')] bg-cover bg-right bg-no-repeat min-h-[530px]">
          <div className="absolute z-10 self-center">
            <Image alt="Play" src={Play} />
          </div>
        </section>
      </section>
      <section className="pt-24">
        <Carousel id="1" />
      </section>
      <section className="flex flex-col gap-24">
        <h3 className="text-center py-12 text-4xl uppercase">
          The Mechanic todo list
        </h3>
        <HighlightContent
          title={
            <h3 className="uppercase">
              <span className="text-primaryGreen">Daydreaming</span> with the
              <br />
              process <span className="text-primaryGreen">24/7</span>.
            </h3>
          }
          image="/media/home-1.jpg"
        >
          <p className="text-ogBlack">
            Have you considered the possibility of monitoring the project in
            real time? We know it didn&apos;t, because until today it
            hadn&apos;t been done yet! Something offers you the possibility to
            follow the entire restoration directly from our garage! You are part
            of our restoration and we want you to give your opinion on each step
            taken.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black text-3xl uppercase tracking-widest">
              A <span className="text-primaryGreen">legendary community</span>
              <br />
              is waiting for you.
            </h3>
          }
          image="/media/home-2.jpg"
          reverse={true}
        >
          <p className="text-ogBlack">
            If you thought you were alone in this world, we introduce you to
            thousands of people interested in the world of classics whose vision
            of the process is similar to yours. The passion for the classics has
            never been so close and we are open to any enthusiast whose opinion
            deserves to be shared.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className="text-3xl uppercase tracking-widest">
              The distance that{" "}
              <span className=" text-primaryGreen ">unites us</span>, from
              digital to physycal events.
            </h3>
          }
          image="/media/home-3.jpg"
        >
          <p className="text-ogBlack">
            We are closer than you might think, we travel the world in the
            biggest classic car events, in addition to being ambitious for
            constant knowledge, we make a point of knowing the latest trends in
            the market. Do you want to know where we&apos;re going to be in
            2023? Check out our list of events!
          </p>
        </HighlightContent>
      </section>
      <Posts
        className="py-24"
        title="Learn More"
        titleCentered={true}
        posts={posts}
        buttonMoreLink="/learn"
        buttonMoreText="See More"
      />
      <Banner
        title="
            Feel like you’re
already part of it?"
        subtitle="So don't waste any more time and start living the classics experience now."
        linkLabel="Go to app"
        linkUrl="https://beta.somethinglegendary.io"
        image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
      />
    </>
  );
};

export default HowItWorks;
