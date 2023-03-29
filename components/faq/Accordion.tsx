import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Accordion = () => {
  return (
    <div className="flex flex-col w-2/3 mt-12 mb-24">
      <Disclosure defaultOpen={true} as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                open ? "text-primaryGreen" : "text-black"
              }`}
            >
              <span className="font-medium w-50 uppercase text-xl">
                01. We buy the old
              </span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform text-primaryGreen" : "text-black"
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
              className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                open ? "text-primaryGreen" : "text-black"
              }`}
            >
              <span className="font-medium uppercase text-xl">
                02. We restore the classic
              </span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform text-primaryGreen" : "text-black"
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
              className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-black ${
                open ? "text-primaryGreen" : "text-black"
              }`}
            >
              <span className="font-medium uppercase text-xl">
                03. We share the profits
              </span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform text-primaryGreen" : "text-black"
                } h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
