import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Profiledropdown from "../dropdown/ProfileDropdown";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "PIF Essentials", href: "/PIFEssentails", current: false },
  { name: "Campaigns", href: "/campaigns", current: false },
  { name: "Marketplace", href: "/marketplace", current: false },
  { name: "About Us", href: "/aboutus", current: false },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <Disclosure
      as="nav"
      className="xl:flex xl:sticky top-0 z-30 xl:justify-center navimage  xl:bg-transparent px-6 xl:px-0 w-full"
    >
      {({ open }) => (
        <>
          <div className="z-50 w-full xl:w-auto">
            <div className="flex justify-between py-2.5 ">
              <div className="flex justify-between flex-row-reverse xl:pr-40 w-full ">
                <div className="flex items-center xl:hidden">
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
                  <figure className="mt-2">
                    <Image
                      src="/assets/images/logo.svg"
                      height={82}
                      width={86}
                      alt="Atlanten logo"
                    />
                  </figure>
                </div>
              </div>
              <div className="hidden md:ml-6 xl:flex md:items-center md:space-x-14  whitespace-nowrap">
                {navigation.map((item) => (
                  <Link href={item.href}>
                    <a
                      key={item.name}
                      className={` py-1 text-red-500 text-xl border-b-2  ${
                        router.pathname == item.href
                          ? " !border-blue1  border-b-2 !text-white"
                          : "!border-none"
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                {router.pathname == "/" ||
                router.pathname == "/login" ||
                router.pathname == "/signin" ? (
                  <Link href="/login">
                    <a href="#">
                      <Button className="2xl:ml-32 px-7 text-lg"> Login/Register</Button>
                    </a>
                  </Link>
                ) : (
                  <Profiledropdown />
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden ">
            <div className=" pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-primary text-xl block bg-[#252144] pl-4 py-3"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {router.pathname == "/" ||
              router.pathname == "/login" ||
              router.pathname == "/signin" ? (
                <Link href="/login">
                  <a href="#">
                    <Button className="2xl:ml-8 px-14 mt-4 w-full">
                    Login/Register
                    </Button>
                  </a>
                </Link>
              ) : (
                <Profiledropdown />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
