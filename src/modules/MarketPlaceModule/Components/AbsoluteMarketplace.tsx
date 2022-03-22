import React from "react";
import Input from "../../../components/input/Input";
import MainCard from "../../../components/maincard/MainCard";
import Select from "../../../components/select/Select";
import { AbsoluteMarketData } from "../../../data/AbsoluteMarketData";
import { Data1, Data2 } from "../../../data/MarketDropData";
interface Iprops{
    state:any;
    setstate:any;
}
const AbsoluteMarketplace = ({state,setstate}:Iprops) => {
  return (
    <div className="AtMarketplace-background p-[.2px] absolute w-full">
      <div className="container mt-12 relative">
        <div className=" lg:flex gap-[30px]">
          <div className="flex items-center gap-[30px] lg:w-[70%] ">
            <i className="icon-left-arrow rotate-180" 
            onClick={()=>{setstate(!state)}}
            ></i>
            <Input
              styles="w-[100%]"
              placeholder="Search"
              icon="icon-refresh2 mt-1 text-lg"
              className="pl-7"
            />
          </div>
          <div className="flex xs:block gap-4 justify-between mt-4 lg:mt-0 ml-14 lg:ml-0">
            <Select data={Data1} className="lg:w-[250px]  " />
            <Select data={Data2} className="lg:w-[250px] xs:!mt-3 md:-mt-1  " />
          </div>
        </div>
        <div className="grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
          {AbsoluteMarketData?.map((item, i) => {
            return <MainCard {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AbsoluteMarketplace;
