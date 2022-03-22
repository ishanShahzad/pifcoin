import { Fragment } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import React, { useState } from "react";
import Popups from "./poups";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Profiledropdown() {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [btns, showbtn] = useState(false);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className=" border-gray-600 ">
            <i className="icon-users text-4xl  !ml-28 font-SofiaPro-Regular"></i>
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
          <Menu.Items className="z-50  absolute   -right-20 sm-right-24   w-[16.375rem] rounded-lg shadow-lg px-5  bg-[#1E1736]  divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) =>
                  btns === false ? (
                    <Button
                      onClick={() => {
                        setPopup(true);
                        setState(1);
                        showbtn(true);
                      }}
                      className=" text-base font-SofiaPro-Regular border border-blue w-full py-2.5 mt-6 bg-[rgba(12,147,205,0.16)]"
                    >
                      Connect Wallet
                    </Button>
                  ) : (
                    <Link href="/">
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-gray-900" : "",
                          "text-lg flex flex-col py- items-center  "
                        )}
                      >
                        <div className="flex   justify-between  w-full ">
                          <div className="flex items-center ">
                            <p className=" font-SofiaPro-Regular mt-6 text-sm ">
                              My Wallete
                            </p>
                            <i className="icon-bottom-angle text-xs mt-6 ml-2.5"></i>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm font-SofiaPro-Regular mt-6 text-offwhite">
                              0x162....99c57
                            </p>
                            <i className="icon-doc  text-xs mt-6 ml-2.5"></i>
                          </div>
                        </div>
                        <div className="bg-pink w-full h-[4.5rem] rounded-lg flex flex-col justify-center items-center mt-5">
                          <h3 className="text-sm ">Total Balance</h3>
                          <h6 className=" font-SofiaPro-Regular">$40.00</h6>
                        </div>
                      </a>
                    </Link>
                  )
                }
              </Menu.Item>
            </div>
            <div className="py-7 flex flex-col items-center gap-6 mt-2">
              <Menu.Item>
                {({ active }) => (
                  <Link href="">
                    <a
                      href=""
                      className={classNames(
                        active ? " text-gray-900" : "text-primary"
                      )}
                    >
                      <div className="bg-[rgba(233,233,233,0.08)] rounded-md h-[4.063rem] w-[13.375rem] justify-center flex items-center">
                        <figure className="">
                          <Image
                            src="/assets/images/campaigns/img7.png"
                            height={40}
                            width={40}
                            alt=""
                          />
                        </figure>
                        <div className="ml-2.5">
                          <p className="text-base font-SofiaPro-Regular text-offwhite">
                            Martin Ethen
                          </p>
                          <Link href="/profile">
                            <a>
                              <h6 className="text-sm text-blue">
                                View Profile
                              </h6>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <a
                      href=""
                      className={classNames(
                        active ? " text-gray-900" : "text-primary",
                        " text-lg  flex w-full items-center"
                      )}
                    >
                      <i className="icon-notification"></i>
                      <h6 className="ml-3 font-SofiaPro-Regular text-offwhite">
                        My Orders
                      </h6>
                    </a>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <a
                      href=""
                      className={classNames(
                        active ? " text-gray-900" : "text-primary",
                        "text-lg  flex w-full items-center  "
                      )}
                    >
                      <i className="icon-heart2"></i>
                      <h6 className="ml-3 font-SofiaPro-Regular text-offwhite">
                        Favorites
                      </h6>
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/notification">
                  <a
                   
                    className={classNames(
                      active ? "text-red-700" : "text-red-500",
                      "text-lg    w-full "
                    )}
                  >
                    <div className=" flex items-center">
                      <i className="icon-notification"></i>

                      <h6 className="ml-3 font-SofiaPro-Regular">
                        Notifications
                      </h6>
                      <p className="bg-[#F24822] text-sm h-[23px] w-[23px] rounded-full text-center mt-1 ml-2.5">
                        9+
                      </p>
                    </div>
                    <hr className="mt-7" />
                  </a>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/login"
                    className={classNames(
                      active ? "text-red-700" : "text-red-500",
                      "text-lg    w-full "
                    )}
                  >
                    <div className=" flex items-center">
                      <i className="icon-logout text-[#F24822]"></i>

                      <h6 className="ml-3 font-SofiaPro-Regular text-[#F24822]">
                        Logout
                      </h6>
                    </div>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {state && (
        <Popups
          show={popup}
          hide={setPopup}
          state={state}
          setstate={setState}
        />
      )}
    </div>
  );
}
