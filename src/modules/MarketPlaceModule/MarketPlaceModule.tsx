import { useState } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import { Data1, Data2 } from "../../data/MarketDropData";
import MainCard from "../../components/maincard/MainCard";
import { MarketplaceCardData } from "../../data/MarketplaceCardData";
import MarketPlaceFilters from "./Components/MarketPlaceFilters";
const MarketPlace = () => {
  const [state, setstate] = useState(false);
  const toggleClass = () => {
    setstate(!state);
  };
  return (
    <div className="AtMarketplace-background p-[.2px] pb-[6.87rem] relative overflow-hidden">
      <div className="container mt-12 relative overflow-hidden">
        <div className=" md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
          <div
            className={`${
              state ? "hidden" : "flex justify-between items-center"
            }  py-4`}
          >
            <p className="font-SofiaPro text-22px">Filters</p>
            <i className="icon-left-arrow" onClick={toggleClass}></i>
          </div>
          <div
            className={`${
              state
                ? "xl:col-span-4 md:col-span-3 sm:grid-cols-2"
                : "xl:col-span-3 lg:col-span-2"
            }  `}
          >
            <div className={`${state?' md:flex':'xl:flex'} justify-between gap-4 items-center`}>
              <div className={`flex items-center gap-8 ${state?"lg:w-[61%] md:w-[70%]":"xl:w-[70%]"}`}>
                <i
                  className={`icon-left-arrow rotate-180 ${
                    state ? "block" : "hidden"
                  } `}
                  onClick={toggleClass}
                ></i>
                <Input
                  styles="w-full"
                  placeholder="Search"
                  icon="icon-refresh2 mt-1 text-lg"
                  className="pl-7"
                />
              </div>
              <div className={` gap-4 flex justify-between mt-6 xs:block  ${state?' md:mt-0':'xl:mt-0'}`}>
                <Select data={Data1} className={`${state ?'lg:w-[245px] md:w-[150px]':"xl:w-[200px] "}  `} />
                <Select
                  data={Data2}
                  className={` xs:!mt-5 md:-mt-1 ${state ?'lg:w-[245px] md:w-[150px] ':"xl:w-[200px]"}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
          <div className={`${state ? "hidden" : "block"} mt-8`}>
            <MarketPlaceFilters />
          </div>

          <div
            className={`${
              state
                ? "xl:col-span-4 lg:col-span-3 md:col-span-2"
                : "xl:col-span-3 lg:col-span-2"
            } `}
          >
            <div
              className={` ${
                state
                  ? "xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
                  : "xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2"
              } grid  gap-[30px] mt-8`}
            >
              {MarketplaceCardData?.map((item, i) => {
                return <MainCard {...item} ind={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
