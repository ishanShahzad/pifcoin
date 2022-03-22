import React, { useState } from "react";
import MainCard from "../../../components/maincard/MainCard";
import { Charitydata } from "../../../data/charitydata";
const tabs = [
  { name: "LA Decentralized", current: false },
  { name: "Defied Liberty", current: true },
  { name: "Un-Plugged", current: false },
  { name: "ABCD/NFT V1", current: false },
  { name: "ABCD/NFT V2", current: false },
];
const CharityTabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  return (
    <>
      <div
        className=" lg:flex flex-wrap items-center gap-3  my-7  md:justify-between      ]"
        aria-label="Tabs"
      >
        <div className="border border-b-[#C0B6B6] mt-6  border-transparent flex flex-wrap items-center gap-3   ">
          {tabs.map((tab, i) => (
            <a
              key={i}
              className={` px-4 py-6 cursor-pointer   !text-lg whitespace-nowrap   !text-[#C0B6B6]
                ${
                  i === selectedTabIdx &&
                  " border-b-[4px] border-pink !text-pink"
                }
                `}
              onClick={() => setSelectedTabIdx(i)}
            >
              {tab.name}
            </a>
          ))}
        </div>
        <p className="text-blue mt-8 "> See All Products</p>
      </div>
      {selectedTabIdx === 0 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  mt-14   gap-8">
          {Charitydata?.map((item, i) => {
            return <MainCard {...item} ind={i}/>;
          })}
        </div>
      )}
      {selectedTabIdx === 1 && <div>Comming Soon</div>}
      {selectedTabIdx === 2 && <div>Comming Soon</div>}
      {selectedTabIdx === 3 && <div>Comming Soon</div>}
      {selectedTabIdx === 4 && <div>Comming Soon</div>}
    </>
  );
};
export default CharityTabs;
