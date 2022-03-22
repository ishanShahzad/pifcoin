import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Questions } from "../../../data/AtlantenQuestion";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Faqs() {
  return (
    <section>
      <div className="">
        <dl className="">
          {Questions.map((faq) => (
            <Disclosure
              as="div"
              key={faq.question}
              className="w-full border-b border-gray-200  overflow-hidden mt-3"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg  pb-6">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-primary">
                      <p className="text-base font-SofiaPro-Bold">{faq.question}</p>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-8 w-8 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as="dd"
                    className="text-sm "
                  >
                    <p className="text-sm text-primary ">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
