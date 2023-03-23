import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  linkUrl: string;
  linkLabel?: string;
  image: string;
}
const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  linkUrl,
  linkLabel,
  image,
}) => {
  return (
    <section className="flex w-full mx-auto bg-black bg-[url('../public/banners/ready-for-a-classic-investment.jpg')] bg-contain bg-right bg-no-repeat min-h-[409px] items-center">
      <div className="flex w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-around w-1/3 py-12 gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold uppercase">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <Link href={linkUrl}>
            <a className="text-slate-100 text-center uppercase border-2 font-semibold text-xs border-slate-100 rounded-md px-4 py-1 self-start">
              {linkLabel ? linkLabel : "Know more"}
            </a>
          </Link>
        </div>
      </div>
      {/* <div className="flex items-end overflow-hidden flex-col bg-red-200 w-full">
        <Image
          src={image}
          className="self-end"
          alt={title}
          objectFit="cover"
          layout="fill"
        />
      </div> */}
    </section>
  );
};

export default Banner;
