import React from "react";
import Image from "next/image";
import Tabsprofile from "./tabprofile";
import Profiledropdown from "../../../components/dropdown/ProfileDropdown";
import Actiondropdown from "../../../components/Actiondropdown/Actiondropdown";

 const dropdownData = [
  {
    icon: "icon-edit",
    title: "Edit Profile"
  },
  {
    icon: "icon-share",
    title: "Share Profile"
  }
]

export const Myprofile = () => {
  return (
    <div className="campaignresult-background">
      <div className="profile-background h-[18.75rem] xs:h-[11rem] "></div>
      <div className="container">
        <div className=" lg:flex justify-between items-center">
          <div className="flex items-center mt-20">
            <figure>
              <Image
                src="/assets/images/profile/p1.png"
                height={162}
                width={162}
                alt=""
              />
            </figure>
            <div className="ml-8">
              <h4>Mask Eagle Club</h4>
              <h6 className=" font-SofiaPro-Regular text-pink">Albert Marko</h6>
              <p className="text-base font-SofiaPro-Regular text-primary ">
                Joined 26 Feb, 2021
              </p>
            </div>
          </div>
          <div className="  flex flex-col items-end   ">
            <Actiondropdown data = {dropdownData} />
            {/* <i className="icon-charity  w-[2.625] text-xl  bg-[rgba(233,233,233,.2)] mt-9 "></i> */}
            <div className="mt-8">
              <div className="  flex xs:justify-between  gap-6      flex-wrap xs:gap-y-2 bg-[rgba(233,233,233,.1)] rounded-lg pl-5 py-2.5 pr-6   2xl:mt-0   ">
                <div className="flex items-center   ">
                  <i className="icon-dimond  bg-[rgba(12,147,205,0.4)] w-[3.5rem] h-[3.5rem] flex justify-center items-center  rounded-md text-2xl"></i>
                  <div className="ml-3">
                    <h6 className="text-[#E9E9E9] text-28px  ">109</h6>
                    <p className="text-sm font-SofiaPro-Regular text-offwhite  mt-2.5">
                      Volume Traded
                    </p>
                  </div>
                </div>
                <div className="flex items-center xl:ml-14  ">
                  <i className="icon-bitcoin  bg-[rgba(12,147,205,0.4)] w-[3.5rem] h-[3.5rem] flex justify-center items-center  rounded-md text-2xl"></i>
                  <div className="ml-3">
                    <h6 className="text-[#E9E9E9] text-28px  ">1.2901</h6>
                    <p className="text-sm font-SofiaPro-Regular text-offwhite  mt-2.5">
                      PIF Coins Wallet
                    </p>
                  </div>
                </div>
                <div className="flex items-center xl:ml-14 ">
                  <i className="icon-lemp  bg-[rgba(12,147,205,0.4)] w-[3.5rem] h-[3.5rem] flex justify-center items-center  rounded-md text-2xl"></i>
                  <div className="ml-3">
                    <h6 className="text-[#E9E9E9] text-28px  ">6.1K</h6>
                    <p className="text-sm font-SofiaPro-Regular text-offwhite mt-2.5">
                      Items Traded
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-14">Description:</h5>
        <p className="text-primary mt-4">
          Physiological respiration involves the mechanisms that ensure that the
          composition of the functional residual capacity is kept constant, and
          equilibrat with the gases dissolved in the pulmonary capillary blood,
          and thus throughout the body. Thus, in precise usage, the words
          breathing and ventilation are hyponyms, not synonyms, of respiration;
          but this prescription is not consistently followed, even by most
          health care providers, because the term respiratory rate (RR) is a
          well-established term in health care..... <span className="text-pink text-xl font-SofiaPro-Bold">Read More</span>
        </p>
        <h3 className="mt-[4.938rem]">Owned NFTs</h3>
        <Tabsprofile/>
       
      </div>
    </div>
  );
};
