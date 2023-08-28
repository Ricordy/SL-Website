import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

interface CarouselItemProps {
  title: string;
  image: string;
  name?: string;
  lastName?: string;
  description?: string;
}

const chiefsInfo = [
  {
    title: "Chief of Finantial Office",
    name: "Gonçalo",
    lastName: "Severino",
    image: "/chiefs/Gonçalo.svg",
    description: `Gonçalo Severino, formação em gestão. Desde cedo, senti que o ensino escolar não era suficiente para atingir a alta performance no mundo supersónico em que vivemos. Isso motivou-me pessoalmente a ingressar no mundo económico e financeiro para realmente compreender e aprender como funciona uma das vertentes mais importantes da sociedade de hoje em dia. Isso acabou por me levar ao mercado de ações aos 18 anos. Cedo ganhei interesse pelo mercado de Criptomoedas e, posteriormente, de NFTs. Decidi que não queria ser mais um peixe no mar e a minha grande preocupação no primeiro ano não foi ganhar dinheiro, mas sim entender realmente como funciona. Quando ainda estava no meu segundo ano de faculdade, comecei a prestar serviços de consultoria a empresários individuais e a algumas empresas, nomeadamente agências de publicidade e marketing. No início de 2022, comecei a trabalhar com o meu atual sócio onde formamos uma empresa (Web 360 Labs) de prestação de serviços 360º em tudo o que toca à Web 3.0 (blockchain, criptomoedas, NFTs), desde o aconselhamento legal e financeiro, ao desenvolvimento "hands-on" informático e tudo o que toca na criação de marca, marketing e definição do modelo de negócio. O nosso objetivo é transformar ideias em produtos prontos para o consumidor final.`,
  },
  {
    title: "Chief Executive Officer",
    name: "João",
    lastName: "Fernandes",
    image: "/chiefs/joao.jpg",
    description: `I'm a person with a variety of interests and experiences, but one thing that has always captivated me is classic cars. As an entrepreneur and investor, I've had the opportunity to establish successful companies in several industries, including architecture, restaurants, and real estate investments. I was also part of the team that founded a company in stem cells in the UK that was listed on the stock market. My passion for innovation has also led me to establish a web3 consulting company, where I can explore new and exciting ideas in the tech space.

My extensive travels around the world and establishment of companies on four different continents have given me a global perspective and the ability to adapt to diverse cultures and markets. Additionally, as the honorary consul of Albania, I'm dedicated to public service and community engagement.

However, it's my love for investing in and restoring classic cars that lead me to create Something Legendary.  With my unique combination of expertise in classic cars and web3 technology, I believe I can bring fresh ideas and new approaches to the classic car industry. Ultimately, my goal is to make a positive impact on the world and leave a lasting legacy through my work.`,
  },
  {
    title: "BOSS of repairs",
    name: "João",
    lastName: "Dias",
    image: "/chiefs/gonçalo3.jpg",
    description: `João Dias, formação de engenharia, 32 anos, nos últimos 15 ligado e no meio dos carros desportivos e clássicos. Com formação feita e experiência ganha entre oficinas de restauro, colecionadores, corridas e concursos, foi chefe de oficina com apenas 22 anos liderando uma equipa de 17 "mestres" do restauro pelo conhecimento, gosto e capacidade de fazer acontecer. Em 2016 cria a True Legend e destaca-se pela organização, critério e qualidade. Vários prémios de restauro ganhos em Portugal e Alemanha, presença nos mais importantes eventos internacionais, projectos de restauro muito especiais e visão das possibilidades de investimento que o mercado tem para oferecer.`,
  },
];

const CarouselItem = ({
  title,
  image,
  name,
  lastName,
  description,
}: CarouselItemProps) => {
  return (
    <div className="flex md:flex-row w-full flex-col md:w-[850px] md:gap-12 md:rounded-md">
      <div
        className={cn(
          "flex w-[400px] md:w-1/2 items-center justify-center rounded-md bg-cover relative md:flex-row flex-col gap-3 ",
          image
        )}
      >
        <Image
          src={image}
          className="rounded-lg w-fit h-fit "
          width={440}
          height={600}
          alt="Gonçalo Severino"
        />
      </div>
      <div className="flex flex-col md:justify-start w-full md:items-start md:w-1/2 pt-[52px] px-6 md:px-0 ">
        <div className="text-tabInactive flex uppercase">{title}</div>
        <h3 className="uppercase pb-8 flex w-full gap-1 justify-start ">
          <span className="text-primaryGreen ">{name}</span>
          <br />
          <span>{lastName}</span>
        </h3>
        <p className="w-full flex md:text-left text-justify">{description}</p>
      </div>
    </div>
  );
};

interface CarouselProps {
  id: string;
  className?: string;
}

const Carousel: FC<CarouselProps> = ({ id, className }) => {
  return (
    <section
      className={cn(
        "mx-auto flex flex-col gap-8 w-full max-w-screen-lg",
        className
      )}
    >
      <div className="flex gap-12">
        <div className="flex w-full swiper-wrapper ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            className="swiper w-full"
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            pagination={{
              clickable: true,
              el: `.swiper-pagination-${id}`,
            }}
            navigation={{
              nextEl: `.swiper-next-${id}`,
              prevEl: `.swiper-prev-${id}`,
            }}
            updateOnWindowResize
            observer
            observeParents
            initialSlide={0}
            // loop={true}
          >
            {chiefsInfo.map((item, index) => (
              <SwiperSlide key={index} className="w-[400px]">
                <CarouselItem
                  title={item.title}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  lastName={item.lastName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center  w-1/5 mx-auto">
        <div className={`flex relative swiper-prev-${id}`}>
          <Image
            src="/icons/pagination-prev.svg"
            width={20}
            height={15}
            alt="Previous"
          />
        </div>
        <div
          className={`flex justify-center items-center gap-1 text-black swiper-pagination-${id}`}
        />
        <div className={`flex relative swiper-next-${id}`}>
          <Image
            src="/icons/pagination-next.svg"
            width={20}
            height={15}
            alt="Next"
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
