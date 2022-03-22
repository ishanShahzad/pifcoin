import Image from 'next/image'
import Actiondropdown from '../../../components/Actiondropdown/Actiondropdown'
import Button from '../../../components/button/Button'


const dropdownData = [
    {
        icon: "icon-refresh",
        title: "Refresh"
    },
    {
        icon: "icon-eye",
        title: "View in Campaign"
    },
    {
        icon: "icon-share",
        title: "Share NFTs"
    }
  ]

export const CharityMarketContent = () =>{
    return(
        <div className="w-[58%] ml-8">
            <div className="flex justify-between items-center mb-9">
                <div className="flex flex-col">
                    <span className="text-blue block mb-3 text-base capitalize">Charity 4 Cancer</span>
                    <h3 className="text-white capitalize">Minimal Wear</h3>
                </div>
                <Actiondropdown data = {dropdownData} />
            </div>
            <div className="flex items-center mb-9">
                <div className="flex flex-col mr-12">
                    <span className="block text-base text-primary mb-2.5">Created by:</span>
                    <div className="flex items-center">
                        <figure className="rounded-full w-[2.375rem] h-[2.375rem] mr-4">
                            <Image
                                width={38}
                                height={38}
                                src="/assets/images/user/01.png"
                                alt=""
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </figure>
                        <h4 className="text-offwhite text-lg font-SofiaPro-Regular">Dianne Russell</h4>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="block text-base text-primary mb-2.5">Owned by:</span>
                    <div className="flex items-center">
                        <figure className="rounded-full w-[2.375rem] h-[2.375rem] mr-4">
                            <Image
                                width={38}
                                height={38}
                                src="/assets/images/user/02.png"
                                alt=""
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </figure>
                        <h4 className="text-offwhite text-lg font-SofiaPro-Regular">Dianne Russell</h4>
                    </div>
                </div>
            </div>
            <div className='bg-graydull1 rounded-lg py-7 px-6'>
                <div className='mb-8'>
                    <span className='block text-primary text-base mb-[5px]'>Current Price</span>
                    <h3 className='text-white text-[2rem]'>0.005 PIF <span className='text-primary text-base font-SofiaPro-Regular'>(250 USD)</span></h3>
                </div>
                <div className='flex mb-8'>
                    <Button
                        children="Make Offer"
                        className="text-base mr-6"
                        type="button"
                    />
                    <Button
                        children="Buy Now"
                        className="text-base mr-6 bg-pink"
                        type="button"
                    />
                </div>
                <div className='bg-blue p-2.5 text-center mb-8'>
                    <p className='text-base text-offwhite justify-center flex items-center'>
                    <svg className='mr-[5px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.25C14.5563 18.25 18.25 14.5563 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25Z" stroke="#E9E9E9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 5.41669V10L12.75 12.75" stroke="#E9E9E9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        Auction will end at February 21, 2022 at 8:23am PKT 
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-graydull1 relative rounded-md w-[5.25rem] min-h-[6rem] flex flex-col justify-center items-center mx-[22px] after:content-[':'] after:absolute after:right-[-26px] after:top-[50%] after:translate-y-[-50%] after:text-[3.125rem]">
                        <strong className='text-offwhite block text-[1.75rem] font-SofiaPro-Bold mb-[5px]'>06</strong>
                        <span className='block text-primary text-base font-SofiaPro-Regular'>Days</span>
                    </div>
                    <div className="bg-graydull1 relative rounded-md w-[5.25rem] min-h-[6rem] flex flex-col justify-center items-center mx-[22px] after:content-[':'] after:absolute after:right-[-26px] after:top-[50%] after:translate-y-[-50%] after:text-[3.125rem]">
                        <strong className='text-offwhite block text-[1.75rem] font-SofiaPro-Bold mb-[5px]'>23</strong>
                        <span className='block text-primary text-base font-SofiaPro-Regular'>Hours</span>
                    </div>
                    <div className="bg-graydull1 relative rounded-md w-[5.25rem] min-h-[6rem] flex flex-col justify-center items-center mx-[22px] after:content-[':'] after:absolute after:right-[-26px] after:top-[50%] after:translate-y-[-50%] after:text-[3.125rem]">
                        <strong className='text-offwhite block text-[1.75rem] font-SofiaPro-Bold mb-[5px]'>58</strong>
                        <span className='block text-primary text-base font-SofiaPro-Regular'>Minutes</span>
                    </div>
                    <div className='bg-graydull1 rounded-md w-[5.25rem] min-h-[6rem] flex flex-col justify-center items-center mx-[22px]'>
                        <strong className='text-offwhite block text-[1.75rem] font-SofiaPro-Bold mb-[5px]'>19</strong>
                        <span className='block text-primary text-base font-SofiaPro-Regular'>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}