import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { classNames, cn } from "../lib/utils";
import { FC } from "react";

interface AccordionProps {
  className?: string;
}
const Accordion: FC<AccordionProps> = ({ className }) => {
  return (
    <section
      className={cn("flex gap-20 w-full justify-center items-start", className)}
    >
      <div className="flex w-4/5 min-h-[528px] rounded-md bg-cover bg-center bg-[url('../public/living-the-dream.jpg')]">
        {/* <Image
          className="object-fill"
          src="/living-the-dream.jpg"
          width={644}
          height={528}
          alt="Living the dream"
        /> */}
      </div>
      <div className="flex flex-col pt-[52px] w-full gap-[52px]">
        <div className="flex flex-col">
          <h3 className="uppercase font-light">Living the dream</h3>
          <h3 className="uppercase">Making money from it</h3>
        </div>
        <div className="w-full max-w-md rounded-2xl">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
                    event.currentTarget.click()
                  }
                  className={`flex w-full justify-between px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                    open ? "text-primaryGreen" : "text-black"
                  }`}
                >
                  <span className="font-medium uppercase text-xl w-full flex gap-6">
                    <span>01.</span>
                    <span>We buy the old</span>
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open
                        ? "rotate-180 transform text-primaryGreen"
                        : "text-black"
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  After a constant market analysis for the best classic, we go
                  to the source of the question to buy the car in its current
                  condition. Today&apos;s rust is tomorrow&apos;s gold!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
                    event.currentTarget.click()
                  }
                  className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                    open ? "text-primaryGreen" : "text-black"
                  }`}
                >
                  <span className="font-medium uppercase text-xl flex gap-6">
                    <span>02.</span>
                    <span>We restore the classic</span>
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open
                        ? "rotate-180 transform text-primaryGreen"
                        : "text-black"
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  We start disassembling the car, removing all components and
                  parts that require restoration! These parts are then cleaned,
                  repaired, or replaced as necessary. Once the car is fully
                  assembled, it&apos;s time for the final touch-up and testing.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
                    event.currentTarget.click()
                  }
                  className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                    open ? "text-primaryGreen" : "text-black"
                  }`}
                >
                  <span className="font-medium uppercase text-xl flex gap-6">
                    <span>03.</span>
                    <span>We share the profits</span>
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open
                        ? "rotate-180 transform text-primaryGreen"
                        : "text-black"
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  It seems complex but in fact it is a question of numbers and
                  against data there are no arguments. We evaluate the amount
                  spent versus the return on the sale and apply the percentage
                  due proportional to the value of your investment!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
