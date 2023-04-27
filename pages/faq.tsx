import Link from "next/link";
import Contact from "../components/Contact";
import Accordion from "../components/faq/Accordion";

const faq = () => {
  return (
    <section className="flex w-full gap-[132px]  flex-col">
      <div className="flex max-w-screen-lg pt-[52px] w-full mx-auto gap-[52px]  items-center flex-col">
        <h3 className="font-light">FAQ&apos;S</h3>
        <Accordion />
      </div>
      <Contact
        title="Something in your
legendary mind?"
      />
    </section>
  );
};

export default faq;
