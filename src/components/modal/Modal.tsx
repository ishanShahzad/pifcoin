import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Iprops {
  className?: string;
  children: any;
  show: any;
  hide: any;
  state?: any;
  setstate?: any;
  close?: string;
}
export default function Modal({
  show,
  hide,
  close,
  children,
  className,
  setstate,
}: Iprops) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0  " onClose={hide}>
        <div className=" flex items-center justify-center min-h-screen pt-4 xs:px-0  px-8 pb-10  text-center sm:block sm:p-0 box-decoration-slice">
          <Transition.Child>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 0transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`${className}  inline-block align-top bg-[#271B44]  rounded-xl  overflow-hidden shadow-xl transform transition-all sm:align-middle`}
          >
            <div
              className={`${
                close == "close" ? "hidden" : ""
              } absolute top-4 right-4 h-9 w-9 bg-[#282951] flex justify-center items-center border border-[#34365B] rounded-full`}
            >
              <button
                type="button"
                className=" text-[#7C7EBB] text-2xl hover:text-gray-500 focus:outline-none"
                onClick={() => {
                  hide(false);
                }}
              >
                <span className="sr-only">Close</span>
                <AiOutlineCloseCircle />
              </button>
            </div>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
