import Link from "next/link";
import Contact from "../components/Contact";
import Accordion from "../components/faq/Accordion";

const faq = () => {
  return (
    <section className="flex w-full gap-12  flex-col">
      <div className="flex max-w-screen-lg w-full mx-auto  items-center flex-col">
        <h3 className="font-light">FREQUENTLY ASKED QUESTIONS</h3>
        <Accordion />
      </div>
      <Contact />
    </section>
  );
};

export default faq;
