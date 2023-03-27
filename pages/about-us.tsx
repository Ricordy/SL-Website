import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Header from "../public/headers/about.jpg";
import How from "../public/media/about-1.jpg";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Posts from "../components/Posts";

const AboutUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex w-full gap-12 mx-auto items-center flex-col max-w-7xl">
        <h3 className="font-light">A Legendary Oil Change!</h3>
        <h5>Know what&apos;s under the hood</h5>
        <section className="flex w-full">
          <Image alt="Video" src={Header} />
        </section>
        <section className="flex gap-24 w-full my-24">
          <Image alt="How we became something" src={How} />
          <div className="flex flex-col gap-6 w-1/2 max-w-md items-start justify-center">
            <h3>How we became something.</h3>
            <p>
              The real deal was like, João invested in classic cars on a
              personal basis and formed friendships with the owner of True
              Legend, João Dias. Gonçalo was a financial mediator and the
              suggestion to invest in classic cars was conditioned by the volume
              of initial investment (
              <span className="font-semibold">
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
        <section className="flex flex-col min-h-[658px] justify-end pb-24 items-center gap-6 relative bg-[url('../public/media/about-2.jpg')] bg-cover bg-center">
          <div className="flex flex-col pb-12">
            <h3 className="text-white text-center tracking-widest">
              Our values are like
              <br />
              wedding vows
            </h3>
            <h5 className="text-white uppercase text-xs font-light">
              They&apos;re made to be unbroken and forever loyal.
            </h5>
          </div>
          <div className="flex gap-6 justify-around px-24">
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl">Transparency</h3>
              <p className="text-center">
                We walk side by side with our investors and share the dream in
                real time so that every detail of the process counts!
              </p>
            </div>
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl">Commitment</h3>
              <p className="text-center">
                100% safe investment, we value our community above everything
                else and the word of something legendary is the core business of
                our project.
              </p>
            </div>
            <div className="flex flex-col rounded-md w-1/3 bg-white gap-6 p-6 items-center">
              <h3 className="text-2xl">Quality</h3>
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
          titleClassName="text-white"
          subtitle="Imagine that our security tools are like a state-of-the-art safe. In our case, you don't need to imagine, they really are."
          linkLabel="Security Measures"
          linkUrl="/security"
          image="bg-[url('/banners/about-safety.jpg')]"
        />
        <Posts />
      </div>
    </div>
  );
};

export default AboutUs;
