import Hero from "../components/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Partners from "../components/Partners";
import Image from "next/image";
import HighlightContent from "../components/HighlightContent";
import Link from "next/link";
import Accordion from "../components/Accordion";
import Posts from "../components/Posts";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import { PostItemProps } from "../@types/post";

export default function Home() {
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
      <Hero />
      <Partners className="pt-12 pb-24" />
      <div className="flex flex-col -mt-12 gap-24">
        <HighlightContent
          title={<h3>Your dream project,</h3>}
          subtitle={
            <h3 className=" text-primaryGreen text-3xl uppercase tracking-widest">
              without leaving home.
            </h3>
          }
          image="/media/home-1.jpg"
          buttonLink="/about-us"
          buttonLabel="About Us"
        >
          <p className="text-ogBlack">
            The opportunity to travel across borders, we know it doesn&apos;t
            seem real but imagine the process of restoring a classic directly
            from your sofa in the living room, accompanying this restoration and
            still having the chance to profit from it.{" "}
            <span className="font-semibold">
              That&apos;s what we do, with distinction.
            </span>
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black text-3xl uppercase tracking-widest">
              The <span className="text-primaryGreen">only digital</span>
            </h3>
          }
          subtitle={
            <h3 className="text-black text-3xl uppercase tracking-widest">
              <span className="text-primaryGreen">workshop</span> in the world!
            </h3>
          }
          image="/media/home-2.jpg"
          buttonLink="/how-it-works"
          buttonLabel="How it works"
          reverse={true}
        >
          <p className="text-ogBlack">
            Imagine following the entire process of restoring the classic of
            your dreams live from the workshop where all the magic happens!
            Restoring a classic car is a labor of love that requires skill,
            patience, and dedication and we want you to{" "}
            <span className="font-bold">feel it at your place</span>.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black text-3xl uppercase tracking-widest">
              The <span className="text-primaryGreen">only risk</span> is on the
            </h3>
          }
          subtitle={
            <h3 className=" text-black text-3xl uppercase tracking-widest">
              car&apos;s paintwork!
            </h3>
          }
          image="/media/home-3.jpg"
          buttonLink="/security"
          buttonLabel="Security Measures"
        >
          <p className="text-ogBlack font-medium">
            And even that is covered by the ACP!
          </p>
          <p className="text-ogBlack">
            Classic cars have a timeless appeal and a limited supply, which
            means that their value may appreciate over time. Additionally,
            classic cars can be enjoyed and used while they appreciate in value,
            which is not always the case with other types of investments.
          </p>
        </HighlightContent>
      </div>
      <section className="bg-[url('../public/map.svg')] bg-contain bg-no-repeat bg-center flex justify-center items-center my-36 min-h-[587px] gap-24">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col w-1/2 items-center gap-3">
            <h3 className="text-black text-3xl uppercase">
              The classics
              <br /> market{" "}
              <span className="text-primaryGreen">has grown.</span>
            </h3>
            <p className="text-ogBlack">
              And the numbers speak for themselves.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-1/2 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-black text-4xl">$138M</h3>
              <p className="text-center text-ogBlack">
                Most expensive car ever sold.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-black text-4xl">193%</h3>
              <p className="text-ogBlack text-center">10 years grown.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <h3 className="text-black text-4xl">31Bi</h3>
              <p className="text-ogBlack text-center">amount sold in 2020.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <h3 className="text-black text-4xl">6M</h3>
              <p className="text-ogBlack text-center">
                number of classics worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex max-w-screen-lg mx-auto flex-col justify-center items-center gap-6">
        <h3 className="text-black font-medium text-3xl text-center uppercase">
          How to invest in <span className=" font-thin">something</span>
          <br />
          called <span className="font-thin">legendary</span>.
        </h3>
        <p className="text-ogBlack">
          It&apos;s easy. In just 4 steps you start earn your profits.
        </p>
        <div className="flex flex-col md:flex-row gap-3 mt-12 flex-1 relative">
          <div className="flex md:w-1/4 flex-col gap-6 relative p-6 py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[130px] after:left-[132px]">
            <h3 className="text-primaryGreen w-8 text-center text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              1
            </h3>
            <div className="flex flex-col justify-between gap-6 flex-1">
              <h3 className="text-black text-2xl text-center">
                Launch
                <br /> the app
              </h3>
              <div className="flex flex-col self-start flex-1 justify-between">
                <p className="text-ogBlack font-light text-center">
                  Connect your wallet! Launch the app, connect wallet choose
                  your legendary classic
                </p>
                <p className="text-ogBlack font-light text-center">
                  Don&apos;t have wallet?
                </p>
                <Link href="http://www.metamask.io" target="_blank">
                  <a className="text-primaryGreen text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-semibold">
                    Create it
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-6 relative p-6 py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[130px] after:left-[132px]">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              2
            </h3>
            <div className="flex flex-col justify-start gap-6 flex-1">
              <h3 className="text-black text-2xl text-center">
                Buy your
                <br />
                entry ticket
              </h3>
              <div className="flex flex-col self-start flex-1 justify-between">
                <p className="text-ogBlack text-center">
                  Ready to become legendary? Buy your entry ticket!
                </p>

                <Link href="/learn">
                  <a className="text-primaryGreen text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-semibold">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-6 relative p-6 py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[130px] after:left-[138px]">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              3
            </h3>
            <h3 className="text-black text-2xl text-center">
              Select <br />a project
            </h3>
            <div className="flex flex-col self-start flex-1 justify-between">
              <p className="text-ogBlack text-center">
                Choose your legendary classic for something more than just
                watching someone do it for you!
              </p>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-6 bg-primaryGreen p-6 py-12 rounded-md">
            <h3 className="text-primaryGreen  w-8 text-center text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm  z-10">
              4
            </h3>
            <h3 className="text-2xl text-center text-white">
              Withdraw investment
            </h3>
            <div className="flex flex-col gap-6 self-start flex-1 justify-between">
              <p className="text-white">
                Expect the expected! Get a sense of the time margin versus the
                expected profit margin
              </p>

              <Link href="/try">
                <a className="text-slate-100 text-center uppercase border-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black text-xs border-slate-100 rounded-md px-8 py-1 self-center">
                  Go to app
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex w-full max-w-screen-lg mx-auto mt-24 bg-slate-200 bg-[url('../public/banners/safe-travel.jpg')] bg-cover min-h-[408px] items-center relative">
        <div className="flex flex-col justify-around w-1/3 p-12 gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl uppercase text-white">
              Safe travel,
              <br />
              safe investment.
            </h3>
            <p className="text-white">We have the seat belt of a racing car.</p>
          </div>
          <Link href="/safe-investment">
            <a className="text-slate-100 text-center uppercase border-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black text-xs border-slate-100 rounded-md px-8 py-1 self-start">
              Know more
            </a>
          </Link>
        </div>
      </section> */}
      <Banner
        className="my-24 max-w-screen-lg"
        title={
          <h3 className="uppercase text-white">
            Safe travel,
            <br />
            safe investment
          </h3>
        }
        titleClassName="text-white uppercase"
        subtitle="We have the seat belt of a racing car."
        linkUrl="/safe-investment"
        linkLabel="Know more"
        height={408}
        image="bg-[url('/banners/safe-travel.jpg')]"
        contentPadding={true}
        certificates={true}
      />

      <Carousel id="1" className="my-36" />
      <Accordion />
      <Posts
        posts={posts}
        title="Learn more"
        titleCentered={true}
        buttonMoreLink="/learn"
        buttonMoreText="See More"
        className="py-24"
      />
      <Banner
        title={
          <h3 className="text-white uppercase">
            Ready for a<br />
            Classic Investment?
          </h3>
        }
        titleClassName="text-white"
        subtitle="Do you already have everything you need to start daydreaming? 
So relax and press the pedal."
        linkLabel="Go to app"
        linkUrl="https://beta.somethinglegendary.io"
        image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
      />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "hero",
        "how-it-works",
        "roadmap",
        "newsletter",
        "about-us",
      ])),
      // Will be passed to the page component as props
    },
  };
}
