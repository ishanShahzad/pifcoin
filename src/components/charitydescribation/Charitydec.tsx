import React from "react";
interface Iprops {
  className?: string;
}
export const Charitydec = ({ className }: Iprops) => {
  return (
    <div>
      <div className= {`${className} flex xs:justify-between gap-6  flex-wrap xs:gap-y-2    2xl:mt-0 mt-12  `}>
        <div className= {`${className} flex items-center `}>
          <i className="icon-doc  bg-[rgba(12,147,205,0.4)] w-[2.125rem] h-[2.125rem] flex justify-center items-center  rounded-md text-base"></i>
          <p className="text-[#E9E9E9] text-base  ml-2.5">Charity 4 Cancers</p>
        </div>
        <div className={`${className} flex items-center`}>
          <i className="icon-doc  bg-[rgba(12,147,205,0.4)] w-[2.125rem] h-[2.125rem] flex justify-center items-center  rounded-md text-base"></i>

          <p className="text-[#E9E9E9] text-base ml-2.5">40 Participants</p>
        </div>
        <div className={`${className} flex items-center`}>
          <i className="icon-doc  bg-[rgba(12,147,205,0.4)] w-[2.125rem] h-[2.125rem] flex justify-center items-center  rounded-md text-base"></i>

          <p className="text-[#E9E9E9] text-base  ml-2.5">50 NFTs</p>
        </div>
      </div>
    </div>
  );
};
