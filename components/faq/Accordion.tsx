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
  {
    title: `04. What kind of cars can I invest in?`,
    description: `Something Legendary offers a selection of classic cars with detailed technical data and valuation insights.`,
  },
  {
    title: `05. What is the expected profit margin for investors?`,
    description: `Profit margins for investors range from 12% to 20%, depending on the investment level.`,
  },
  {
    title: `06. What are PUZZLE NFTs and LEVEL NFTs?`,
    description: ` - PUZZLE NFTs are awarded for every $5000 investment (Level 1) and can be collected to unlock LEVEL NFTs.
   - LEVEL NFTs provide access to higher-value investments, increased returns, and exclusive events while retaining access to previous levels.
`,
  },
  {
    title: `07. How do I assemble the PUZZLE NFTs and progress to LEVEL NFTs?`,
    description: `Collect 10 distinct PUZZLE NFTs to complete your current level and exchange them for the next LEVEL NFT.`,
  },
  {
    title: `08. Can I access previous levels or investments after progressing to a higher level?`,
    description: `Yes, you maintain access to previous levels and can continue to invest in them.`,
  },
  {
    title: `09. Is Something Legendary open to international investors?`,
    description: ` Yes, Something Legendary is open to investors from around the world.`,
  },
  {
    title: `10. How can I stay updated on my investments and the restoration process?`,
    description: `Something Legendary provides real-time visual updates through photos and videos on the platform.`,
  },
  {
    title: `11. How can I stay updated on my investments and the restoration process?`,
    description: `The platform is designed to initiate sales early in the restoration process to minimize delays. However, if a sale isn't successful, the platform will address the situation transparently with investors.`,
  },
];
const Accordion: FC<AccordionProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col w-2/3 mt-12", className)}>
      {FAQItems.map((item, index) => (
        <Disclosure
          as="div"
          className="mt-2"
          defaultOpen={index === 0}
          key={index}
        >
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
