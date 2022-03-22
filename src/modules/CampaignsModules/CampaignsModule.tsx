import React from "react";
import Button from "../../components/button/Button";
import CompaignsTabs from "./CampaignsTabs"



export const CompaignsModule = () => {
  return (
      
    <div className=" compaigns-background  container pt-[4.938rem] pb-[6rem] ">
      <div className="mt-24">
        <div className="flex justify-between items-center">
          <h4 className="xs:text-lg ">Explore Campaigns</h4>
          <Button className="py-5 px-8 xs:px-3 xs:py-3 rounded-lg text-base font-SofiaPro hover:bg-pink">
            Followed Campaigns{" "}
          </Button>
        </div>
        <CompaignsTabs/>
      </div>
    
    </div>
  );
};
