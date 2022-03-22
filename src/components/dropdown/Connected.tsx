import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";

const Connected = ({ setstate }: any) => {
  return (
    <div className=" w-[27.563rem]   py-7 ">
      <h6>Wallet Connected</h6>
      <hr className="mt-5" />
      <div className="text-center ">
        <p className="text-primary font-SofiaPro-Regular text-base mt-8  text-center">
          You have connected your
          <br /> wallet successfully
        </p>
      
        <div className="  flex justify-center mt-10 items-center">
          <figure className="h-[55px] w-[58px]  relative">
            <Image
              objectFit="contain"
              layout="fill"
              src="/assets/images/mask.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Connected;
