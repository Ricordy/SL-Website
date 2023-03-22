import { FC, ReactNode } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

interface ContentProps {
  title: ReactNode;
  subtitle: ReactNode;
  image: string;
  buttonLink: string;
  buttonLabel: string;
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
      <div className={`flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
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
          <Link href={buttonLink}>
            <a className="dark:border-primaryGreen dark:text-primaryGreen border p-1 px-3 text-sm self-start rounded-md text-primaryGreen">
              {buttonLabel}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightContent;
