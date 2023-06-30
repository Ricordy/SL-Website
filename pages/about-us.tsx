import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Header from "../public/headers/about.jpg";
import How from "../public/media/about-1.jpg";
import Play from "../public/icons/play.svg";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Carousel from "@/components/about-us/Carousel";
import Contact from "../components/Contact";
import { PostItemProps, HygraphPostProps } from "../@types/post";
import TrophyCarousel from "~/components/about-us/TrophyCarousel";
import Slider from "~/components/about-us/Slider";

const AboutUs = () => {
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
  return (
    <div className="">
      <div className="flex w-full gap-[132px] mx-auto  items-center flex-col max-w-[1210px]">
        <div className="flex flex-col w-full items-center pt-[52px] gap-4">
          <h3 className="font-light text-4xl uppercase">
            A Legendary Oil Change!
          </h3>
          <h5 className="uppercase text-2xl font-medium">
            Know what&apos;s under the hood
          </h5>
          <section className="flex w-full rounded-lg relative justify-center bg-[url('/headers/about.jpg')] bg-cover bg-right bg-no-repeat min-h-[530px]">
            <div className="absolute z-10 self-center">
              <Image alt="Play" src={Play} />
            </div>
          </section>
        </div>

        <section className="flex gap-24 w-full">
          <Image alt="How we became something" src={How} />
          <div className="flex flex-col gap-8 w-1/2 max-w-md items-start justify-center">
            <h3 className="uppercase">How we became something.</h3>
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
      </div>
      <div className="flex flex-col gap-[132px] py-[132px]">
        <Carousel id="1" />
        <TrophyCarousel id="2" />
      </div>
      <div className="flex flex-col w-full gap-[132px] mx-auto  items-center max-w-[1210px]">
        <section className="flex flex-col justify-end py-[132px] rounded-lg items-center gap-[52px] relative bg-[url('../public/media/about-2.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-4xl uppercase text-center tracking-widest">
              Our values are like
              <br />
              wedding vows
            </h3>
            <h5 className="text-white uppercase text-xs font-light">
              They&apos;re made to be unbroken and forever loyal.
            </h5>
          </div>
          <div className="flex md:flex-row flex-col gap-6 justify-around px-16">
            <div className="flex flex-col rounded-md sm:w-1/3 bg-white gap-4 p-8 px-10 items-center">
              <h3 className="text-2xl uppercase">Transparency</h3>
              <p className="text-center">
                We walk side by side with our investors and share the dream in
                real time so that every detail of the process counts!
              </p>
            </div>
            <div className="flex flex-col rounded-md sm:w-1/3 bg-white gap-4 p-8 px-10 items-center">
              <h3 className="text-2xl uppercase">Commitment</h3>
              <p className="text-center">
                100% safe investment, we value our community above everything
                else and the word of something legendary is the core business of
                our project.
              </p>
            </div>
            <div className="flex flex-col rounded-md sm:w-1/3 bg-white gap-4 p-8 px-10 items-center">
              <h3 className="text-2xl uppercase">Quality</h3>
              <p className="text-center">
                We only work with the best partners, whether they are workshop
                mechanics, investment brokers or auditors.
              </p>
            </div>
          </div>
        </section>
        <Banner
          title={
            <h3 className="text-white uppercase">
              Why do we
              <br />
              believe in safety?
            </h3>
          }
          subtitle="Imagine that our security tools are like a state-of-the-art safe. In our case, you don't need to imagine, they really are."
          linkLabel="Security Measures"
          linkUrl="/security"
          image="bg-[url('/banners/about-safety.jpg')]"
          certificates={true}
          contentPadding={true}
          rounded={true}
        />
        <Posts
          buttonMoreLink="/learn"
          buttonMoreText="See more"
          buttonMoreTextColor="text-black hover:text-white"
          buttonMoreBorderColor="border-black"
          buttonMoreBgColor="hover:bg-black"
          posts={posts}
          title="Learn more"
          titleCentered={true}
        />
      </div>

      <Contact
        className="mt-[132px]"
        title="Something in your legendary mind?"
      />
    </div>
  );
};

export default AboutUs;
