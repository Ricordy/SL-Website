import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { TbBrandDiscord } from "react-icons/tb";
import { BsMedium } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LogoWhite from "../public/logo-white.svg";
import Discord from "../public/icons/discord.svg";
import Facebook from "../public/icons/facebook1.svg";
import Instagram from "../public/icons/instagram1.svg";
import Twitter from "../public/icons/twitter1.svg";
import Medium from "../public/icons/medium.svg";
import Mail from "../public/icons/mail.svg";
import Phone from "../public/icons/phone.svg";

import Image from "next/image";
import { Button } from "./Button";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6 w-full bg-black flex flex-col">
      <div className="mx-auto max-w-7xl w-full items-start flex justify-between border-b border-white pb-6 mb-6">
        <div className="flex flex-col justify-center items-start gap-6">
          <Image src={LogoWhite} alt="Something Legendary Logo" />
          <div className="flex gap-3">
            <Image src={Mail} alt="E-mail" />
            <Link href="mailto:info@somethinglegendary.com">
              <a className="text-xs">info@somethinglegendary.com</a>
            </Link>
          </div>
          <div className="flex gap-3">
            <Image src={Phone} alt="Phone" />
            <span className="text-xs">+381 9999-9999</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold pb-2 text-white">{t("How it works")}</h3>
          <Link href="/help/how-to-invest">
            <a>{t("How to invest")}</a>
          </Link>
          <Link href="/help/how-it-works">
            <a>{t("How it works")}</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold pb-2 text-white">{t("Learn")}</h3>
          <Link href="/help/create-a-wallet">
            <a>Create a Wallet</a>
          </Link>
          <Link href="/help/what-is-nft">
            <a>What is a NFT?</a>
          </Link>
          <Link href="/help/how-to-invest">
            <a>How to invest?</a>
          </Link>
          <Link href="/help/news">
            <a>News</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold pb-2 text-white">{t("About Us")}</h3>
          <Link href="/whitepaper">
            <a>{t("Whitepaper")}</a>
          </Link>
          <Link href="/security">
            <a>{t("Security")}</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold pb-2 text-white">{t("Newsletter")}</h3>
          <p>
            Join our <span className="font-semibold">Legendary</span> mailing
            list.
          </p>
          <form action="" className="flex flex-col mt-3 gap-3">
            <input
              type="text"
              placeholder="Your best e-mail"
              name="email"
              id="email"
              className="p-2 text-xs rounded-md"
            />
            <Button className="self-end" variant="outline">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-7xl gap-2 mx-auto">
        <div className="flex gap-6">
          <Link href="/terms">
            <a>Terms and conditions</a>
          </Link>
          <Link href="/legal">
            <a>Legal</a>
          </Link>
          <Link href="/terms">
            <a>Pattents</a>
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="https://discord.gg/7Get4jzj">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Discord} alt="Discord" />
            </a>
          </Link>
          <Link href="https://medium.com/@somethinglegendary">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Medium} alt="Medium" />
            </a>
          </Link>
          <Link href="http://facebbok.com/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Facebook} alt="Facebook" />
            </a>
          </Link>
          <Link href="http://twitter.com/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Twitter} alt="Twitter" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/somethinglegendary1/">
            <a
              target="_blank"
              className="flex flex-row items-center gap-2 rounded-full border border-white p-2"
            >
              <Image src={Instagram} alt="Instagram" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
