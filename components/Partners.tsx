import { useTranslation } from "next-i18next";
import Image from "next/image";
import { PartnerProps } from "../@types/partners";
import { cn } from "../lib/utils";

const Partners = ({
  title = "Partners who dream with us.",
  titleColor = "text-white",
  bg = "bg-dreamBlack",
  className,
}: PartnerProps) => {
  const { t } = useTranslation("hero");

  return (
    <section
      className={cn(
        `w-full flex flex-col items-center gap-16 md:gap-8 justify-start ${bg}`,
        className
      )}
    >
      <h3 className={`text-xl uppercase ${titleColor}`}>{title}</h3>
      <div className="flex md:flex-row flex-col items-center gap-24 justify-between">
        <Image src="/brand/bosch.svg" alt="Bosch" width={149} height={36} />
        <Image src="/brand/kodak.svg" alt="Kodak" width={64} height={76} />
        <Image src="/brand/porsche.svg" alt="Porshce" width={149} height={36} />
        <Image src="/brand/stihl.svg" alt="Stihl" width={149} height={36} />
        <Image
          src="/brand/wolkswagen.svg"
          alt="Wolkswagen"
          width={60}
          height={60}
        />
        <Image src="/brand/zeizz.svg" alt="Zeizz" width={72} height={72} />
      </div>
    </section>
  );
};

export default Partners;
