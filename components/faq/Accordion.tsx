import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button";
import { classNames, cn } from "../../lib/utils";
import { FC } from "react";

interface AccordionProps {
  className?: string;
}

const FAQItems = [
  {
    title: "01. What is Something Legendary?",
    description: `Something Legendary is an investment platform that focuses on the purchase, restoration, and sale of classic cars. It utilizes Web 3.0 tools for ease of financial use and incorporates gamification elements.`,
  },
  {
    title: "02. How does Something Legendary work?",
    description: ` - Investors acquire a Something Legendary Membership Card to access the platform. 
   - With the Membership Card, investors choose a classic car for investment.
   - They invest in stablecoin (USDC/USDT) for predictability.
   - When 80% of required funds are secured, the platform purchases and restores the car, providing real-time updates.
   - Upon successful sale, profits are distributed to investors in stablecoin format.
`,
  },
  {
    title: `03. How can I get a Something Legendary Membership Card?`,
    description: `Access to the platform is exclusive to Something Legendary Membership Card holders. You can acquire the card through the platform's registration process.`,
  },
];
const Accordion: FC<AccordionProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col w-2/3 mt-12", className)}>
      {FAQItems.map((item, index) => (
        <Disclosure as="div" className="mt-2" defaultOpen={index === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primaryGreen focus-visible:ring-opacity-75 border-b border-b-contactBackground ${
                  open ? "text-primaryGreen" : "text-faqInactive"
                }`}
              >
                <span className="font-normal uppercase text-xl">
                  {item.title}
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
                {item.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      {/* <Button className="mt-[52px]" variant="outline">
        See more
      </Button> */}
    </div>
  );
};

export default Accordion;
