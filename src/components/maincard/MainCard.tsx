import Image from "next/image";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import BlurImage from "../blurimage/BlurImage";
import Link from "next/link";
import Button from "../button/Button";

interface Iprops {
  src: string;
  src1?: any;
  owned?: string;
  charity: string;
  charitypurpose: string;
  pricetype: string;
  pifprice: string;
  usaprice: string;
  get: string;
  id: any;
  nft?: any;
  ind?: any;
}
const MainCard = ({
  src,
  src1,
  owned,
  charity,
  charitypurpose,
  pricetype,
  pifprice,
  usaprice,
  get,
  id,
  ind,
  nft,
}: Iprops) => {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <div
        key={ind}
        className="  w-full  inline-block  bg-[rgba(233,233,233,.1)]   hover:border  hover:border-pink
       rounded-lg  "
      >
        <Link href="/charitymarketdetail">
          <figure>
            <BlurImage
              src={src}
              width={373}
              height={286}
              alt=""
              className=" rounded-t-lg"
            />
          </figure>
        </Link>
        <div className="flex items-center justify-between  p-[1.125rem]">
          <div>
            <h3 className="text-xl text-white"><Link href="/charitymarketdetail">{charity}</Link></h3>
            <p className="text-blue text-sm mt-1">{charitypurpose}</p>
          </div>
          <i
            className={` text-base icon-heart ${
              id == 4 ? " bg-pink " : "bg-[rgba(125,118,118,.36)] "
            }  text-white   p-2.5  border border-[#C0B6B6] rounded-full `}
          ></i>
        </div>
        <div className="  !px-4 ">
          {owned ? (
            <div className="flex justify-between ">
              <p className=" font-SofiaPro-Regular text-primary text-sm">
                Owned by:
              </p>
              <div className="flex ">
                <Image src={src1} height={27} width={27} />
                <p className="text-base font-SofiaPro-Regular ml-2">{owned}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="px-[1.125rem]">
          <p className="text-[#C0B6B6] text-sm">{pricetype}</p>
        </div>
        <div className="px-[1.125rem] flex items-center">
          <h5 className="text-white mt-1">{pifprice}</h5>
          <h6 className="ml-2.5 mt-3 text-[#C0B6B6] text-sm font-SofiaPro">
            {usaprice}
          </h6>
        </div>
        <div className="px-[1.125rem] py-4">
          <button
            onClick={() => {
              setPopup(true);
            }}
            className={`text-white rounded-lg font-SofiaPro hover:bg-pink border border-pink text-base w-full py-3.5`}
          >
            {get}
          </button>
        </div>
      </div>
      <Modal
        hide={setPopup}
        show={popup}
        className="mt-12 bg-[#1B0E39] rounded-md  "
      >
        <div className=" lg:w-[56rem]    py-6  ">
          <h5 className="">Price History</h5>
          <hr className="mt-5" />
          <div className="flex flex-col   p-9">
            <div className=" flex justify-between   ">
              <p className="font-SofiaPro-Bold text-offwhite">Item</p>
              <p className="font-SofiaPro-Bold text-offwhite">Subtotal</p>
            </div>
            <div className="mt-2">
              <hr className="text-primary" />
            </div>
            <div className="mt-6 flex   ">
              <figure>
                <Image
                  src="/assets/images/landing/coin.png"
                  height={120}
                  width={120}
                  className="rounded-lg"
                />
              </figure>
              <div className="flex justify-between items-center w-full xs:block ">
                <div className="ml-4">
                  <p className=" font-SofiaPro-Regular text-base text-left">
                    Order #. 1415
                  </p>
                  <p className=" font-SofiaPro-Regular text-base text-blue text-left ">
                    Charity 4 Cancer
                  </p>
                  <h4 className=" font-SofiaPro text-2xl text-left ">
                    Minimal Wear
                  </h4>
                  <p className="text-sm font-SofiaPro-Regular text-primary text-left mt-1.5">
                    Charity Fee: 25%
                    <span className="ml-2 mt-1   ">
                      <i className="icon-cros  "></i>
                    </span>
                  </p>
                </div>
                <div className="xs:mt-6 xs:mr-20">
                  <h5>0.005 PIF</h5>
                  <p className="text-base font-SofiaPro-Regular text-primary">
                    550.15 USD
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-10">
              <h6 className="text-left text-xl  ">Shipping Details</h6>
              <hr className="text-primary mt-5" />
              <div className=" flex justify-between mt-5">
                <p className=" text-left sm:w-[25rem] font-SofiaPro-Regular text-lg text-primary">
                  You need to login first for shipping this product at your
                  doorstep
                </p>
                <Button className="bg-pink px-8 py-2.5 text-sm font-SofiaPro-Regular">
                  {" "}
                  Login Now
                </Button>
              </div>
              <hr className="text-primary mt-5" />
              <div className=" flex items-center mt-5">
                <input type="checkbox" className="" />
                <p className="text-lg font-SofiaPro-Regular text-primary ml-4 sm:mt-0 mt-5 ">
                  By checking this box, I will agree to PIF Charity{" "}
                  <span className="text-blue"> “Terms & Conditions”</span>{" "}
                </p>
              </div>
              <hr className="text-primary mt-5" />
            </div>
            <div className="flex sm:justify-center items-center gap-6 mt-10">
              <Button className="px-18 py-5 font-SofiaPro-Regular text-base"> Add Funds</Button>
              <Button className="px-11 py-5 bg-pink text-base font-SofiaPro-Regular "> Confirm Checkout</Button>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MainCard;
