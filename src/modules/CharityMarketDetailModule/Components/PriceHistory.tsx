import Select from "../../../components/select/Select"
import ToggleDisclosure from "../../MarketPlaceModule/Components/ToggleDisclosure"
import Data from "../../../data/ChartMonthData"
import CharityMarketChart from "./CharityMarketChart"

export const PriceHistory = () =>{
    return(
        <div className="mt-[-58px] rounded-lg bg-graydull1 ml-8">
            <ToggleDisclosure heading="Price History" charityDetail="!px-0 !py-0 !mb-0" btnStyle="!px-[1.125rem] !py-[1.375rem] bg-graydull1">
                <div className="py-6 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col mb-4">
                            <h4 className="text-primary text-lg mb-2 ">All Time Average</h4>
                            <span className="text-blue text-lg block font-SofiaPro-Bold">0.52 PIF</span>
                        </div>
                        <div>
                            <Select data={Data} className="lg:w-[229px]" />
                        </div>
                    </div>
                    <div className="mt-[3.125rem] h-[290px] relative">
                        <CharityMarketChart />
                    </div>
                </div>
            </ToggleDisclosure>
        </div>
    )
}