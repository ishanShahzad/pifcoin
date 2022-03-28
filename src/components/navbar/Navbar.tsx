import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
  { name: "Marketplace", href: "#", current: true },
  { name: "Explore", href: "#", current: false },
  { name: "Sign In", href: "#", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-3xl">
      {({ open }) => (
        <>
          <div className="max-w-[1776px] mx-auto container ">
            <div className="flex justify-between py-7">
              <div className="flex justify-between w-full md:w-auto">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="border-2 ml-1 p-2  text-gray-900  hover:bg-none  ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/assets/images/logo.svg"
                    height={35}
                    width={190}
                    alt="Atlanten logo"
                  />
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary text-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden ">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-8 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-primary text-lg block bg-gray-200 border-gray-500  pl-3 pr-4 py-2 border-l-4  "
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
