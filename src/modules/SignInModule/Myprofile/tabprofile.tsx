import React, { useState } from "react";
import Input from "../../../components/input/Input";
import MainCard from "../../../components/maincard/MainCard";
import { Profiledata } from "../../../data/Profiledata";
import Select from "../../../components/select/Select";
import Dropdown from "../../../components/dropdown/Dropdown";
import { Data1, Data2 } from "../../../data/MarketDropData";

const tabs = [
  { name: "Owned NFTs", current: false },
  { name: "For Sale NFTs", current: true },
  { name: "Sold NFTs", current: false },
];
const Tabsprofile = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <>
      <div
        className=" lg:flex flex-wrap items-center gap-3  mt-5     md:justify-between ]"
        aria-label="Tabs"
      >
        <div className="border border-b-[#C0B6B6]   w-auto  inline-flex   border-transparent  flex-wrap items-center gap-3    ">
          {tabs.map((tab, i) => (
            <a
              key={i}
              className={` px-4 py-6 cursor-pointer   !text-lg whitespace-nowrap    !text-[#C0B6B6]
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
        <div className=" lg:w-[60%] w-[100%] sm:flex  gap-4  lg:mt-3 mt-8   lg:justify-end items-center ">
          <Input
            className="pl-7  placeholder:text-[#E9E9E9] "
            styles="sm:w-[53%] py-2.5"
            icon=" icon-refresh2 mt-1   text-lg"
            placeholder="Search"
          />
          <div className="flex gap-4 sm:mt-0 mt-4 items-center">
            <Select
              data={Data1}
              className="sm:w-[139px]  max-w-[270px]  text-primary  pl-2  pr-3 py-3 pb-3 "
            />
            <Select
              data={Data2}
              className="sm:w-[139px] max-w-[270px]    text-primary pl-2  pr-3 py-3 pb-3  "
            />
          </div>
        </div>
      </div>
      {selectedTabIdx === 0 && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-8 mt-9 pb-24 ">
          {Profiledata?.map((item, i) => {
            return <MainCard {...item} ind={i} />;
          })}
        </div>
      )}
      {selectedTabIdx === 1 && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-8 mt-9 pb-24">
          {Profiledata?.map((item, i) => {
            return <MainCard {...item} ind={i}
            pricetype="Current Price"
            pifprice="0.005 PIF"
            usaprice="(250 USD)"
             />;
          })}
        </div>
      )}
      {selectedTabIdx === 2 && (
        <div className="grid xl:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-8 mt-9 pb-24">
          {Profiledata?.map((item, i) => {
            return (
              <MainCard
                {...item}
                ind={i}
                owned="Marcusys Agton"
                src1="/assets/images/compaigndetail/img15.png"
                pricetype="Current Price"
                pifprice="0.005 PIF"
                usaprice="(250 USD)"
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Tabsprofile;
