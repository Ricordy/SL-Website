import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Accordion = () => {
  return (
    <section className="flex gap-20 w-full justify-center items-start">
      <div className="flex w-4/5 min-h-[528px] bg-cover bg-center bg-[url('../public/living-the-dream.jpg')]">
        {/* <Image
          className="object-fill"
          src="/living-the-dream.jpg"
          width={644}
          height={528}
          alt="Living the dream"
        /> */}
      </div>
      <div className="flex flex-col pt-12 w-full gap-6">
        <div className="flex flex-col">
          <h3 className="uppercase font-light">Living the dream</h3>
          <h3 className="uppercase">Making money from it</h3>
        </div>

        <div className="w-full max-w-md rounded-2xl">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button
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
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
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
                  No.
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
