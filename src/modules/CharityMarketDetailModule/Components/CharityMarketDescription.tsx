import ToggleDisclosure from "../../MarketPlaceModule/Components/ToggleDisclosure"

export const CharityMarketDescription = () =>{
    return(
        <div className="mt-8 rounded-lg bg-graydull1">
            <ToggleDisclosure heading="Description" charityDetail="!px-[1.125rem] !mb-0 !py-[1.375rem] !bg-transparent" iconStyle="!bg-transparent" >
                <div className="mt-[1.375rem] ">
                    <h4 className="text-primary text-base mb-3 font-SofiaPro-Regular">Created by:<span className="text-pink text-lg"> Dianne Russell</span></h4>
                    <p className="text-offwhite text-base font-SofiaPro-Regular">Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrat with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms.....</p>
                </div>
            </ToggleDisclosure>
        </div>
    )
}