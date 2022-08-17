import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {GoMail} from "react-icons/go"
import {TbBrandDiscord} from "react-icons/tb"
import { BsMedium } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai" 
import { useTranslation } from "next-i18next"

function Footer() {
  const { t } = useTranslation();

  return (
<footer className="py-6 max-w-4xl mx-auto">
  <div className="content flex justify-between">
    <div className="flex flex-col">
      <h3 className="font-bold pb-2 text-white text-opacity-70">{t("company")}</h3>
      <a href="#">{t("mission")}</a>
      <a href="#">{t("vision")}</a>
      <a href="#">{t("events")}</a>
    </div>
    <div>
    <h3 className="font-bold pb-2 text-white text-opacity-70">{t("contact")}</h3>
    <a href="#">Press Release</a>
    </div>
    <div className="social flex flex-row gap-2">
      <div className="flex flex-col">
        <h3 className="font-bold pb-2 text-white text-opacity-70">{t("we-are-social")}</h3>
        <div className="flex flex-row items-center gap-2"><FiTwitter /> Twitter</div>
        <div className="flex flex-row items-center gap-2"><AiOutlineInstagram /> Instagram</div>
        <div className="flex flex-row items-center gap-2"><GoMail /> E-mail</div>
        <div className="flex flex-row items-center gap-2"><TbBrandDiscord /> Discord</div>
        <div className="flex flex-row items-center gap-2"><BsMedium /> Medium</div>
        <div className="flex flex-row items-center gap-2"><AiOutlineYoutube /> YouTube</div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer