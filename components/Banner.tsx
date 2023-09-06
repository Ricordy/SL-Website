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
  rounded?: boolean;
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
  rounded = false,
}) => {
  const minHeight = height ? `min-h-[${height}px]` : "";
  return (
    <div className={cn("flex w-full mx-auto flex-col", className)}>
      <section
        className={cn(
          `flex w-full mx-auto md:py-24 relative -mt-1 md:mt-0 bg-cover bg-center bg-no-repeat 
           items-center ${image}`,
          rounded ? (certificates ? "md:rounded-t-lg" : "md:rounded-lg") : "",
          height ? minHeight : "min-h-[408px]"
        )}
      >
        <div className="flex w-full relative z-10 max-w-screen-lg mx-auto justify-start">
          <div
            className={`flex flex-col lg:px-0 px-6 py-8 md:py-0 justify-around w-full gap-12 ${
              contentPadding ? "lg:pl-20" : ""
            }`}
          >
            <div className="flex flex-col w-full md:w-2/5 gap-4">
              {typeof title == "string" ? (
                <h3
                  className={
                    titleClassName ? titleClassName : "uppercase text-white"
                  }
                >
                  {title}
                </h3>
              ) : (
                title
              )}

              {subtitle && typeof subtitle == "string" ? (
                <p
                  className={
                    subtitleClassName ? subtitleClassName : "text-white"
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
                <a className="text-slate-100 dark:hover:bg-white dark:hover:text-black tracking-wide text-center uppercase border-2 text-sm font-medium border-white rounded-md px-8 py-1 self-start">
                  {linkLabel ? linkLabel : "Know more"}
                </a>
              </Link>
            )}
          </div>
        </div>
        <div
          className={cn(
            "bg-gradient-to-r from-black/90  to-transparent w-full absolute h-full z-1",
            rounded ? "md:rounded-lg" : ""
          )}
        />
      </section>
      {certificates && (
        <div className="flex items-center gap-6 px-6 justify-between w-full  mx-auto py-12 bg-slate-50">
          <Image
            src="/certificates/cmvm.png"
            alt="CMVM"
            objectFit="contain"
            width={200}
            height={200}
          />

          <Image
            src="/certificates/no-whales.svg"
            alt="No Whales"
            objectFit="contain"
            width={100}
            height={100}
          />
          <Image
            src="/certificates/portugal-finlab.png"
            alt="Portugal FinLab"
            objectFit="contain"
            width={200}
            height={200}
          />
          <Image
            src="/certificates/acp.png"
            alt="Automóvel Club de Portugal"
            objectFit="contain"
            width={100}
            height={100}
          />
          <Image
            src="/certificates/innovarisk.png"
            alt="innovarisk"
            objectFit="contain"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
