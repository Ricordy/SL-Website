import logo from "../public/logo.svg";
import logoWhite from "../public/logo-white.svg";
import burguer from "../public/burguer-menu-white.svg";
import burguerActive from "../public/burguer-menu.svg";
import burguerHovered from "../public/burguer-menu-hover.svg";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Button } from "./Button";
import close from "../public/close.svg";
import facebookIcon from "../public/icons/facebook.svg";
import twitterIcon from "../public/icons/twitter.svg";
import instagramIcon from "../public/icons/instagram.svg";
import { classNames, cn } from "../lib/utils";

interface NavBarProps {
  className?: string;
}
const Navbar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavOn, setIsNavOn] = useState(false);

  const showNav = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  const defaultLinkClass = "text-slate-300 hover:text-slate-200";
  const transparentNavRoutes = ["/", "/how-it-works"];
  const itens = [
    {
      link: "/about-us",
      text: t("about us"),
    },
    {
      link: "/how-it-works",
      text: t("How it works"),
    },
    {
      link: "/learn",
      text: t("learn"),
    },
    // {
    //   link: `${
    //     router.locale != router.defaultLocale ? `/${router.locale}` : ""
    //   }/the-process`,
    //   text: t("the-process"),
    // },
    {
      link: `${
        router.locale != router.defaultLocale ? `/${router.locale}` : ""
      }/security`,
      text: t("security"),
    },
    // {
    //   link: `${
    //     router.locale != router.defaultLocale ? `/${router.locale}` : ""
    //   }/events`,
    //   text: t("events"),
    // },
    {
      link: "/whitepaper",
      text: t("whitepaper"),
    },
    {
      link: "/faq",
      text: t("faqs"),
    },
    {
      link: "/contact-us",
      text: t("contact us"),
    },
  ];

  return (
    <>
      <nav
        onMouseEnter={() => setIsNavOn(true)}
        onMouseLeave={() =>
          !isNavOpen && transparentNavRoutes.includes(router.route)
            ? setIsNavOn(false)
            : null
        }
        className={cn(
          `${
            isNavOn || !transparentNavRoutes.includes(router.route)
              ? "bg-white"
              : "bg-gradient-to-b from-black to-navbar"
          } flex relative z-20 h-[83px] max-w-full justify-center w-full p-6 xl:px-0`,
          className
        )}
      >
        <div className="flex flex-col max-w-screen-lg items-center justify-center w-full">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="flex flex-row md:text-xl items-center">
              <a>
                <Image
                  src={
                    isNavOn || !transparentNavRoutes.includes(router.route)
                      ? logo
                      : logoWhite
                  }
                  alt="Logo Something Legendary"
                  className="w-20"
                />
              </a>
            </Link>
            <div className="flex flex-col">
              <div className="flex gap-10 justify-center items-center">
                <Button
                  variant="outline"
                  className={`self-center p-0 h-[30px] w-[151px] ${
                    isNavOn || !transparentNavRoutes.includes(router.route)
                      ? "dark:border-primaryGreen dark:text-primaryGreen border-primaryGreen text-primaryGreen hover:bg-primaryGreen hover:text-white"
                      : ""
                  }`}
                >
                  Launch App
                </Button>
                <button
                  className="border-none uppercase  font-semibold leading-none rounded-md"
                  onClick={(e) => showNav(e)}
                >
                  {isNavOn || !transparentNavRoutes.includes(router.route) ? (
                    <Image className=" " src={burguerActive} alt="menu" />
                  ) : (
                    <Image className=" " src={burguer} alt="menu" />
                  )}
                </button>
              </div>
              {/* <div className="">
            <select
              className="bg-transparent"
              onChange={handleLocaleChange}
              value={router.locale}
            >
              {router.locales.map((l, i) => {
                return (
                  <option
                    key={i}
                    defaultChecked={l === router.locale}
                    value={l}
                  >
                    {l}
                  </option>
                );
              })}
            </select>
          </div> */}
            </div>
          </div>
          {isNavOpen && (
            <div
              className="flex absolute z-50 w-1/2 bg-white mt-[83px] pb-16 gap-8 justify-start right-0 top-0"
              id="menu"
            >
              <div className="flex max-w-screen-lg w-full justify-start">
                <div className="flex flex-col w-2/3 items-end justify-end">
                  <div className="flex w-full pl-[72px] pt-24 gap-6 justify-between ">
                    <ul className="flex flex-col w-full gap-6 text-left">
                      {itens.map(({ link, text }, index) => {
                        return (
                          <li key={index} className="uppercase w-full">
                            <Link href={link}>
                              <a
                                onClick={() => {
                                  setIsNavOpen(false);
                                  setIsNavOn(false);
                                }}
                                className="text-slate-800 font-normal text-2xl tracking-wide block"
                              >
                                {text}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <div className="border-b border-slate-800 w-full pt-12 pb-2 h-1" />
                      </li>
                      <li className="flex gap-6">
                        <Link href="https://www.facebook.com">
                          <a>
                            <Image src={facebookIcon} alt="Facebook" />
                          </a>
                        </Link>
                        <Link href="https://www.instagram.com">
                          <a>
                            <Image src={instagramIcon} alt="Instagram" />
                          </a>
                        </Link>
                        <Link href="https://www.twitter.com">
                          <a>
                            <Image src={twitterIcon} alt="Twitter" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className=""
                      onClick={() => {
                        setIsNavOpen(false);
                        setIsNavOn(false);
                      }}
                    >
                      <Image src={close} alt="Close" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* <section className="bg-slate-900 flex fixed w-full z-20 md:hidden text-right drop-shadow-md px-6 py-2 items-center justify-between">
        <div className="brand flex items-center">
          <Image src={logo} alt="Logo Something Legendary" className="w-20" />
        </div>
        <a
          href="#_"
          className="px-1 py-2 space-y-1 drop-shadow-md rounded-sm m-2"
          onClick={(e) => {
            e.preventDefault();
            setIsNavOpen((prev) => !prev);
          }}
        >
          <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
          <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
          <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
        </a>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-light_green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            {itens.map(({ link, text }, index) => {
              return (
                <li
                  key={index}
                  className="border-b border-gray-400 my-8 uppercase"
                >
                  <a href={link} onClick={() => setIsNavOpen(false)}>
                    {text}
                  </a>
                </li>
              );
            })}
            <li>
              <div className="flex gap-2">
                {router.locales.map((l, i) => {
                  return (
                    <span
                      key={i}
                      className={l === router.locale ? "text-bold" : ""}
                    >
                      <Link
                        className="text-slate-200"
                        href={router.asPath}
                        locale={l}
                      >
                        {l}
                      </Link>
                    </span>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default Navbar;
