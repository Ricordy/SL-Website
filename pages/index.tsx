import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Dreamers from "../components/Dreamers";
import Image from "next/image";
import { Button } from "../components/Button";
import HighlightContent from "../components/HighlightContent";
import { title } from "process";
import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Dreamers />
      <div className="flex flex-col -mt-12 gap-24">
        <HighlightContent
          title={
            <h3 className=" text-black font-semibold text-3xl uppercase">
              Your dream project,
            </h3>
          }
          subtitle={
            <h3 className=" text-primaryGreen font-semibold text-3xl uppercase">
              without leaving home.
            </h3>
          }
          image="/media/home-1.jpg"
          buttonLink="/link"
          buttonLabel="Try it for free"
        >
          <p className="text-black">
            Thes opportunity to travel across borders, we know it doesn`&apos;`t
            seem real but imagine the process of restoring a classic directly
            from your sofa in the living room, accompanying this restoration and
            still having the chance to profit from it. That`&apos;`s what we do,
            with distinction.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black font-semibold text-3xl uppercase">
              The <span className="text-primaryGreen">only digital</span>
            </h3>
          }
          subtitle={
            <h3 className="font-semibold text-black text-3xl uppercase">
              <span className="text-primaryGreen">workshop</span> in the world!
            </h3>
          }
          image="/media/home-2.jpg"
          buttonLink="/link"
          buttonLabel="Try it for free"
          reverse={true}
        >
          <p className="text-black">
            Imagine following the entire process of restoring the classic of
            your dreams live from the workshop where all the magic happens!
            Restoring a classic car is a labor of love that requires skill,
            patience, and dedication and we want you to{" "}
            <span className="font-bold">feel it at your place</span>.
          </p>
        </HighlightContent>
        <HighlightContent
          title={
            <h3 className=" text-black font-semibold text-3xl uppercase">
              The <span className="text-primaryGreen">only risk</span> is on the
            </h3>
          }
          subtitle={
            <h3 className=" text-black font-semibold text-3xl uppercase">
              car’s paintwork!
            </h3>
          }
          image="/media/home-3.jpg"
          buttonLink="/link"
          buttonLabel="Try it for free"
        >
          <p className="text-black">And even that is covered by the ACP!</p>
          <p className="text-black">
            Classic cars have a timeless appeal and a limited supply, which
            means that their value may appreciate over time. Additionally,
            classic cars can be enjoyed and used while they appreciate in value,
            which is not always the case with other types of investments.
          </p>
        </HighlightContent>
      </div>
      <section className="bg-[url('../public/map.svg')] bg-contain bg-no-repeat bg-center flex justify-center items-center my-24 min-h-[587px] gap-24">
        <div className="flex flex-col gap-3">
          <h3 className="text-black font-bold text-3xl">
            The classics
            <br /> market <span className="text-primaryGreen">has grown.</span>
          </h3>
          <p className="text-black">And the numbers speak for themselves.</p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-bold text-3xl">100k</h3>
            <p className="text-black">Lorem ipsum.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-bold text-3xl">95%</h3>
            <p className="text-black">Lorem ipsum.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-bold text-3xl">5.3M</h3>
            <p className="text-black">Lorem ipsum.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-bold text-3xl">2000</h3>
            <p className="text-black">Lorem ipsum.</p>
          </div>
        </div>
      </section>
      <section className="flex max-w-7xl mx-auto flex-col justify-center items-center gap-6">
        <h3 className="text-black font-bold text-3xl text-center uppercase">
          How to invest in <span className="font-normal">something</span>
          <br />
          called <span className="font-normal">legendary</span>.
        </h3>
        <p className="text-black">
          It’s easy. In just 4 steps you start earn your profits.
        </p>
        <div className="flex gap-6 mt-12 relative">
          <div className="flex w-1/4 flex-col gap-6 relative  p-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[140px] after:left-40">
            <h3 className="text-primaryGreen w-8 text-center text-2xl font-semibold bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              1
            </h3>
            <h3 className="text-black text-2xl font-bold text-center">
              Launch the app
            </h3>
            <p className="text-black text-center">
              Connect your wallet! Launch the app, connect wallet choose your
              legendary classic
            </p>
            <p className="text-black text-center">Don’t have wallet?</p>
            <Link href="/create-wallet">
              <a className="text-primaryGreen text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-semibold">
                Create it
              </a>
            </Link>
          </div>
          <div className="flex w-1/4 flex-col gap-6 relative  p-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[140px] after:left-40">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl font-semibold bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              2
            </h3>
            <h3 className="text-black text-2xl font-bold text-center">
              Buy an
              <br />
              entry NFT
            </h3>
            <p className="text-black text-center">
              Ready to become legendary? Buy your entry ticket
            </p>
            <p className="text-black text-center">Don’t Know NFT?</p>
            <Link href="/learn-more-nft">
              <a className="text-primaryGreen text-center uppercase border-b-2 border-primaryGreen self-center text-xs font-semibold">
                Learn more
              </a>
            </Link>
          </div>
          <div className="flex w-1/4 flex-col gap-6 relative  p-12 rounded-md lg:after:content-[''] lg:after:border-t-2 after:border-slate-100 after:translate-y-1/2 after:h-full after:w-full after:absolute after:bottom-[140px] after:left-40">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl font-semibold bg-slate-100 self-center p-2 leading-none justify-center rounded-sm z-10">
              3
            </h3>
            <h3 className="text-black text-2xl font-bold text-center">
              Select <br />a project
            </h3>
            <p className="text-black text-center">
              Choose your legendary classic for something more than just
              watching someone do it for you!
            </p>
          </div>
          <div className="flex w-1/4 flex-col gap-6 bg-primaryGreen p-12 rounded-md">
            <h3 className="text-primaryGreen  w-8 text-center  text-2xl font-semibold bg-slate-100 self-center p-2 leading-none justify-center rounded-sm">
              4
            </h3>
            <h3 className="text-2xl font-bold text-center">
              Withdraw investment
            </h3>
            <p className="">
              Expect the expected! Get a sense of the time margin versus the
              expected profit margin
            </p>

            <Link href="/try">
              <a className="text-slate-100 text-center uppercase border-2 font-semibold text-xs border-slate-100 rounded-md px-4 py-1 self-center">
                Try it for free
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex w-full max-w-7xl mx-auto mt-24 bg-slate-200 bg-[url('../public/safe-travel.jpg')] bg-cover min-h-[408px] items-center relative">
        <div className="flex flex-col justify-around w-1/3 p-12 gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold uppercase">
              Safe travel,
              <br />
              safe investment.
            </h3>
            <p>We have the seat belt of a racing car.</p>
          </div>
          <Link href="/try">
            <a className="text-slate-100 text-center uppercase border-2 font-semibold text-xs border-slate-100 rounded-md px-4 py-1 self-start">
              Try it for free
            </a>
          </Link>
        </div>
      </section>
      <div className="flex items-center justify-around w-full max-w-7xl mx-auto mb-12 py-6 bg-slate-50">
        <Image
          src="/certificates/certik.png"
          alt="Certik"
          width={235}
          height={91}
        />
        <Image
          src="/certificates/no-whales.svg"
          alt="No Whales"
          width={235}
          height={91}
        />
        <Image
          src="/certificates/portugal-finlab.png"
          alt="Portugal FinLab"
          width={149}
          height={51}
        />
        <Image
          src="/certificates/acp.png"
          alt="Automóvel Club de Portugal"
          width={123}
          height={75}
        />
      </div>
      <Carousel />
      <Contact />
      <Newsletter />
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
