import ToggleDisclosure from "../../MarketPlaceModule/Components/ToggleDisclosure"

const detailsList = [
    { name: "Contract Address", info: "0xa7d8...d270"},
    { name: "Token ID", info: "78000246"},
    { name: "Token Standard", info: "ERC-721"},
    { name: "Blockchain", info: "PIF Tokens"},
];

export const Details = () =>{
    return(
        <div className="mt-8 rounded-lg bg-graydull1">
            <ToggleDisclosure heading="Details" charityDetail="!px-[1.125rem] !mb-0 !py-[1.375rem] !bg-transparent" iconStyle="!bg-transparent" >
                <div className="mt-[1.375rem] ">
                    <ul>
                    {detailsList.map((list,i) => (
                        <li className="flex justify-between items-center text-base mb-3 first:text-blue">
                            <span className="text-primary ">{list.name}</span>
                            <strong className={`text-white ${i===0 && "text-blue"} `}>{list.info}</strong>
                        </li>
                    ))}
                    </ul>
                </div>
            </ToggleDisclosure>
        </div>
    )
}