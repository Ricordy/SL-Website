import { useTranslation } from "next-i18next";
import Image from "next/image";
import { PartnerProps } from "../@types/partners";

const Partners = ({
  title = "Partners who dream with us.",
  titleColor = "text-white",
  bg = "bg-dreamBlack",
}: PartnerProps) => {
  const { t } = useTranslation("hero");

  return (
    <section
      className={`w-full flex flex-col items-center justify-around min-h-[250px] ${bg}`}
    >
      <h3 className={`text-2xl uppercase pt-12 pb-6 ${titleColor}`}>{title}</h3>
      <div className="flex items-center gap-6 justify-between pb-24">
        <Image src="/brand/bosch.svg" alt="Bosch" width={149} height={36} />
        <Image src="/brand/kodak.svg" alt="Kodak" width={149} height={36} />
        <Image src="/brand/porsche.svg" alt="Porshce" width={149} height={36} />
        <Image src="/brand/stihl.svg" alt="Stihl" width={149} height={36} />
        <Image
          src="/brand/wolkswagen.svg"
          alt="Wolkswagen"
          width={149}
          height={36}
        />
        <Image src="/brand/zeizz.svg" alt="Zeizz" width={72} height={72} />
      </div>
    </section>
  );
};

export default Partners;