import Link from "next/link";
import Contact from "../components/Contact";
import Accordion from "../components/faq/Accordion";

const faq = () => {
  return (
    <section className="flex w-full gap-12 mx-auto  items-center flex-col max-w-7xl">
      <h3 className="font-light">FREQUENTLY ASKED QUESTIONS</h3>
      <Accordion />
      <Contact />
    </section>
  );
};

export default faq;
