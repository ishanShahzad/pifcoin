import React from "react";
import Button from "../../components/button/Button";
import BlurImage from "../../components/blurimage/BlurImage";
import Image from "next/image";
export const PIFEssentailsModule = () => {
  return (
    <div className="campaignresult-background ">
      <div className=" PIFEssentails  h-[18.75rem] xs:h-[11rem] flex justify-center items-center   ">
        <h3 className="">PIF Essentails</h3>
      </div>
      <div className="p-1">
        <div className="container  mt-[11.063rem]  flex-col-reverse xl:flex-row flex gap-20      ">
          <div className="mt-20 xl:mt-0 w-full 3xl:w-[41.5rem] ">
            <h6 className=" font-SofiaPro-Regular text-lg text-primary">
              Introduction
            </h6>
            <h3 className="mt-4">PIF Essentials</h3>
            <p className=" lg:w-[41.5rem]  text-lg font-SofiaPro-Regular   text-primary mt-12">
              Each PIF Essentials collection reveal will coincide with launching
              a set of NFTs created to specifically to ensure the ultimate
              authenticity. Purchasing these NFTs will earn you article of
              clothing from the collection at hand. Within each collection one
              special NFT will be auctioned off, earning the winner a one of a
              kind piece with a unique identifier. PIF Essentials patent-pending
              authentication process will reshape exclusivity.
            </p>
            <Button className=" text-base font-SofiaPro px-[4.188rem] py-5 mt-[4rem]  hover:bg-pink">
              Learn More
            </Button>
          </div>
          <div className="  xl:w-[40.188rem]  relative  bottom-20 ">
            <figure className="flex-shrink-0 relative left-52 xs:w-[14rem] xs:left-32 xs:h-[22.68rem] 3xl:left-72 h-[29.68rem] w-[21.75rem]">
              <Image
                src="/assets/images/PIFEssentials/img2.jpg"
                alt=""
                layout="fill"
                className="rounded-md  "
              />
            </figure>
            <figure className="h-[29.68rem] w-[24.93rem] xs:w-[14rem] xs:h-[22.68rem]  flex-shrink-0  absolute  left-0 top-44   rounded-xl">
              <Image
                src="/assets/images/PIFEssentials/img1.jpg"
                alt=""
                layout="fill"
                className="rounded-md  "
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container  3xl:mt-72 mt-20  ">
        <div className="flex flex-col  items-center ">
          <h6 className=" font-SofiaPro-Regular text-primary ">Our Clothing</h6>
          <h3 className="text-center mt-3 ">Decentralized Fashion</h3>
          <h6 className="lg:w-[40.875rem] text-center font-SofiaPro-Regular text-primary mt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </h6>
        </div>
        <div className="flex gap-[5.188rem] 3xl:flex-row flex-col-reverse mt-24 ">
          <div className="">
            <h3 className="3xl:mt-4 mt-20 text-22px">Classic Collections</h3>
            <p className=" 3xl:w-[34.25rem]  text-lg font-SofiaPro-Regular leading[1.688rem]   text-primary mt-12">
              Classic collections will launch with a limited release quantity.
              Designs will be locked in a vault for a minimum of one year after
              the initial release. .
            </p>
            <p className=" 3xl:w-[34.25rem]  text-lg font-SofiaPro-Regular leading[1.688rem]   text-primary mt-4">
              Inspirations will stem from the world of DEFI and always have a
              variation of the PIF Essentials logo
            </p>
            <h3 className="mt-4 text-22px">Essentials LA</h3>
            <p className="3xl:w-[34.25rem]  text-lg font-SofiaPro-Regular   text-primary mt-3">
              With more intricate designs, Essentials LA will raise the bar on
              exclusivity by offering a smaller release quantity.
            </p>
            <p className="  lg:w-[34.25rem]  text-lg font-SofiaPro-Regular   text-primary mt-3">
              Designs will be locked in a vault for a minimum of two year after
              the initial release.
            </p>
            <p className="3xl:w-[34.25rem]  text-lg font-SofiaPro-Regular   text-primary mt-3">
              Inspirations will be infused with the world of DEFI and tailored
              towards all walks of life. PIF logo visibility will be extremely
              minimal or removed.
            </p>
            <Button className=" text-base font-SofiaPro px-11 py-5 mt-[3rem] hover:bg-pink">
              Check the Market
            </Button>
          </div>
          <div className=" mt-20 3xl:mt-0 flex items-center  ">
            <div className="h-[330px] relative items-center mx-auto flex gap-[10.438rem]">
              <figure className="  flex-shrink-0   white-border sm:h-[20.125rem] sm:w-[15.563rem] h-[15.125rem] w-[10.563rem] xs:w-[2rem]">
                <Image
                  src="/assets/images/PIFEssentials/img3.png "
                  alt=""
                  layout="fill"
                  className="rounded-md  "
                />
              </figure>
              <figure className="flex-shrink-0 white-border sm:h-[20.125rem] sm:w-[15.563rem] h-[15.125rem] w-[10.563rem]  ">
                <Image
                  src="/assets/images/PIFEssentials/img3.png"
                  alt=""
                  layout="fill"
                  className="rounded-md  "
                />
              </figure>
              <figure className="flex-shrink-0   absolute white-border left-32 xs:left-20 sm:h-[28.875rem] sm:w-[24.5rem] h-[28.875rem] w-[16.5rem] xs:w-[12rem] rounded-xl">
                <Image
                  src="/assets/images/PIFEssentials/img4.png"
                  alt=""
                  layout="fill"
                  className="rounded-md  "
                />
              </figure>
            </div>
          </div>
        </div>
        <div className=" mt-[11.063rem]   pb-[16.688rem]   ">
          <div>
            <h6 className=" font-SofiaPro-Regular text-lg text-primary">
              Wearing Trends
            </h6>
          </div>

          <h3 className="mt-4">Collaborations</h3>
          <div className="lg:flex">
            <div className=" 2xl:w-[53.625rem] mt-28 shadow-[0px_0px_6px_.5px_rgba(255,255,255,.3)] pb-24 bg-[rgba(27,14,57,0.32)] rounded-lg">
              <p className="lg:w-[46.25rem]  text-lg font-SofiaPro-Regular pl-5 pr-20 py-[5.875rem]text-primary mt-12">
                Collaborative launches will have our most limited release
                quantity and NEVER be made available again.
                <br />
                <br /> Designs will be infused with the world of defi, with
                inspirations coming from artists, influencers, celebrities,
                athletes, designers, charities, and various projects within the
                space. <br />
                <br /> Our collaborations are meant to highlight individuals
                and/or platforms that bring innovation, value and positivity to
                DEFI.
              </p>
              <Button className=" text-base font-SofiaPro ml-5 px-[4.188rem] py-5  hover:bg-pink">
                More Details
              </Button>
            </div>
            <div className="mt-8 lg:mt-0 ">
              <figure className="  flex-shrink-0 white-border relative lg:-left-5 ">
                <BlurImage
                  src="/assets/images/PIFEssentials/img5.png"
                  alt=""
                  height={582}
                  width={548}
                  className="rounded-md  "
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
