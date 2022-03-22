import { useState } from "react"
import { CharityMarketContent } from "./Components/CharityMarketContent"
import { CharityMarketDescription } from "./Components/CharityMarketDescription"
import { CharityMarketImage } from "./Components/CharityMarketImage"
import { PriceHistory } from "./Components/PriceHistory"
import { Details } from "./Components/Details"
import { OfferHistory } from "./Components/OfferHistory"
import { MoreCompaignSlider } from "./Components/MoreCompaignSlider"



export const CharityMarketDetailModule = () =>{
    return(
        <div className="AtMarketplace-background">
            <div className="container">
                <div className="pt-[4rem] pb-[3.563rem] ">
                    <div className="flex">
                        <CharityMarketImage/>
                        <CharityMarketContent/>                    
                    </div>
                    <div className="flex items-start">
                        <div className="w-[41%]">
                            <CharityMarketDescription />
                            <Details />
                        </div>
                        <div className="w-[58%]">
                            <PriceHistory/>
                            <OfferHistory/>
                        </div>
                    </div>
                </div>
                <div className="relative pt-[3.563rem] pb-[6.75rem]" id="roadmap">
                    <div className="relative flex items-center">
                        <h2 className="absolute top-2.5 text-[1.75rem]">More from this Compaign</h2>
                    </div>
                    <MoreCompaignSlider />
                </div>
            </div>
        </div>
    )
}