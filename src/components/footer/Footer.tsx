import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black pt-[3.375rem] pb-5 ">
      <div className="text-center flex justify-center ">
  
        <figure>
        <Image
          src="/assets/Images/landing/fotr.png"
          height={183}
          width={201}
          alt=""
        />
        </figure>
      </div>
      <hr className="text-[#E9E9E9] h-[1px] mt-14" />

      <div className="flex xs:flex-col  justify-between items-center mt-9  container">
        <p className="text-primary text-lg ">
          Copyrights © 2021, PIF - Pay It Forward. All Rights Reserved
        </p>
        <div className=" flex xs:mt-6" >
          <div className="border border-[#00A9FA] p-1 rounded-md flex justify-center items-center">
            <i className="icon-twiter bg-[#00A9FA] h-[2.625rem] w-[2.625rem] flex justify-center items-center rounded-md text-xl"></i>
          </div>
          <div className=" border border-[#00A9FA] p-1 rounded-md flex justify-center items-center ml-5">
            <i className="icon-teligram bg-[#00A9FA]  h-[2.625rem] w-[2.625rem] flex justify-center items-center rounded-md text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
