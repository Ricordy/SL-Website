import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { TbBrandDiscord } from "react-icons/tb";
import { BsMedium } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6 max-w-4xl mx-auto">
      <div className="content flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-bold pb-2 text-white text-opacity-70">
            {t("company")}
          </h3>
          <a href="#">{t("mission")}</a>
          <a href="#">{t("vision")}</a>
          <a href="#">{t("events")}</a>
        </div>
        <div>
          <h3 className="font-bold pb-2 text-white text-opacity-70">
            {t("contact")}
          </h3>
          <a href="#">Press Release</a>
        </div>
        <div className="social flex flex-row gap-2">
          <div className="flex flex-col">
            <h3 className="font-bold pb-2 text-white text-opacity-70">
              {t("we-are-social")}
            </h3>
            <Link href="http://twitter.com/">
              <a target="_blank" className="flex flex-row items-center gap-2">
                <FiTwitter /> Twitter
              </a>
            </Link>
            <Link href="https://www.instagram.com/somethinglegendary1/">
              <a target="_blank" className="flex flex-row items-center gap-2">
                <AiOutlineInstagram /> Instagram
              </a>
            </Link>
            <Link href="mailto:hello@somethinglegendary.com">
              <a className="flex flex-row items-center gap-2">
                <GoMail /> E-mail
              </a>
            </Link>
            <Link href="https://discord.gg/7Get4jzj">
              <a target="_blank" className="flex flex-row items-center gap-2">
                <TbBrandDiscord /> Discord
              </a>
            </Link>
            <Link href="https://medium.com/@somethinglegendary">
              <a target="_blank" className="flex flex-row items-center gap-2">
                <BsMedium /> Medium
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC21xZJ-CgSJfersyA7OcfSg">
              <a target="_blank" className="flex flex-row items-center gap-2">
                <AiOutlineYoutube /> YouTube
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
