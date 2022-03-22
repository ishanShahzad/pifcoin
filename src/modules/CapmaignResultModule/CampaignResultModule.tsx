import React, { useState } from "react";
import Image from "next/image";
import { Charitydec } from "../../components/charitydescribation/Charitydec";
import { CampaignDoner } from "../../components/CampaignDonors/CampaignDoner";
import { NftCampaign } from "../../data/NftCampaign";
import MainCard from "../../components/maincard/MainCard";
import TestimonialsTabs from "./TestimonialsTab";
import BlurImage from "../../components/blurimage/BlurImage";
import Modal from "../../components/modal/Modal";
import { Popupofferdata } from "../../data/Popupofferdata";

export const CampaignResultModule = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="campaignresult-background">
      <div className="   campaigndetail-img1 h-[18.75rem] xs:h-[11rem]  "></div>
      <div className="container py-16 ">
        <div className="  xl:flex  xl:justify-between ">
          <div className=" flex items-center">
            <figure className="">
              <Image
                src="/assets/images/compaigndetail/img2.png"
                height={162}
                width={162}
              />
            </figure>
            <div className="ml-10 max-w-[42.625rem]  ">
              <h4 className="">Mask Eagle Club</h4>
              <p className="text-pink font-SofiaPro-Regular mt-3">
                Albert Marko
              </p>
              <div className="mt-5">
                <Charitydec />
              </div>
            </div>
          </div>
          <div className="  bg-[rgba(233,233,233,0.1)] rounded-lg p-6 xl:mt-0 mt-12">
            <div className="flex ">
              <h6>Campaign Results</h6>
              <p className="py-1 px-3 ml-4  bg-[rgba(74,147,74,0.4)] rounded-md border border-[#4A934A] text-base font-SofiaPro-Regular]">
                91.25% Achieved
              </p>
            </div>
            <div className="mt-8 flex xs:block   ">
              <div className="flex  items-center">
                <div>
                  <i className="icon-graph text-2xl bg-[rgba(12,147,205,0.4)] p-3 rounded-md "></i>
                </div>
                <div className="ml-3.5">
                  <div className="flex items-center">
                    <h5 className="text-2xl">1.005 PIF</h5>
                    <p className="text-sm font-SofiaPro-Regular text-primary m-1 mt-4 ">
                      (440 USD)
                    </p>
                  </div>
                  <p className="text-offwhite text-sm font-SofiaPro-Regular">
                    Raised Amount
                  </p>
                </div>
              </div>
              <div className="flex items-center sm:ml-10 mt-0 xs:mt-6 ">
                <div>
                  <i className="icon-price text-2xl bg-[rgba(12,147,205,0.4)] p-3 rounded-md "></i>
                </div>
                <div className="ml-3.5">
                  <div className="flex items-center">
                    <h5 className="text-2xl">2.500 PIF</h5>
                    <p className="text-sm font-SofiaPro-Regular text-primary ml-1 mt-4 ">
                      (875 USD)
                    </p>
                  </div>
                  <p className="text-offwhite text-sm font-SofiaPro-Regular">
                    Targeted Amount
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-[4.875rem]">How you made the Difference?</h5>
        <ul className="list-disc ml-5 text-lg font-SofiaPro-Regular mt-10 text-[#E9E9E9]">
          <li> We Helped 70 Students to pay thier College Fee.</li>
          <li className="max-w-[82.5rem] mt-4 ">
            {" "}
            For athletes, high altitude produces two contradictory effects on
            performance. For explosive (sprints up to 400 metres, long jump)
            reduction in the marketing of atmospheric pressure.
          </li>
          <li className="mt-3">
            {" "}
            Physiological respiration involves the mechanisms that ensure that
            the composition of functional residual capacity.
          </li>
        </ul>
        <div className=" mt-[7.5rem] relative sm:pl-24  pr-50">
          <h3 className="lg:text-2rem relative">Top Campaign’s Donors</h3>
          <p
            className="absolute sm:right-24 right-0 top-2 text-blue text-lg font-SofiaPro-Regular cursor-pointer"
            onClick={() => {
              setPopup(true);
            }}
          >
            View All
          </p>
          <div className="mt-20 ">
            <CampaignDoner />
          </div>
        </div>
        <h4 className="text-center mt-36">Top NFTs of Campaign</h4>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-7 md:grid-cols-2 mt-[4.5rem]">
          {NftCampaign.map((item) => (
            <MainCard {...item} />
          ))}
        </div>
        <h4 className="mt-36">Testimonials</h4>
        <div>
          <TestimonialsTabs />
        </div>
        <h4 className="mt-36">Campaign Parnter’s Info:</h4>
        <div className=" sm:flex justify-between items-center  mt-11">
          <h3 className="text-[1.375rem]">Shields - A Novolex Brand</h3>
          <div className="sm:flex items-center">
            <h6 className=" bg-[rgba(255,255,255,0.1)] font-SofiaPro-Regular rounded-full px-[1.375rem] sm:mt-0 mt-4 py-2.5 mr-12">
              www.sheildnovolex.com
            </h6>
            <figure className=" sm:mt-0 mt-4">
              <BlurImage
                src="/assets/images/campaignresult/shield.png"
                height={64}
                width={147}
              />
            </figure>
          </div>
        </div>
        <p className=" max-w-[85rem] text-primary  font-SofiaPro-Regular mt-2">
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular the earthen
          tumulus, estimated to have been 15 metres (50 feet) in length, with a
          chamber built from sarsen megaliths on its eastern end. Both inhumed
          and cremated human remains were placed within this chamber during the
          Neolithic of a period, representing at least nine or ten individuals.
        </p>

        <p className=" max-w-[85rem] text-primary  font-SofiaPro-Regular mt-5">
          Physiological respiration involves the mechanisms that ensure that the
          composition of the functional residual capacity is kept constant, and
          equilibrates with the gases dissolved in the pulmonary capillary
          blood, and thus throughout the body. Thus, in precise usage, the words
          breathing and ventilation are hyponyms, not synonyms, of respiration;
          but this prescription is not consistently followed, even by most
          health care providers, because the term respiratory rate (RR) is a
          well-established term in health care, even though it would need to be
          consistently replaced with ventilation rate if the precise usage were
          to be followed.
        </p>
      </div>
      <div className="bg-[rgba(27,14,57,0.5)] p-1 flex flex-col items-center py-[5.438rem]">
        <h4 className=" text-center">Thank You!!!</h4>
        <p className="text-primary max-w-[70.5rem] text-center text-22px mt-8 ">
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </p>
      </div>

      <Modal
        hide={setPopup}
        show={popup}
        className="mt-12 bg-[#1B0E39] rounded-md  "
      >
        <div className="  w-[34.5rem] px-9 py-7   ">
          <h6 className="text-22px text-center ">Thanks for Donation</h6>
          {Popupofferdata.map((item) => (
            <>
              <div className="text-left flex justify-between mt-5">
                <div className="flex items-center">
                  <p className="text-base font-SofiaPro-Regular text-offwhite ">
                    {item.id}
                  </p>
                  <figure className="ml-6">
                    <Image src={item.src} height={48} width={48} />
                  </figure>
                  <h1 className="text-base font-SofiaPro-Regular text-offwhite ml-5">
                    {item.name}
                  </h1>
                </div>
                <div>
                  <h1 className="text-primary text-base">{item.pifprice}</h1>
                  <p className="text-sm text-[#7D7676]">{item.usaprice}</p>
                </div>
              </div>
              <hr className="mt-4 text-primary" />
            </>
          ))}
        </div>
      </Modal>
    </div>
  );
};
