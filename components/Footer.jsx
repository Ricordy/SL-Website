import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {GoMail} from "react-icons/go"
import {TbBrandDiscord} from "react-icons/tb"

function Footer() {
  return (
<footer className="py-6 max-w-4xl mx-auto">
  <div className="content flex justify-between">
    <div className="flex flex-col">
      <h3 className="font-bold pb-2 text-white text-opacity-70">Company</h3>
      <a href="#">Mission</a>
      <a href="#">Vision</a>
      <a href="#">Events</a>
    </div>
    <div>
    <h3 className="font-bold pb-2 text-white text-opacity-70">Contact</h3>
    <a href="#">Press Release</a>
    </div>
    <div className="social flex flex-row gap-2">
      <div className="flex flex-col">
        <h3 className="font-bold pb-2 text-white text-opacity-70">We are Social</h3>
        <div className="flex flex-row items-center gap-2"><FiTwitter /> Twitter</div>
        <div className="flex flex-row items-center gap-2"><AiOutlineInstagram /> Instagram</div>
        <div className="flex flex-row items-center gap-2"><GoMail /> E-mail</div>
        <div className="flex flex-row items-center gap-2"><TbBrandDiscord /> Discord</div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer