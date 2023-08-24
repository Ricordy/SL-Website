import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button";
import { classNames, cn } from "../../lib/utils";
import { FC } from "react";

interface AccordionProps {
  className?: string;
}
const Accordion: FC<AccordionProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col w-2/3 mt-12", className)}>
      <Disclosure defaultOpen={true} as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-contactBackground ${
                open ? "text-primaryGreen" : "text-faqInactive"
              }`}
            >
              <span className="font-normal uppercase text-xl">
                01. We buy the old
              </span>
              <ChevronUpIcon
                className={`${
                  open
                    ? "rotate-180 transform text-primaryGreen"
                    : "text-faqInactive"
                } h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 max-w-3xl">
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-contactBackground ${
                open ? "text-primaryGreen" : "text-faqInactive"
              }`}
            >
              <span className="font-normal uppercase text-xl">
                02. We restore the classic
              </span>
              <ChevronUpIcon
                className={`${
                  open
                    ? "rotate-180 transform text-primaryGreen"
                    : "text-faqInactive"
                } h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 max-w-3xl">
              We start disassembling the car, removing all components and parts
              that require restoration! These parts are then cleaned, repaired,
              or replaced as necessary. Once the car is fully assembled,
              it&apos;s time for the final touch-up and testing.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-contactBackground ${
                open ? "text-primaryGreen" : "text-faqInactive"
              }`}
            >
              <span className="font-normal uppercase text-xl">
                03. We share the profits
              </span>
              <ChevronUpIcon
                className={`${
                  open
                    ? "rotate-180 transform text-primaryGreen"
                    : "text-faqInactive"
                } h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <Button className="mt-[52px]" variant="outline">
        See more
      </Button> */}
    </div>
  );
};

export default Accordion;
