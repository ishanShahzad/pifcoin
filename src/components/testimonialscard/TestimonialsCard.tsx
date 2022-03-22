import React from "react";
import BlurImage from "../blurimage/BlurImage";
import Image from "next/image";

interface Iprops {
  src2?: any;
  src1?: any;
  text?: string;
  name?: string;
  post?: string;
  id?: string;
}
export const TestimonialsCard = ({
  src1,
  src2,
  text,
  name,
  post,
  id,
}: Iprops) => {
  return (
    <>
      <div className=" bg-[rgba(233,233,233,.1)] hover:border hover:border-pink  border border-transparent inline-block mt-6  rounded-md parent-card">
        {text ? (
          <p className="text-offwhite text-center text-lg px-6 py-8 bg-[rgba(27,14,57,0.5)] ">
            {text}
          </p>
        ) : (
          <figure className="picture1">
            <BlurImage src={src1} width={432} height={237} />
          </figure>
        )}

        <div className="flex items-center justify-between px-6 py-7">
          <div className="flex">
            <figure>
              <Image src={src2} width={64} height={64} />
            </figure>
            <div className="ml-4  flex gap-10  items-center  ">
              <div>
                <p className="font-SofiaPro-Bold">{name}</p>
                <p className="text-base font-SofiaPro-Regular text-primary">
                  {post}
                </p>
              </div>
            </div>
            <div></div>
          </div>
          {text ? (
            <i className="icon-comas text-5xl text-[rgba(233,233,233,.5)]  "></i>
          ) : (
            <figure className="hidden player  ">
              <Image
                src="/assets/images/campaignresult/player.png"
                width={46.67}
                height={46.67}
              />
            </figure>
          )}
        </div>
      </div>
    </>
  );
};
