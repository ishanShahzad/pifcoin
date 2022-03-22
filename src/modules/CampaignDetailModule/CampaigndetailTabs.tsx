import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Input from "../../components/input/Input";
import MainCard from "../../components/maincard/MainCard";
import Select from "../../components/select/Select";
import { CompaignNftData } from "../../data/CompaginNftData";
import { Data1, Data2 } from "../../data/MarketDropData";
import { Solidnftdata } from "../../data/Solidnftdata";
const tabs = [
  { name: " For Sale NFTs ", current: false },
  { name: "Sold NFTs", current: true },
];
const CampaigndetailTabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <>
      <div
        className=" lg:flex flex-wrap items-center gap-3     md:justify-between      ]"
        aria-label="Tabs"
      >
        <div className="border border-b-[#C0B6B6] mt-3  border-transparent flex flex-wrap items-center gap-3   ">
          {tabs.map((tab, i) => (
            <a
              key={i}
              className={` px-4 py-6 cursor-pointer   !text-lg whitespace-nowrap   !text-[#C0B6B6]
                ${
                  i === selectedTabIdx &&
                  " border-b-[3px] border-pink !text-pink"
                }
                `}
              onClick={() => setSelectedTabIdx(i)}
            >
              {tab.name}
            </a>
          ))}
        </div>
        <div className=" lg:w-[70%] w-[100%] sm:flex  gap-4  lg:mt-0   mt-8  lg:justify-end items-center ">
          <Input
            className="pl-7  placeholder:text-[#E9E9E9] "
            styles="sm:w-[43%] py-2.5"
            icon=" icon-refresh2 mt-1   text-lg"
            placeholder="Search"
          />
          <div className="flex gap-4 sm:mt-0 mt-4 items-center">
            <Select
              data={Data1}
              className="sm:w-[139px]  w-[130px]  text-primary  pl-2  pr-3 py-3 pb-3 "
            />
            <Select
              data={Data2}
              className="sm:w-[139px] w-[130px]    text-primary pl-2  pr-3 py-3 pb-3  "
            />
          </div>
        </div>
      </div>
      {selectedTabIdx === 0 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  mt-14   gap-8">
          {CompaignNftData?.map((item, i) => {
            return <MainCard {...item} ind={i} owned="" />;
          })}
        </div>
      )}

      {selectedTabIdx === 1 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  mt-14   gap-8">
          {Solidnftdata?.map((item, i) => {
            return <MainCard {...item} />;
          })}
        </div>
      )}
    </>
  );
};
export default CampaigndetailTabs;
