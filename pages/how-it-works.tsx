import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import How from "../public/media/about-1.jpg";
import Play from "../public/icons/play.svg";
import Link from "next/link";
import HighlightContent from "../components/HighlightContent";
import Posts from "../components/Posts";
import Banner from "../components/Banner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HowItWorks = () => {
  let [categories] = useState({
    "01. Launch the App": [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        content: (
          <section className="flex gap-24 w-full my-24">
            <Image alt="How we became something" src={How} />
            <div className="flex flex-col gap-6 w-1/2 max-w-md items-start justify-center">
              <h3>Launch the App</h3>
              <p>
                Connect your wallet! Launch the app, connect your wallet and
                choose your legendary classic! As easy as it sounds, and if you
                don&apos;t have one, we show you how to create one.
              </p>
              <Link href="http://beta.somethinglegendary.io">
                <a className="text-white bg-black dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-black rounded-md px-8 py-1 self-start">
                  Go to app
                </a>
              </Link>
            </div>
          </section>
        ),
      },
    ],
    "02.Buy an entry NFT": [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        content: <h3>buy nft</h3>,
      },
    ],
    "03.Select a project": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
        content: <h3>select project</h3>,
      },
    ],
    "04.Withdraw investment": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
        content: <h3>withdraw</h3>,
      },
    ],
  });

  return (
    <>
      <section className="w-full mx-auto max-w-7xl flex flex-col items-center">
        <div className="flex flex-col  w-full relative items-center justify-center bg-[url('/headers/how-it-works.jpg')] bg-cover bg-top bg-no-repeat min-h-[530px]">
          <div className="flex flex-col z-10">
            <h3 className="text-white">Invest in your dream in four steps</h3>
            <p className="text-white">
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
                      "w-full py-2.5 border-b text-sm font-medium leading-5 text-black",
                      "ring-white ring-opacity-60  focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow border-b-2 border-black"
                        : "text-tabInactive hover:bg-black/5 hover:border-b-2 hover:border-black hover:text-black"
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
                        {post.content}

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
