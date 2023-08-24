import { FC, ReactNode } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

interface ContentProps {
  className?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  buttonLink?: string;
  buttonLabel?: string;
  reverse?: boolean;
  overlap?: boolean;
  children: ReactNode;
}

const HighlightContent: FC<ContentProps> = ({
  className,
  title,
  subtitle,
  image,
  buttonLink,
  buttonLabel,
  children,
  reverse = false,
  overlap = false,
}) => {
  return (
    <section className={cn("w-full", className, overlap ? "md:-mt-20" : "")}>
      <div
        className={`flex flex-col md:flex-row gap-16 items-center  w-full  ${
          reverse ? "md:flex-row-reverse md:pl-24 " : "mr-52"
        }`}
      >
        <div className=" md:block hidden">
          <Image
            className="rounded-md absolute top-0"
            src={image}
            width={644}
            height={528}
            alt=""
          />
        </div>
        <div className="md:hidden block w-screen justify-center  ">
          <Image
            className="rounded-md absolute  top-10 left-1/2"
            src={image}
            width={644}
            height={528}
            alt=""
          />
        </div>

        <div className="flex flex-col md:w-1/2 w-screen gap-8 text-center md:text-left p-1 md:p-0">
          <div className="flex flex-col ">
            {title}
            {subtitle}
          </div>
          {children}
          {buttonLink && buttonLabel && (
            <Link href={buttonLink}>
              <a className="uppercase font-medium tracking-wide dark:border-primaryGreen dark:text-primaryGreen dark:hover:text-white dark:hover:bg-primaryGreen hover:text-white hover:bg-primaryGreen border-2 py-1 px-8 text-sm self-start rounded-md text-primaryGreen ml-6 md:ml-0">
                {buttonLabel}
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightContent;
