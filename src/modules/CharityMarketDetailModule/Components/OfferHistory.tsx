import ToggleDisclosure from "../../MarketPlaceModule/Components/ToggleDisclosure"

const tableData =[
    {
        price:"1.002 PIF",
        usdprice:'$ 999.15',
        difference:'20.2% Above the Floor',
        expiration:'5 Hours',
        from:'512Ae4a',
    },
    {
        price:'0.952 PIF',
        usdprice:'$ 854.51',
        difference:'19.8% Above the Floor',
        expiration:'3 Hours',
        from:'123Aq21',
    },
    {
        price:'0.911 PIF',
        usdprice:'$ 784.19',
        difference:'20.1% Below the Floor',
        expiration:'4 Hours',
        from:'19HUw2i',
    },
    {
        price:'0.785 PIF',
        usdprice:'$ 671.45',
        difference:'12.1% Below the Floor',
        expiration:'1 Hours',
        from:'AS120Re',
    },
    {
        price:'0.625 PIF',
        usdprice:'$ 525.55',
        difference:'10.1% Below the Floor',
        expiration:'2 Hours',
        from:'ESR23TY',
    },
]

export const OfferHistory = () =>{
    return(
        <div className="mt-[32px] rounded-lg bg-graydull1 ml-8">
            <ToggleDisclosure heading="Offer History" charityDetail="!px-0 !py-0 !mb-0" btnStyle="!px-[1.125rem] !py-[1.375rem] bg-graydull1">
                <div className="py-7 px-6">    
                    <div className="overflow-hidden rounded-lg border border-graydull1">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>USD Price</th>
                                    <th>Floor Difference</th>
                                    <th>Expiration</th>
                                    <th>From</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {tableData.map((data) => (
                                    <tr>
                                        <td>{data.price}</td>
                                        <td>{data.usdprice}</td>
                                        <td>{data.difference}</td>
                                        <td>{data.expiration}</td>
                                        <td className="text-pink">{data.from}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ToggleDisclosure>
        </div>
    )
}