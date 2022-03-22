import React from "react";
import { Marketdata } from "../../../data/MarketData";
import Image from "next/image";
import Button from "../../../components/button/Button";
const MarketRelation = () => {
  return (
    <div className="  market-relation container py-8 sm:py-[8.688rem]">
      <div className="flex flex-col items-center  ">
        <p className="text-primary">Vast Market Relation</p>
        <h2 className=" mt-3">Collaborations</h2>
        <p className="max-w-[42.125rem] text-primary mt-7  text-center ">
          Village did removed enjoyed explain nor ham saw calling talking.
          Securing as informed declared or margaret. Joy horrible moreover man
          feelings own shy. Request norland neither mistake for yet.
        </p>
      </div>
      <div className=" my-24 grid sm:grid-cols-5 grid-cols-4 xs:grid-cols-3 gap-6">
        {Marketdata.map((item) => (
          <figure className=" ">
            <Image src={item.src} height={110} width={254} alt="" />
          </figure>
        ))}
      </div>
      <div className="text-center">
        <Button className="bg-pink px-[3.688rem] rounded-lg">
          More Partners
        </Button>
      </div>
    </div>
  );
};
export default MarketRelation;
