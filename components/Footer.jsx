import {FiTwitter} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {GoMail} from "react-icons/go"

function Footer() {
  return (
<footer className="py-6 max-w-4xl mx-auto">
  <div className="content flex justify-between ">
    <div>
      <h3 className="font-bold">Company</h3>
      <a href="#">Mission</a>
      <a href="#">Events</a>
    </div>
    <div>
    <h3 className="font-bold">Contact</h3>
    <a href="#">Press Release</a>
    </div>
    <div className="social flex flex-row gap-2">
      <div>
        <h3 className="font-bold">We are Social</h3>
        <FiTwitter /> Twitter
        <AiOutlineInstagram /> Instagram
        <GoMail /> E-mail
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer