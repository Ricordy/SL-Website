import { useTranslation } from "next-i18next";
import Link from "next/link";
import LogoWhite from "../public/logo-white.svg";
import Discord from "../public/icons/discord.svg";
import Facebook from "../public/icons/facebook1.svg";
import Instagram from "../public/icons/instagram1.svg";
import Twitter from "../public/icons/twitter1.svg";
import Medium from "../public/icons/medium.svg";
import Mail from "../public/icons/mail.svg";

import Image from "next/image";
import { Button } from "./Button";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 md:pt-[72px] bg-black flex flex-col mb-1">
      <div className="mx-auto md:flex-row flex-col md:px-0 px-6 max-w-screen-lg w-full items-start justify-between flex gap-6 border-b md:border-white pb-6 ">
        <div className="flex gap-6 flex-col w-[280px] justify-between items-start">
          <Image src={LogoWhite} alt="Something Legendary Logo" />

          <div className="flex gap-2">
            <Image src={Mail} alt="E-mail" />
            <Link href="mailto:info@somethinglegendary.com">
              <a className=" text-xs font-thin tracking-widest">
                info@somethinglegendary.com
              </a>
            </Link>
          </div>
        </div>

        <div className="flex w-[150px] flex-col gap-2 font-light ">
          <h3 className="text-base font-semibold uppercase text-white">
            {t("How it works")}
          </h3>
          <Link href="/help/how-to-invest">
            <a className="">{t("How to invest")}</a>
          </Link>
          <Link href="/help/how-it-works">
            <a className="">{t("How it works")}</a>
          </Link>
        </div>

        <div className="flex w-[120px] flex-col gap-2 font-light ">
          <h3 className="text-base font-semibold text-white uppercase">
            {t("Learn")}
          </h3>
          <Link href="/help/create-a-wallet">Create a Wallet</Link>
          <Link href="/help/what-is-nft">What is a NFT?</Link>
          <Link href="/help/how-to-invest">How to invest?</Link>
          <Link href="/help/news">News</Link>
        </div>
        <div className="flex w-[100px] flex-col gap-8 text-base uppercase font-semibold ">
          <h3 className="text-base font-semibold text-white">
            {t("About Us")}
          </h3>
          <Link href="/whitepaper">{t("Whitepaper")}</Link>
        </div>
        <div className="flex flex-col w-[320px] gap-2 font-light ">
          <h3 className="text-base font-semibold uppercase text-white">
            {t("Newsletter")}
          </h3>
          <p className="text-white">Join our weekly mailing list.</p>
          <form action="" className="flex flex-col mt-3 gap-3">
            <input
              type="text"
              placeholder="Your e-mail"
              name="email"
              id="email"
              className="p-2 mb-4 w-full text-xs rounded-md"
            />
            <Button
              className="self-end w-full border-white hover:text-black text-white hover:bg-white"
              variant="outline"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-lg gap-6 md:gap-2 py-4 mx-auto ">
        <div className="flex gap-6">
          <Link href="/terms">
            <a className="font-light">Terms and conditions</a>
          </Link>
          <Link href="/legal">
            <a className="font-light">Legal</a>
          </Link>
          <Link href="/terms">
            <a className="font-light">Pattents</a>
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="https://discord.gg/7Get4jzj">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Discord} width={20} height={20} alt="Discord" />
            </a>
          </Link>
          <Link href="https://medium.com/@somethinglegendary">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Medium} width={20} height={20} alt="Medium" />
            </a>
          </Link>
          <Link href="http://facebbok.com/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Facebook} width={20} height={20} alt="Facebook" />
            </a>
          </Link>
          <Link href="http://twitter.com/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Twitter} width={20} height={20} alt="Twitter" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/somethinglegendary1/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Instagram} width={20} height={20} alt="Instagram" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
