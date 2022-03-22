import React from "react";
import { Disclosure } from "@headlessui/react";

interface Iprops {
  children: any;
  heading: string;
  charityDetail?:any;
  btnStyle?:any;
  iconStyle?:any;

}

const ToggleDisclosure = ({ children, heading, charityDetail, btnStyle, iconStyle}: Iprops) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Disclosure
        as="div"
        key=""
        className={`${charityDetail} rounded-lg px-[1.12rem] py-[1.15rem]  mb-6 bg-black1 `}
      >
        {({ open }) => (
          <>
            <Disclosure.Button className={`${btnStyle} w-full flex justify-between  items-center`}>
              <p className=" text-offwhite">{heading}</p>
              <i
                className={classNames(
                  open ? `-rotate-180 ${iconStyle} ` : "'${iconStyle} rotate-0 bg-pink'",
                  "transform icon-bottom-angle text-sm font-SofiaPro-Regular transition duration-400 borders rounded-md  p-1.5 "
                )}
                aria-hidden="true"
              ></i>
            </Disclosure.Button>
            <Disclosure.Panel as="dd" className="mt-2">
              {children}
            </Disclosure.Panel>
          </> 
        )}
      </Disclosure>
    </div>
  );
};

export default ToggleDisclosure;
