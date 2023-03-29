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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HowItWorks = () => {
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
      <section className="w-full mx-auto max-w-7xl flex flex-col items-center">
        <div className="flex flex-col  w-full relative items-center justify-center bg-[url('/headers/how-it-works.jpg')] bg-cover bg-top bg-no-repeat min-h-[530px]">
          <div className="flex flex-col z-10 w-1/3 items-center justify-center">
            <h3 className="text-white text-center">
              <span className="font-bold">Invest in your dream</span>
              <br />
              in four steps
            </h3>
            <p className="text-white text-center">
              You are four miles away from achieving the experience you have
              dreamed your whole life. Keep it going!
            </p>
          </div>
          <div className="bg-black/70 w-full absolute h-full z-1" />
        </div>
      </section>
      <section className="relative -mt-24 px-24 max-w-7xl mx-auto">
        <div className="bg-white  rounded-md p-12">
          <Tab.Group>
            <Tab.List className="flex p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 border-b text-md font-medium leading-5 text-black",
                      "  focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white ring-transparent border-b-4 border-black"
                        : "text-tabInactive hover:bg-black/5 hover:border-b-4 hover:border-black hover:text-black"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    " bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3">
                        <section className="flex gap-24 w-full my-24">
                          <div className="flex flex-col gap-6 w-1/3 max-w-md items-start justify-center">
                            <h3>{post.title}</h3>
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
        <div className="flex flex-col items-center">
          <h3 className="text-black text-4xl">Know our process</h3>
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
        <h3 className="text-center py-12 text-4xl">The Mechanic todo list</h3>
        <HighlightContent
          title={
            <h3>
              <span className="text-primaryGreen">Daydreaming</span> with the
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
              A <span className="text-primaryGreen">legendary community</span>{" "}
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
            <h3 className=" text-primaryGreen text-3xl uppercase tracking-widest">
              We also exist of the grid. Physical footprint!
            </h3>
          }
          image="/media/home-3.jpg"
        >
          <p className="text-ogBlack font-medium">
            And even that is covered by the ACP!
          </p>
          <p className="text-ogBlack">
            Once all the parts have been repaired or replaced, the car can be
            reassembled. This stage requires careful attention to detail, as the
            restorer needs to ensure that all parts are installed correctly and
            in the right order. This includes everything from the engine and
            transmission to the suspension, brakes, and interior components.
          </p>
        </HighlightContent>
      </section>
      <Posts />
      <Banner
        title="
            Feel like you’re
already part of it?"
        titleClassName="text-white"
        subtitle="So don't waste any more time and start living the classics experience now."
        linkLabel="Go to app"
        linkUrl="https://beta.somethinglegendary.io"
        image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
      />
    </>
  );
};

export default HowItWorks;
