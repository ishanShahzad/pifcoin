
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Iprops{
  data?:any;
  className?:string;
}
export default function Select({data,className}:Iprops) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative w-full ">
            <Listbox.Button className={`${className} w-full bg-graydull flex items-center justify-between relative text-base font-SofiaPro -mt-1  border pb-5 border-primary rounded-md shadow-sm px-4  py-4 cursor-default focus:outline-none`}>
              <span className="block truncate">{selected.name}</span>
              <span className=" inset-y-0 right-0 flex items-center  pointer-events-none">
                <i className="icon-bottom-angle text-sm font-SofiaPro-Regular"></i>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute  z-10 mt-2 w-full AtOptioncolor shadow-lg rounded-md py-2 text-lg ">
                {data.map((person:any) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-graydull" : "text-offwhite",
                        "cursor-pointer select-none relative py-2  pl-3 "
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
