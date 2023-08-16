import { Fragment, useRef, useState, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { cn } from "~/lib/utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const solutions = [
  {
    name: "01. We buy the old",
    description: `After a constant market analysis for the best classic, we go
                  to the source of the question to buy the car in its current
                  condition. Today&apos;s rust is tomorrow&apos;s gold!`,
    href: "#",
  },
  {
    name: "02. We restore the classic",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "03. We share the profits",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
];

export default function FlyoutMenu({ className }) {
  // make accordions close when one is opened.
  const AccordionRefs = useRef([]); // store accordion buttons as Refs
  const [currentAccordion, setCurrentAccordion] = useState(0); // set the current
  const images = ["/living-the-dream.jpg", "/car-1.png", "/car-2.png"];
  function closeCurrent(e) {
    const button = e.target.closest("button"); // get the button
    const buttonParent = button.parentElement.parentElement; // get the buttons parent (<dt> tag here)
    const parent = buttonParent.parentElement; // get the buttons parent parent (Disclosure as div here)
    const index = Array.prototype.indexOf.call(parent.children, buttonParent); // find the index of the button in container
    // console.log("index", index);
    for (let i = 0; i < AccordionRefs.current.length; i++) {
      // loop throug
      if (
        AccordionRefs.current[i].querySelector("button") &&
        AccordionRefs.current[i]
          .querySelector("button")
          .getAttribute("aria-expanded") === "true" &&
        currentAccordion !== index // if it is opened and not the current
      ) {
        AccordionRefs.current[i].querySelector("button").click(); // then trigger a click to close it.
      }
    }
    setCurrentAccordion(index); // and set the current
  }
  return (
    <section
      className={cn(
        "flex flex-col md:flex-row mt-16 md:mt-0 md:gap-20 w-full justify-center items-start",
        className
      )}
    >
      <div
        className={cn(
          " md:w-4/5 w-full min-h-[528px] md:rounded-md bg-cover bg-center"
        )}
        style={{ backgroundImage: `url(${images[currentAccordion]})` }}
      >
        {/* <Image
          className="object-fill"
          src="/living-the-dream.jpg"
          width={644}
          height={528}
          alt="Living the dream"
        /> */}
      </div>
      <div className="flex flex-col pt-16 md:pt-[52px] w-full gap-8 md:gap-[52px] px-6 md:px-0">
        <div className="flex flex-col">
          <h3 className="uppercase font-light">Living the dream</h3>
          <h3 className="uppercase">Making money from it</h3>
        </div>
        <div className="w-full max-w-md rounded-2xl">
          {solutions.map((solution, index) => {
            return (
              <Disclosure
                as="div"
                className="pt-6"
                defaultOpen={index === 0 ? true : false}
                key={index}
              >
                {({ open }) => (
                  <>
                    <dt
                      onClick={closeCurrent}
                      ref={(el) => (AccordionRefs.current[index] = el)}
                    >
                      <Disclosure.Button
                        className={`flex w-full justify-between px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                          open ? "text-primaryGreen" : "text-black"
                        }`}
                      >
                        <span className="font-medium uppercase text-xl w-full flex gap-6">
                          {solution.name}
                        </span>
                        <span className="flex mt-4 ml-6 menuItems-center h-7">
                          <ChevronUpIcon
                            className={`${
                              open
                                ? "rotate-180 transform text-primaryGreen"
                                : "text-black"
                            } h-5 w-5 `}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2">
                      <div
                        className="w-full text-base text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: solution.description,
                        }}
                      ></div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
