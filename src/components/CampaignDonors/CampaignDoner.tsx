import React from "react";
import Image from "next/image";
import { Compaigndonerdata } from "../../data/Campaigndonersdata";
export const CampaignDoner = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-9 sm:pr-24">
      {Compaigndonerdata.map((data) => (
        <div className="bg-[rgba(233,233,233,0.1)] rounded-md px-6 py-5  relative">
          <p className="bg-[#D02FC7] w-[4.375rem] h-[2.188]   text-center absolute top-2 xs:top-5 right-0 ">
            {" "}
            {data.position}{" "}
          </p>

          <div>
            <div className="flex xs:block  ">
              <figure className=" flex-shrink-0">
                <Image src={data.src} height={88} width={88} alt="" />
              </figure>
              <div className="ml-5 mt-2">
                <h6 className="text-22px">{data.name}</h6>
                <p className="text-sm bg-[rgba(12,147,205,0.4)] mt-3 rounded-md px-3 py-1 inline-block font-SofiaPro-Regular">
                  {data.nft}
                </p>
              </div>
            </div>

            <div className=" absolute right-6 flex items-center flex-col top-12 xs:top-14  ">
              <h6 className="text-xl">{data.pifprice}</h6>
              <p className="text-sm font-SofiaPro-Regular mt-2 text-primary">
                {data.usaprice}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
