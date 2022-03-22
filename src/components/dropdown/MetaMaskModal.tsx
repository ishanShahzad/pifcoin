import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const MetaMaskModal = ({ setstate }: any) => {
  return (
    <div className=" !w-[27.563rem]    py-7 ">
      <h6>Connect MetaMask</h6>
      <hr className="mt-5" />
      <div className="text-center ">
        <p className="text-primary font-SofiaPro-Regular text-base mt-8  text-center">
          By connecting your wallet, you agree to our
          <br /> Terms of Services and Privacy Policy
        </p>
        <Button
          onClick={() => {
            setstate(2);
          }}
          className="w-[21.125rem] mt-6 flex justify-between items-center border border-none py-4 lg:py-3 text-left px-6 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-300 "
        >
          <span className="text-base font-SofiaPro-Regular">MetaMask</span>

          <figure className="h-10 w-10 relative">
            <Image
              objectFit="contain"
              layout="fill"
              src="/assets/images/mask.png"
              alt=""
            />
          </figure>
        </Button>
      </div>
    </div>
  );
};

export default MetaMaskModal;
