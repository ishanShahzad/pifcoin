import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Select from "../../../components/select/Select";
import {
  CategoriesInputData,
  CharityInputData,
  SaleInInputData,
} from "../../../data/MarketPlaceInputData";
import ToggleDisclosure from "./ToggleDisclosure";

const MarketPlaceFilters = () => {
  return (
    <>
      <ToggleDisclosure heading="Status">
        <div className="grid grid-cols-2 gap-3 mt-5">
          <Button className="AtStatusBtn px-0 w-full ">Buy Now</Button>
          <Button className="AtStatusBtn px-0 w-full  ">On Auction</Button>
          <Button className="AtStatusBtn w-full px-0">New</Button>
          <Button className="AtStatusBtn w-full px-0">New Offers</Button>
        </div>
      </ToggleDisclosure>
      <ToggleDisclosure heading="Price">
        <div className="mt-7">
          <Select data={[{ id: 1, name: "Currency" }]} className="py-3 pb-3" />
          <div className="grid grid-cols-5 gap-1 mt-5 items-center">
            <div className="col-span-2">
              <Button className=" AtStatusBtn px-0 w-full">Min</Button>
            </div>
            <p className="text-sm col-span-1 text-center">to</p>
            <div className="col-span-2">
              <Button className="AtStatusBtn px-0 w-full">Max</Button>
            </div>
          </div>
          <Button className="w-full px-0 mt-6 text-sm py-3.5 hover:bg-pink">
            Apply
          </Button>
        </div>
      </ToggleDisclosure>
      <ToggleDisclosure heading="Charity">
        <div className="mt-7 ">
          <Input
            placeholder="Filter"
            className="text-base pl-7"
            styles="py-3"
            icon="icon-refresh2 mt-1 text-lg"
          />

          <div className="h-[175px] mt-1  overflow-y-scroll AtScroll">
            {CharityInputData.map((item,i) => (
              <div className="flex items-center mt-3 Atcheckbox" key={i}>
                <input
                  id=""
                  name=""
                  type="checkbox"
                  className={` h-4  w-4 relative  text-offwhite inline-flex items-center rounded-sm justify-center ml-1`}
                />
                <label htmlFor="" className="text-base text-offwhite ml-2.5">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </ToggleDisclosure>
      <ToggleDisclosure heading="Categories">
        <div className="h-[175px] mt-1  overflow-y-scroll AtScroll">
          {CategoriesInputData.map((item,i) => (
            <div className="flex items-center mt-3 Atcheckbox" key={i}>
              <input
                id=""
                name=""
                type="checkbox"
                className={` h-4  w-4 relative  text-offwhite inline-flex rounded-sm items-center justify-center ml-1`}
              />
              <label htmlFor="" className="text-base text-offwhite ml-2.5">
                {item}
              </label>
            </div>
          ))}
        </div>
      </ToggleDisclosure>
      <ToggleDisclosure heading="Chain">{""}</ToggleDisclosure>
      <ToggleDisclosure heading="On Sale in">
        <div className="h-[175px] mt-1  overflow-y-scroll AtScroll">
          {SaleInInputData.map((item,i) => (
            <div className="flex items-center mt-3 Atcheckbox" key={i}>
              <input
                id=""
                name=""
                type="checkbox"
                className={` h-4  w-4 relative  text-offwhite inline-flex rounded-sm items-center justify-center ml-1`}
              />
              <label htmlFor="" className="text-base text-offwhite ml-2.5">
                {item}
              </label>
            </div>
          ))}
        </div>
      </ToggleDisclosure>
    </>
  );
};

export default MarketPlaceFilters;
