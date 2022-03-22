import React from "react";
import BlurImage from "../../components/blurimage/BlurImage";
import Input from "../../components/input/Input";
import Faqs from "./components/Faqs";

const AboutusModule = () => {
  return (
    <div className="campaignresult-background ">
      <div className=" aboutus  h-[18.75rem] xs:h-[11rem] flex justify-center items-center   ">
        <h3 className="">About Us</h3>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center mt-[5.5rem]">
          <p className="text-lg text-primary text-center mb-3">Who we are</p>
          <h3>What is PIF Essentials?</h3>
          <div className="lg:w-[56rem]">
            <p className=" text-lg text-primary text-center mt-10">
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
              Egestas dui id ornare arcu odio ut sem. Egestas egestas fringilla
              phasellus faucibus scelerisque eleifend. Eros donec ac odio tmpor
              orci dapibus ultrices in iaculis. Ut lectus arcu bibendum at
              varius vel <span className="text-pink"> Pharetra Vel</span> .
              Donec et odio pellentesque diam volutpa mmodo. Id semper risus in
              hendrerit gravida. Et netus et malesuada fames ac turpis egestas
              integer.n this subject we have, of course, the difficulty of
              quantum mechanical behavior of things is quite strange. Nobody has
              an everyday experience to lean on to get a rough, intuitive idea
              of what will happen,
            </p>
            <p className="text-lg text-primary text-center mt-7">
              PIF Coins aims to spark a conversation of everything{" "}
              <span className="text-pink"> Crypto</span> with an urban lifestyle
              inspired design infused with Defi we are the first designer
              clothing brand created specifically for the{" "}
              <span className="text-pink"> Decentralized Community.</span>
            </p>
          </div>
        </div>
        <div className=" max-w-[1128px] mx-auto sm:flex gap-8 lg:mt-[12.5rem] mt-20 items-center">
          <div className="flex-shrink-0 mb-10 sm:mb-0">
            <BlurImage
              src="/assets/images/aboutus/img2.png"
              height={368}
              width={316}
            />
          </div>
          <div>
            <h4 className="text-22px mb-8">Essentails at Doorsteps</h4>
            <h6>Now at your doorsteps</h6>
            <p className="text-sm text-primary mt-3 leading-6 mb-5">
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
              Egestas dui id ornare Is isarcu odio ut sem. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend. Eros donec ac
              odio tmpor orci dapibus ultrices in iaculis. Ut lectus arcu
              bibendum at varius vel Pharetra Vel.
            </p>
            <h6>New Origin</h6>
            <p className="text-sm text-primary mt-3 leading-6 mb-5">
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
              Egestas dui id ornare Is isarcu odio ut sem. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend. Eros donec ac
              odio tmpor orci dapibus ultrices in iaculis. Ut lectus arcu
              bibendum at varius vel Pharetra Vel.
            </p>
          </div>
        </div>

        <div className=" sm:grid grid-cols-2  gap-8 lg:mt-[12.5rem] mt-20 items-center">
        
          <div>
            {/* <h4 className="text-22px mb-8">Essentails at Doorsteps</h4> */}
            <h5>PIF Essentials Market Audience</h5>
            <p className="text-base text-primary mt-3 leading-6 mb-5">
              Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
              Egestas dui id ornare Is isarcu odio ut sem. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend. Eros donec ac
              odio tmpor orci dapibus ultrices in iaculis. Ut lectus arcu
              bibendum at varius vel Pharetra Vel.
            </p>

            <p className=" text-base text-primary mt-3 leading-6 mb-5">
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
              Eros donec ac odio tmpor orci dapibus ultrices in iaculis.Neque
              aliquam vestibulum morbi blandit cursus risus at ultrices. Egestas
              dui id ornare Is isarcu odio ut sem.
            </p>
          </div>
          <div className="bg-[#151F2A] rounded-md p-8">
          <Faqs/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:mt-[12.5rem] mt-20 pb-[8.375rem]">
          <h3 className="mb-7">Contact Details</h3>
          <div className="mb-[77px]">
            <p className=" text-lg text-primary text-center">
                Neque aliquam vestibulum morbi blandit cursus risus at ultrices.<br /> Egestas dui id ornare arcu odio ut sem
            </p>
          </div>
          <div className="bg-graydull2 rounded-lg p-10 w-[1128px]">
            <form>
              <div className="mb-8 grid grid-cols-2 gap-x-8">
                  <div>
                      <label className="block text-offwhite text-lg font-SofiaPro-Bold mb-4">
                        Name
                      </label>
                      <Input placeholder={"Enter Name"} />
                  </div>
                  <div>
                      <label className="block text-offwhite text-lg font-SofiaPro-Bold mb-4">
                        Email
                      </label>
                      <Input placeholder={"Enter Email"} />
                  </div>
              </div>
              <div className="mb-8">
                <label className="block text-offwhite text-lg font-SofiaPro-Bold mb-4">
                  Subject
                </label>
                <Input placeholder={"Subject"} />
              </div>
              <div className="">
                <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                    Description
                </label>
                <textarea className="relative px-5 border h-[148px] py-4 border-primary rounded-lg text-offwhite bg-transparent text-base w-full outline-none" placeholder="Discription"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusModule;
