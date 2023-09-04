import Link from "next/link";
import Contact from "../components/Contact";
import Accordion from "../components/faq/Accordion";

const faq = () => {
  return (
    <section className="flex w-full gap-[132px]  flex-col pb-[132px]">
      <div className="flex max-w-screen-lg pt-[52px] w-full mx-auto gap-[52px]  items-center flex-col">
        <h3 className="font-light">FAQ</h3>
        <Accordion />
      </div>
    </section>
  );
};

export default faq;
