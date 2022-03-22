import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

interface Iprops {
  title: string;
  className?: string;
  mainclass?: string;
  data: Array<any>;
  icon?: any;
  iconClass?: string;
  fontclass?: string;
}

const Dropdown = ({
  title,
  className,
  iconClass,
  data,
  icon,
  mainclass,
  fontclass,
}: Iprops) => {
  return (
    <Menu
      as="div"
      className={`relative inline-block text-left ${mainclass} ${
        icon &&
        `bg-white ${iconClass}  px-6 w-40 py-4 rounded-md whitespace-nowrap`
      }`}
    >
      <div>
        <Menu.Button
          className={`flex items-center ${fontclass}  font-Poppins-SemiBold`}
        >
          <span className="sr-only">Open options</span>
          {title}{" "}
          {icon && <i className="icon-arrow-bottom text-[6.3px] ml-8  "></i>}
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
        <Menu.Items
          className={`${className} origin-top-right absolute z-50  lg:right-0 mt-2 md:w-60 rounded-md  py-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className={` py-1`}>
            {data?.map((item, i) => (
              <Menu.Item key={i}>
                <a
                  href="#"
                  className="hover:bg-gray-200 text-primary  px-6 hover:text-gray-700 block py-2"
                >
                  {item.name}
                  {item.coming && (
                    <span className="text-secondary ml-1 font-Poppins-Medium text-xs">
                      {item.coming}
                    </span>
                  )}
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
