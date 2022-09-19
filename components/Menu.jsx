import logo from "../public/logo.svg";
import Image from "next/image";
import AboutUsMenu from "./AboutUsMenu";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Menu = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const defaultLinkClass = "text-slate-300 hover:text-slate-200";

  const itens = [
    // {
    //   link: `${
    //     router.locale != router.defaultLocale ? router.locale : ""
    //   }/events`,
    //   text: t("events"),
    // },
    {
      link: "/#roadmap",
      text: t("roadmap"),
    },
    {
      link: `${
        router.locale != router.defaultLocale ? router.locale : ""
      }/the-process`,
      text: t("the-process"),
    },
    {
      link: `${
        router.locale != router.defaultLocale ? router.locale : ""
      }/security`,
      text: t("security"),
    },
    // {
    //   link: `${
    //     router.locale != router.defaultLocale ? router.locale : ""
    //   }/mission`,
    //   text: t("mission"),
    // },
    {
      link: "/#how-it-works",
      text: t("how-it-works"),
    },
    {
      link: "/events",
      text: t("events"),
    },
    {
      link: "#",
      text: t("whitepaper"),
    },
    {
      link: "https://finlab.somethinglegendary.io",
      text: t("launch-app"),
      linkClass: "bg-slate-50 text-black p-2 rounded",
    },
  ];

  return (
    <>
      <nav className=" bg-slate-900 md:flex z-10 sticky hidden min-w-full bg-dark_green justify-evenly gap-20 py-4">
        <div className="flex content">
          <div className="flex">
            <Link href="/" className="flex flex-row md:text-xl items-center">
              <Image
                src={logo}
                alt="Logo Something Legendary"
                className="w-20"
              />
            </Link>
          </div>
          <div className="flex px-0">
            <ul className="sm:flex sm:relative gap-4 items-center px-6">
              <li>
                <AboutUsMenu />
              </li>
              {itens.map(({ link, text, linkClass }, index) => {
                return (
                  <li key={index}>
                    <a
                      className={linkClass ? linkClass : defaultLinkClass}
                      href={link}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
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
          </div>
        </div>
      </nav>

      <section className="bg-c1 flex fixed w-full z-20 md:hidden text-right drop-shadow-md px-6 py-2 items-center justify-between">
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
          <ul className="flex flex-col items-center justify-between min-h-[250px] text-black">
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
      </section>
    </>
  );
};

export default Menu;
