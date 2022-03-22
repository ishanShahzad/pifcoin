import React, { useState } from "react";
import { TestimonialsCard } from "../../components/testimonialscard/TestimonialsCard";
import { Testimonialsdata } from "../../data/Testimonialsdata";
import { QuotesTestimonials } from "../../data/QuotesTestimonials";
const tabs = [
  { name: "Videos Testimonials", current: false, rate: "06" },

  { name: "Quotes Testimonials", current: true, rate: "12" },
];
const TestimonialsTabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <>
      <div
        className=" lg:flex flex-wrap items-center gap-3  my-7  md:justify-between      ]"
        aria-label="Tabs"
      >
        <div className="border border-b-[#C0B6B6] mt-6  border-transparent  flex flex-wrap items-center gap-8  ">
          {tabs.map((tab, i) => (
            <a
              key={i}
              className={` px-4 py-6 cursor-pointer  font-SofiaPro-Bold  !text-lg whitespace-nowrap    !text-[#C0B6B6]
                ${
                  i === selectedTabIdx &&
                  " border-b-[4px] border-pink !text-pink "
                }
                `}
              onClick={() => setSelectedTabIdx(i)}
            >
              {tab.name}
              <p
                className={`text-base  ml-4 text-primary border border-white rounded-md  bg-[rgba(192,182,183,0.2)]  inline-block px-2 py-1
   ${i === selectedTabIdx && " !border !border-pink bg-[rgba(208,47,199,0.3)]"}
`}
              >
                {tab.rate}
              </p>
            </a>
          ))}
        </div>
        <p className="text-blue mt-8 "> See All Products</p>
      </div>
      {selectedTabIdx === 0 && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8">
          {Testimonialsdata.map((item, i) => {
            return <TestimonialsCard {...item} />;
          })}
        </div>
      )}
      {selectedTabIdx === 1 && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {QuotesTestimonials.map((item, i) => {
            return <TestimonialsCard {...item} />;
          })}
        </div>
      )}
    </>
  );
};
export default TestimonialsTabs;
