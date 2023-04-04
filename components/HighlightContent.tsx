import { FC, ReactNode } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

interface ContentProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  buttonLink?: string;
  buttonLabel?: string;
  reverse?: boolean;
  children: ReactNode;
}

const HighlightContent: FC<ContentProps> = ({
  title,
  subtitle,
  image,
  buttonLink,
  buttonLabel,
  children,
  reverse = false,
}) => {
  return (
    <section className="w-full">
      <div
        className={`flex gap-6 items-center ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <Image
          className="rounded-md"
          src={image}
          width={644}
          height={528}
          alt=""
        />
        <div className="flex flex-col p-16 w-1/2 gap-6">
          <div className="flex flex-col">
            {title}
            {subtitle}
          </div>
          {children}
          {buttonLink && buttonLabel && (
            <Link href={buttonLink}>
              <a className="uppercase dark:border-primaryGreen dark:text-primaryGreen dark:hover:text-white dark:hover:bg-primaryGreen hover:text-white hover:bg-primaryGreen border-2 py-1 px-8 text-sm self-start rounded-md text-primaryGreen">
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
