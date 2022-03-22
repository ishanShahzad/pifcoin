import React from "react";
import Image from "next/image";
import Button from "../../components/button/Button";
import { Charitydec } from "../../components/charitydescribation/Charitydec";
import CampaigndetailTabs from "./CampaigndetailTabs";

export const CampaignDetailModule = () => {
  return (
    <div className="campaigndetail-background pb-[6.875rem]">
      <div className="relative p-1 flex justify-center items-end flex-shrink-0 z-0 campaigndetail-img1 h-[18.75rem] xs:h-[11rem]  ">
        <figure className=" absolute z-20  top-44 xs:top-20  ">
          <Image
            src="/assets/images/compaigndetail/img2.png"
            height={162}
            width={162}
          />
        </figure>
      </div>
      <div className="  container   2xl:mt-16 mt-28 ">
        <div className="relative  ">
          <div className="flex flex-col justify-center items-center  ">
            <Button className="bg-blue border-0  py-2.5 px-7 text-lg font-SofiaPro-Regular rounded-lg sm:!absolute right-0 sm:-top-5  sm:my-0 my-4  ">
              <i className="icon-tick "></i>
              <span className="ml-2 "> Follow</span>
            </Button>
            <div className="flex  items-center   justify-center   ">
              <h4 className="">Mask Eagle Club</h4>
              <i className="icon-cros ml-4 sm:text-2xl mt-1 "></i>
            </div>
            <p className="text-pink font-SofiaPro-Regular mt-3">Albert Marko</p>
            <p className="text-base mt-2.5 font-SofiaPro-Regular px-[1.375rem] py-2.5 rounded-full  bg-[rgba(255,255,255,0.1)]">
              www.eaglemaskclub.com
            </p>
            <div className="mt-10">
              <Charitydec />
            </div>
            <p className="max-w-[70rem] font-SofiaPro-Regular text-center  linear mt-12 ">
              Physiological respiration involves the mechanisms that ensure that
              the composition of the functional residual capacity is kept
              constant, and equilibrat with the gases dissolved in the pulmonary
              capillary blood, and thus throughout the body. Thus, in precise
              usage, the words breathing and ventilation are hyponyms, not
              synonyms, of respiration; but this is the pro prescription is not
              consistently followed, even by most health care providers, because
              the term respiratory rate (RR) is a well-established term in
              health care.....
            </p>
            <p className=" font-SofiaPro-Bold text-pink">Read More</p>
          </div>

          <h5 className="mt-[5rem]">Collection’s NFT</h5>
          <CampaigndetailTabs />
        </div>
      </div>
    </div>
  );
};
