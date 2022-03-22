import React from "react";
import Button from "../../../components/button/Button";
import BlurImage from "../../../components/blurimage/BlurImage";
const Whitepaper = () => {
  return (
    <div className="p-1 pb-[7.063rem]" id="whitepaper">
      <div className="container mt-[11.063rem] grid lg:grid-cols-2 xl-gap-0 gap-14">
        <div className=" ">
          <h6 className="font-SofiaPro text-xl text-primary">Introduction</h6>
          <h2 className="mt-4">Vision</h2>
          <p className=" max-w-[38.438rem]  text-primary mt-12">
            To fuse blockchain with high fashion and luxury brands by creating
            exclusive product with premier quality and a one of a kind
            authentication.
          </p>
          <Button className=" text-xl font-SofiaPro px-[4.438rem] py-4 mt-[4.5rem] hover:bg-pink ">
            Whitepaper
          </Button>
        </div>
        <div className="  ">
          <figure className="  flex-shrink-0  ">
            <BlurImage
              src="/assets/images/landing/light.png"
              alt=""
              height={435}
              width={664}
              className="rounded-md  "
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Whitepaper;
