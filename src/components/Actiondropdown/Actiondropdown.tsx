import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Iprops{
  icon?:string;
  title?:string;
  data:any;
}

const Actiondropdown = (props:any) => {
  console.log(dropdownData,"this is data")
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full ">
          <button className="w-[2.625rem] h-[2.625rem] leading-[2.625rem] bg-graydull rounded-[7px] align-middle">
            <svg
              className="m-auto"
              width="6"
              height="20"
              viewBox="0 0 6 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="2.5" r="2.5" fill="white" />

              <circle cx="3" cy="10" r="2.5" fill="white" />

              <circle cx="3" cy="17.5" r="2.5" fill="white" />
            </svg>
          </button>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 min-w-[250px] rounded-md  bg-[#1E1736] ">
          <div className="py-1">
            {props.data.map((item:any)=>(
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700 ",
                      " px-4 py-3 text-lg flex items-center "
                    )}
                  >
                    <i className={item.icon}></i>
                    <h6 className=" font-SofiaPro-Regular text-offwhite ml-4">
                      {item.title}
                    </h6>
                  </a>
                )}
              </Menu.Item>
            ))}
            
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    " px-4 py-3 text-lg flex items-center"
                  )}
                >
                  <i className={props.icon}></i>
                  <h6 className=" font-SofiaPro-Regular text-offwhite ml-4">
                    {props.title}
                  </h6>
                </a>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Actiondropdown;
function dropdownData(dropdownData: any, arg1: string) {
  throw new Error("Function not implemented.");
}

