/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
MyLink.displayName = "MyLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventsMenu() {
  const { t } = useTranslation("about-us");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-transparent font-medium text-slate-300 hover:text-slate-200 focus:outline-none focus:ring-indigo-500">
          {t("about-us.section-title")}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/#about-us"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {t("about-us.who-we-are")}
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/mission"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {t("about-us.mission")}
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/#contact"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {t("about-us.contact")}
                </MyLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
