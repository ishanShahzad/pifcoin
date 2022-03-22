import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";

const Connecting = ({ setstate }: any) => {
  useEffect(() => {
    setTimeout(() => {
      setstate(3);
    }, 2000);

  }, []);
  return (
    <div className=" w-[27.563rem]   py-7 ">
      <h6>Connecting</h6>
      <hr className="mt-5" />
      <div className="text-center ">
        <p className="text-primary font-SofiaPro-Regular text-base mt-8   text-center">
        MetaMask wallet details screen<br></br> with data will come here
        </p>
      </div>
      <figure className="mt-12">
          <Image src="/assets/images/loader.png" height={48} width={48}/>
      </figure>
      <p className="text-base font-SofiaPro-Regular mt-2 ">Loading to Connect</p>
    </div>
  );
};

export default Connecting;
