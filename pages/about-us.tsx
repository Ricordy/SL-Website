import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Header from "../public/headers/about.jpg";
import How from "../public/media/about-1.jpg";
import Play from "../public/icons/play.svg";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import { PostItemProps } from "../@types/post";

const AboutUs = () => {
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
  return (
    <div className="">
      <div className="flex w-full gap-12 mx-auto  items-center flex-col max-w-screen-lg">
        <div className="flex flex-col items-center pt-12 gap-3">
          <h3 className="font-light uppercase">A Legendary Oil Change!</h3>
          <h5 className="uppercase font-medium">
            Know what&apos;s under the hood
          </h5>
        </div>
        <section className="flex w-full relative justify-center bg-[url('/headers/about.jpg')] bg-cover bg-right bg-no-repeat min-h-[530px]">
          <div className="absolute z-10 self-center">
            <Image alt="Play" src={Play} />
          </div>
        </section>
        <section className="flex gap-24 w-full my-12">
          <Image alt="How we became something" src={How} />
          <div className="flex flex-col gap-6 w-1/2 max-w-md items-start justify-center">
            <h3>How we became something.</h3>
            <p>
              The real deal was like, João invested in classic cars on a
              personal basis and formed friendships with the owner of True
              Legend, João Dias. Gonçalo was a financial mediator and the
              suggestion to invest in classic cars was conditioned by the volume
              of initial investment (
              <span className="font-medium">
                financial power and market know-how
              </span>
              ) and this catapulted to the creation of a service that could
              offer the target with less resources (time, money or knowledge)
              the opportunity to participate in an exclusive project!
            </p>
          </div>
        </section>
        <Partners
          title="ENTITIES THAT TRUST US"
          bg="bg-white"
          titleColor="text-primaryGrey"
        />
        <Carousel id="1" />
        <Carousel id="2" />
        <section className="flex flex-col min-h-[658px] justify-end pb-16 items-center gap-6 relative bg-[url('../public/media/about-2.jpg')] bg-cover bg-center">
          <div className="flex flex-col gap-3 pb-12">
            <h3 className="text-white uppercase text-center tracking-widest">
              Our values are like
              <br />
              wedding vows
            </h3>
            <h5 className="text-white uppercase text-xs font-light">
              They&apos;re made to be unbroken and forever loyal.
            </h5>
          </div>
          <div className="flex gap-6 justify-around px-12">
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl uppercase">Transparency</h3>
              <p className="text-center">
                We walk side by side with our investors and share the dream in
                real time so that every detail of the process counts!
              </p>
            </div>
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl uppercase">Commitment</h3>
              <p className="text-center">
                100% safe investment, we value our community above everything
                else and the word of something legendary is the core business of
                our project.
              </p>
            </div>
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl uppercase">Quality</h3>
              <p className="text-center">
                We only work with the best partners, whether they are workshop
                mechanics, investment brokers or auditors.
              </p>
            </div>
          </div>
        </section>
        <Banner
          title="Why do we 
believe in safety?"
          subtitle="Imagine that our security tools are like a state-of-the-art safe. In our case, you don't need to imagine, they really are."
          linkLabel="Security Measures"
          linkUrl="/security"
          image="bg-[url('/banners/about-safety.jpg')]"
          certificates={true}
          contentPadding={true}
        />
        <Posts
          className="py-24"
          buttonMoreLink="/learn"
          buttonMoreText="See more"
          posts={posts}
          title="Learn more"
          titleCentered={true}
        />
      </div>
      <Contact title="Something in your legendary mind?" />
    </div>
  );
};

export default AboutUs;
