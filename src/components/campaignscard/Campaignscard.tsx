import React, { useState } from "react";
import Button from "../button/Button";
import Link from "next/link";
import BlurImage from "../blurimage/BlurImage";
import Image from "next/image";
import { Charitydec } from "../charitydescribation/Charitydec";

interface Iprops {
  src1: string;
  src2: string;
  id: any;
  ind?: any;
}

export const Compaignscard = ({ src1, src2, id, ind }: Iprops) => {
  const [state, setstate] = useState(true);
  let togglebtn = () => {
    setstate(!state);
  };

  return (
    <div>
      <div
        key={ind}
        className="bg-[#1B2432] rounded-lg inline-block hover:shadow-lg  relative pb-8 mt-8 hover:border hover:border-pink"
      >
        <figure className="relative   ">
          <BlurImage
            className="rounded-t-lg"
            src={src1}
            height={253}
            width={664}
          />
          {id == 2 ? (
            <div className="bg-[#0C93CD] px-5 py-1.5 absolute top-0 right-0 mt-4 rounded-md text-lg font-SofiaPro ">
              Completed Campaign
            </div>
          ) : (
            ""
          )}

          <figure className=" top-[85%]  absolute sm:left-8 left-[40%] flex-shrink-0 ">
            <Image src={src2} height={116} width={116} />
          </figure>
          <hr className="text-[#C0B6B6]" />
        </figure>
        <div className="2xl:ml-[10.5rem] sm:ml-48 sm:mt-4 mt-36 flex justify-around  sm:justify-between items-center  ">
          <div>
            <h6 className="  text-22px">Physicalo Arworry</h6>
            <p className="text-primary text-base mt-1">Marks Bigsbee</p>
          </div>
          {state == true ? (
            <div
              onClick={togglebtn}
              className=" rounded-md border border-blue bg-blue w-[6.563rem]   sm:py-1 flex  items-center justify-evenly sm:mr-8"
            >
              <p className="  text-xl b">+</p>
              <p className=" text-lg">Follow</p>
            </div>
          ) : (
            <div
              onClick={togglebtn}
              className=" rounded-md border border-blue  w-[8.188rem]   sm:py-1 flex  items-center justify-evenly sm:mr-8"
            >
              <i className="icon-tick text-blue text-base"></i>
              <p className="text-blue text-lg">Following</p>
            </div>
          )}
        </div>

        <div className=" mt-6 px-8  ">
          <Charitydec />
          <p className="sm:max-w-[37.5rem] text-[#E9E9E9]  text-xl mt-8 ">
            Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec
            eleifend porttitor, orci est vehicula velit, scelerisque fringilla
            ligula mi in urna. Nulla ut odio eu mi congue molestie....
          </p>
          {id === "1" ? (
            <Link href="/campaigndetail">
              <a>
                <div className="">
                  <Button className=" whitespace-nowrap py-5 w-full   mt-6  font-SofiaPro text-xs sm:text-base hover:bg-pink">
                    View this Campaign
                  </Button>
                </div>
              </a>
            </Link>
          ) : (
            <div className="  1860:gap-6 gap-10  items-center 2xl:gap-0  2xl:justify-between flex xs:flex-col xs:     mt-6">
              <Link href="/campaigndetail">
                <a>
                  <Button className=" whitespace-nowrap py-5 1860:!px-12 1520:px-8  2xl:px-16   font-SofiaPro text-xs sm:text-base hover:bg-pink">
                    View this Campaign
                  </Button>
                </a>
              </Link>
              <Link href="/campaignresult">
                <a>
                  <Button className="  whitespace-nowrap py-5  1860:!px-12 1520:px-8  2xl:px-16     font-SofiaPro text-xs sm:text-base hover:bg-pink">
                    Campaign Results
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
