import { useTranslation } from "next-i18next";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Aboutus = () => {
  const { t } = useTranslation("about-us");
  const team = [
    {
      name: "Lorem Ipsum",
      description: "CEO",
      image: "https://api.lorem.space/image/face?w=128&h=128&hash=7YVZYZeITc8",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "Ipsum Lorem",
      description: "CFO",
      image: "https://api.lorem.space/image/face?w=128&h=128&hash=4F32C4CF",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "Ipsum Lorem",
      description: "CFO",
      image: "https://api.lorem.space/image/face?w=128&h=128&hash=4F32C4CF",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  ];

  return (
    <section id="about-us">
      <div className="content flex flex-col">
        <h2 className="text-3xl mb-12 font-serif">
          {t("about-us.section-title")}
        </h2>
        <div className="profiles flex flex-col sm:flex-row justify-around">
          {team.map((member, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-slate-600 rounded-xl"
              >
                <Image
                  className="object-cover w-32 h-32 border-2 border-white rounded-full "
                  src={member.image}
                  width="128"
                  height="128"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {t("ceo-job-description")}
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook"
                  >
                    <BsFacebook />
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Twitter"
                  >
                    <AiOutlineTwitter />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
