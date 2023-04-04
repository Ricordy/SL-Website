import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { cn } from "../lib/utils";

interface BannerProps {
  className?: string;
  title: ReactNode | string;
  titleClassName?: string;
  subtitle: ReactNode | null;
  subtitleClassName?: string;
  linkUrl?: string;
  linkLabel?: string;
  image: string;
  height?: number;
  certificates?: boolean;
  contentPadding?: boolean;
}
const Banner: FC<BannerProps> = ({
  className,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  linkUrl,
  linkLabel,
  image,
  height,
  certificates,
  contentPadding = false,
}) => {
  return (
    <div
      className={cn(
        "flex w-full bg-red-200 rounded-lg mx-auto flex-col",
        className
      )}
    >
      <section
        className={`flex w-full mx-auto rounded-t-lg  bg-black relative  bg-cover bg-right bg-no-repeat min-h-[${
          height ? height : "408"
        }px] items-center ${image}`}
      >
        <div className="flex w-full relative z-10 max-w-screen-lg mx-auto justify-start">
          <div
            className={`flex flex-col justify-around w-2/3 py-12 gap-12 ${
              contentPadding ? "pl-24" : ""
            }`}
          >
            <div className="flex flex-col gap-3">
              {typeof title == "string" ? (
                <h3 className={titleClassName ? titleClassName : ""}>
                  {title}
                </h3>
              ) : (
                title
              )}
              {subtitle && typeof subtitle == "string" ? (
                <p
                  className={
                    subtitleClassName ? subtitleClassName : "text-white w-1/3"
                  }
                >
                  {subtitle}
                </p>
              ) : (
                subtitle
              )}
            </div>
            {linkUrl && (
              <Link href={linkUrl}>
                <a className="text-slate-100 dark:hover:bg-white dark:hover:text-black text-center uppercase border-2 text-xs border-white rounded-md px-8 py-1 self-start">
                  {linkLabel ? linkLabel : "Know more"}
                </a>
              </Link>
            )}
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
        <div className="bg-gradient-to-r from-black/90  to-transparent w-full absolute h-[409px] z-1" />
      </section>
      {certificates && (
        <div className="flex items-center justify-around w-full max-w-screen-lg mx-auto py-6 bg-slate-50">
          <Image
            src="/certificates/certik.png"
            alt="Certik"
            width={235}
            height={91}
          />
          <Image
            src="/certificates/no-whales.svg"
            alt="No Whales"
            width={235}
            height={91}
          />
          <Image
            src="/certificates/portugal-finlab.png"
            alt="Portugal FinLab"
            width={149}
            height={51}
          />
          <Image
            src="/certificates/acp.png"
            alt="Automóvel Club de Portugal"
            width={123}
            height={75}
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
