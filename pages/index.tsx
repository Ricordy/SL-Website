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
import { HygraphPostProps, PostItemProps } from "../@types/post";
import { GraphQLClient, gql } from "graphql-request";
import FlyoutMenu from "~/components/Accordion2-0";

export default function Home(props) {
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
    <>
      <div className="flex flex-col bg-dreamBlack gap-28 md:gap-[132px]">
        <Hero />
      </div>
      <Partners className="pb-20 md:pb-[202px]" posts={posts} />

      <div className="flex flex-col bg-white gap-8 md:gap-[132px]">
        <HighlightContent
          overlap={true}
          title={<h3 className="uppercase">Your dream project,</h3>}
          subtitle={
            <h3 className=" text-primaryGreen uppercase tracking-widest">
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
            <span className=" font-medium">
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
            <span className="font-medium">feel it at your place</span>.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black text-3xl uppercase tracking-widest">
              The <span className="text-primaryGreen">only risk</span> is on the
              <br className="hidden md:block" />{" "}
              <span className=" text-black text-3xl uppercase tracking-widest">
                car&apos;s paintwork!
              </span>
            </h3>
          }
          image="/media/home-3.jpg"
          // buttonLink="/security"
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
                  Connect your wallet!
                  <br />
                  Launch the app, connect wallet choose your legendary classic
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
                entry ticket
              </h3>
              <div className="flex flex-col self-start flex-1 justify-between">
                <p className="text-ogBlack text-center">
                  Ready to become legendary? Buy your entry ticket!
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
                Choose your legendary classic for something more than just
                watching someone do it for you!
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
              <p className="text-white">
                Expect the expected! Get a sense of the time margin versus the
                expected profit margin
              </p>

              <Link href={process.env.NEXT_PUBLIC_PLATFORM_URL as string}>
                <a className="text-slate-100 text-center uppercase border-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black text-xs border-slate-100 rounded-md px-8 py-1 self-center">
                  Go to app
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
        height={408}
        image="bg-[url('/banners/safe-travel.jpg')]"
        contentPadding={true}
        certificates={true}
      />
      <Carousel id="1" className="md:my-[132px]" items={props.investments} />
      <FlyoutMenu className={""} />
      {/* <Posts
        posts={posts}
        title="Learn more"
        titleCentered={true}
        buttonMoreLink="/learn"
        buttonMoreText="See More"
        className="md:py-[132px] py-16"
      /> */}
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
So relax and press the pedal."
        linkLabel="Go to app"
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
      investments,
      // Will be passed to the page component as props
    },
  };
}
