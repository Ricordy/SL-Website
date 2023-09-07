import Hero from "../components/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Partners from "../components/Partners";
import Image from "next/image";
import HighlightContent from "../components/HighlightContent";
import Link from "next/link";
import Accordion from "../components/Accordion";
import Posts from "../components/Posts";
import Banner from "../components/Banner";

import { HygraphPostProps, PostItemProps } from "../@types/post";
import { GraphQLClient, gql } from "graphql-request";
import FlyoutMenu from "~/components/Accordion2-0";
import { PostsProps } from "./learn";

import "swiper/css";
import Carousel from "~/components/Carousel";

export default function Home({ posts, investments }) {
  return (
    <>
      <div className="flex flex-col bg-dreamBlack gap-28 md:gap-[132px]">
        <Hero />
      </div>
      <Partners className="pb-20 md:pb-[202px]" />

      <div className="flex flex-col bg-white gap-8 md:gap-[132px]">
        <HighlightContent
          overlap={true}
          title={
            <h3 className="uppercase px-6 md:px-0">Your dream project,</h3>
          }
          subtitle={
            <h3 className=" text-primaryGreen uppercase tracking-widest px-6 md:px-0">
              without leaving home.
            </h3>
          }
          image="/media/home-1.jpg"
          buttonLink="/about-us"
          buttonLabel="About Us"
        >
          <p className="text-ogBlack md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
            The project of a lifetime, all accomplished from the comfort of your
            couch. We understand it may seem unreal to restore a classic car
            without setting foot in a garage or to follow the entire restoration
            process from the comfort of your own home while still profiting from
            it.{" "}
            <span className=" font-medium">
              But that&apos;s precisely what we do, with distinction.
            </span>
          </p>
        </HighlightContent>
        <div className=" hidden md:block">
          <HighlightContent
            title={
              <h3 className=" text-black text-3xl uppercase tracking-widest">
                The <span className="text-primaryGreen">only digital</span>
              </h3>
            }
            subtitle={
              <h3 className="text-black text-3xl uppercase tracking-widest">
                <span className="text-primaryGreen">workshop</span> in the
                world!
              </h3>
            }
            image="/media/home-2.jpg"
            buttonLink="/how-it-works"
            buttonLabel="How it works"
            reverse={true}
          >
            <p className="text-ogBlack  md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
              Follow the entire process of restoring the classic of your dreams,
              live from the workshop where all the magic happens! Restoring a
              classic car is a labor of love that requires skill, patience, and
              dedication and we want you to embrace it{" "}
              <span className="font-medium">
                where you&apos;re most comfortable
              </span>
              .
            </p>
          </HighlightContent>
        </div>
        <div className=" block md:hidden">
          <HighlightContent
            title={
              <h3 className=" text-black text-3xl uppercase tracking-widest px-6">
                The <span className="text-primaryGreen">only digital</span>
              </h3>
            }
            subtitle={
              <h3 className="text-black text-3xl uppercase tracking-widest px-6">
                <span className="text-primaryGreen">workshop</span> in the
                world!
              </h3>
            }
            image="/media/home-2.jpg"
            buttonLink="/how-it-works"
            buttonLabel="How it works"
          >
            <p className="text-ogBlack  md:max-w-[500px] p-6 md:p-0 text-justify md:text-left">
              Follow the entire process of restoring the classic of your dreams,
              live from the workshop where all the magic happens! Restoring a
              classic car is a labor of love that requires skill, patience, and
              dedication and we want you to embrace it{" "}
              <span className="font-medium">
                where you&apos;re most comfortable
              </span>
              .
            </p>
          </HighlightContent>
        </div>

        <HighlightContent
          title={
            <h3 className=" text-black text-3xl uppercase tracking-widest px-6 md:px-0">
              <span className="text-primaryGreen">Flaws?</span> Only on the{" "}
              <br />
              car&apos;s <span className="text-primaryGreen">paintwork</span>.
              <br className="hidden md:block" />{" "}
              <span className=" text-black text-3xl uppercase tracking-widest"></span>
            </h3>
          }
          image="/media/home-3.jpg"
          // buttonLink="/security"
          buttonLabel="Security Measures"
        >
          <p className="text-ogBlack font-medium">
            And even that is covered by the ACP!
          </p>
          <p className="text-ogBlack  md:max-w-[500px] p-6 md:p-0 text-justify md:text-left ">
            Classic cars have a timeless appeal and a limited supply. This
            scarcity contributes to the possibility of their value increasing
            over time. And, the fact that they offer both the pleasure of use
            and the potential for appreciation is a combination not often found
            in other investment avenues.
          </p>
        </HighlightContent>
      </div>
      <section className="bg-[url('../public/map.svg')] bg-cover md:bg-contain bg-no-repeat bg-center flex justify-center items-center my-16 md:my-[132px] md:min-h-[587px] w-full gap-24">
        <div className="flex flex-col mx-auto gap-6 max-w-screen-lg md:flex-row w-full justify-start items-start">
          <div className="flex flex-col md:w-2/6 w-full md:items-start items-center gap-3">
            <h3 className="text-black px-6 text-3xl uppercase text-center md:text-left">
              The classics
              <br className="hidden md:block" /> market{" "}
              <br className="hidden md:block" />
              <span className="text-primaryGreen">has grown.</span>
            </h3>
            <p className="text-ogBlack">
              And the numbers speak for themselves.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/6 justify-center items-center gap-3">
            <h3 className="text-black text-4xl">$138M</h3>
            <p className="text-center text-ogBlack">
              Most expensive
              <br />
              car ever sold.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/6 justify-center items-center gap-3">
            <h3 className="text-black text-4xl">193%</h3>
            <p className="text-ogBlack text-center">
              10 years
              <br />
              growing.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/6 gap-3 justify-center items-center">
            <h3 className="text-black text-4xl">31Bi</h3>
            <p className="text-ogBlack text-center">
              amount sold
              <br />
              in 2020.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/6 gap-3 justify-center items-center">
            <h3 className="text-black text-4xl">6M</h3>
            <p className="text-ogBlack text-center">
              number of classics
              <br />
              worldwide.
            </p>
          </div>
        </div>
      </section>
      <section className="flex max-w-screen-lg mx-auto  flex-col justify-center items-center gap-8">
        <h3 className="text-black font-medium text-3xl text-center uppercase">
          How to invest in <span className=" font-thin">something</span>
          <br />
          called <span className="font-thin">legendary</span>.
        </h3>
        <p className="text-ogBlack">
          It&apos;s easy. In just 4 steps you start earn your profits.
        </p>
        <div className="flex flex-col md:flex-row gap-3 mt-0 md:mt-[52px] flex-1 relative">
          <div className="flex md:w-1/4 flex-col gap-8  relative p-4 py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 md:after:border-slate-100 md:after:translate-y-1/2 md:after:h-full md:after:w-full md:after:absolute md:after:bottom-[138px] md:after:left-[132px]">
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
                  Launch the app, connect your wallet and choose your legendary
                  classic.
                </p>
                <p className="text-ogBlack font-light text-center">
                  Don&apos;t have wallet?
                </p>
                <Link href="http://www.metamask.io" target="_blank">
                  <a className="text-primaryGreen md:mt-0 mt-6 text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-medium tracking-wide">
                    Create it
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-8 relative p-6 py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 md:after:translate-y-1/2 md:after:h-full md:after:w-full md:after:absolute md:after:bottom-[138px] md:after:left-[132px]">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              2
            </h3>
            <div className="flex flex-col justify-start gap-8 flex-1">
              <h3 className="text-black text-2xl text-center">
                Buy your
                <br />
                Membership card
              </h3>
              <div className="flex flex-col self-start flex-1 justify-between">
                <p className="text-ogBlack text-center">
                  Ready to become a legendary? Buy your Membership card!
                </p>

                <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
                  <a className="text-primaryGreen md:mt-0 mt-6 text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-medium tracking-wide">
                    Buy it
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-8 relative p-5 pb-24 md:py-12 rounded-md lg:after:content-[''] lg:after:border-t-2 md:after:border-slate-100 md:after:translate-y-1/2 md:after:h-full md:after:w-full md:after:absolute md:after:bottom-[138px] md:after:left-[138px]">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              3
            </h3>
            <h3 className="text-black text-2xl text-center">
              Select <br />a project
            </h3>
            <div className="flex flex-col self-start flex-1 justify-between">
              <p className="text-ogBlack text-center">
                Select the legendary project that you see yourself in.
              </p>
            </div>
          </div>
          <div className="flex md:w-1/4 flex-col gap-8 bg-primaryGreen p-6 py-12 md:rounded-md">
            <h3 className="text-primaryGreen  w-8 text-center text-2xl bg-slate-100 self-center p-2 leading-none justify-center rounded-sm  z-10">
              4
            </h3>
            <h3 className="text-2xl text-center text-white">
              Withdraw investment
            </h3>
            <div className="flex flex-col gap-6 self-start flex-1 justify-between">
              <p className="text-white text-center">
                Expect the expected! Get a sense of the time margin versus the
                expected profit margin
              </p>

              <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
                <a className="text-slate-100 text-center uppercase border-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black text-xs border-slate-100 rounded-md px-8 py-1 self-center">
                  Launch app
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Banner
        rounded={true}
        className="md:my-[132px] max-w-screen-lg"
        title={
          <h3 className="uppercase text-white">
            Safe travel,
            <br />
            safe investment
          </h3>
        }
        titleClassName="text-white uppercase"
        subtitle="We have the seat belt of a racing car."
        // linkUrl="/safe-investment"
        // linkLabel="Know more"

        image="bg-[url('/banners/safe-travel.jpg')]"
        contentPadding={true}
        certificates={true}
      />

      <Carousel id="1" className="md:my-[132px]" items={investments} />

      <FlyoutMenu className={" pb-[132px] md:pb-0 "} />
      <div className="hidden md:block">
        <Posts
          posts={posts}
          title="Learn more"
          titleCentered={true}
          buttonMoreLink="/learn"
          buttonMoreText="See More"
          className="md:py-[132px] py-16"
          maxPosts={3}
        />
      </div>

      <Banner
        className="hidden md:block"
        // className="mb-[72px]"
        title={
          <h3 className="text-white uppercase">
            Ready for a<br />
            Classic Investment?
          </h3>
        }
        titleClassName="text-white"
        subtitle="Do you already have everything you need to start daydreaming? 
If so, relax and press the pedal."
        linkLabel="Launch app"
        linkUrl="https://beta.somethinglegendary.io"
        image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_READ_ONLY_KEY, {
    headers: {
      Authorization: process.env.HYGRAPH_BEARER,
    },
  });

  const { investments }: any = await hygraph.request(
    gql`
      query ActiveInvestments {
        investments(
          orderBy: createdAt_DESC
          where: { basicInvestment: { investmentStatus: Active } }
        ) {
          id
          address

          level {
            basicLevel {
              title
            }
          }
          basicInvestment {
            id
            totalInvested
            totalInvestment
            investmentStatus
            car {
              basicInfo {
                title
                cover {
                  id
                  url
                }
              }
              description
            }
          }
        }
      }
    `
  );

  const { posts }: PostsProps = await hygraph.request(
    gql`
      query MyQuery {
        posts {
          id
          slug
          basic {
            title
          }
          shortDescription {
            html
          }
          image {
            url
          }
          postCategory
          locale
        }
      }
    `
  );

  return {
    props: {
      // ...(await serverSideTranslations(locale, [
      //   "common",
      //   "home",
      //   "hero",
      //   "how-it-works",
      //   "roadmap",
      //   "newsletter",
      //   "about-us",
      // ])),
      posts,
      investments,
      // Will be passed to the page component as props
    },
  };
}
