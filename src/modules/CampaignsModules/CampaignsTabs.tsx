import React, { useState } from "react";
import { Compaignsdata } from "../../data/Compaignsdata";
import { Compaignscard } from "../../components/campaignscard/Campaignscard";

const tabs = [
  { name: "All Compaigns", current: false },
  { name: "Active Compaigns", current: true },
  { name: "Completed Compaigns", current: false },
];
const CompaignsTabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <>
      <div
        className=" lg:flex flex-wrap items-center gap-3  my-1  md:justify-between      ]"
        aria-label="Tabs"
      >
        <div className="border border-b-[#C0B6B6]    border-transparent flex flex-wrap items-center gap-3   ">
          {tabs.map((tab, i) => (
            <a
              key={i}
              className={` px-4 py-6 cursor-pointer   !text-lg whitespace-nowrap   !text-[#C0B6B6]
                ${
                  i === selectedTabIdx &&
                  " border-b-[4px] border-pink !text-pink     "
                }
                `}
              onClick={() => setSelectedTabIdx(i)}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
      {selectedTabIdx === 0 && (
        <div className="grid xl:grid-cols-2 gap-8">
          {Compaignsdata?.map((item, i) => {
            return <Compaignscard {...item} ind={i} />;
          })}
        </div>
      )}
      {selectedTabIdx === 1 && (
         <div className="grid xl:grid-cols-2 gap-8">
         {Compaignsdata?.map((item, i) => {
           return <Compaignscard {...item} ind={i} />;
         })}
       </div>
      )}
      {selectedTabIdx === 2 && (
         <div className="grid xl:grid-cols-2 gap-8">
         {Compaignsdata?.map((item, i) => {
           return <Compaignscard {...item} ind={i} />;
         })}
       </div>
      )}
    </>
  );
};
export default CompaignsTabs;
