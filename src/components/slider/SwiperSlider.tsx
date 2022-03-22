import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../button/Button";
import LandingChart from "../../modules/LandingModule/components/LandingChart";
// import Chart from '../../modules/LandingModule/components/chart'
interface Iprops {
  slide?: any;
  data?: any;
}
const SwiperSlider = ({ slide, data }: Iprops) => {
  console.log(data, "dataaa");

  return (
    <div className="Atslide relative ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className=" relative">
          <div className=" w-full AtBaseImage1 p-1 flex items-center md:block  container">
            <div className=" md:mt-52  lg:w-[68%] mx-auto text-center flex flex-col items-center">
              <h2>A Fashion-Infused NFT Marketplace</h2>
              <p className="font-SofiaPro-Regular md:text-22px  opacity-80 leading-8 mt-10 text-[#E9E9E9] ">
                PIF Essentials aims to spark a conversation of everything
                Crypto. With an urban lifestyle inspired design infused with
                Defi we are a designer clothing brand created specifically for
                the decentralized community.
              </p>
              <div className="flex gap-10 xs:mt-8 mt-16 pt-2 xs:block">
                <Button className="hover:bg-pink">Marketplace</Button>
                <Button className="xs:mt-5 bg-pink hover:bg-[#9c1d96]">
                  Buy PifCoins
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" w-full AtBaseImage4 p-1 flex items-center md:block  container">
            <div className="md:mt-20   lg:w-[60%] mx-auto text-center pt-3.5 flex flex-col items-center">
              <figure className="relative w-[15.43rem] h-[14.68rem]">
                <Image
                  src="/assets/images/landing/logos.png"
                  objectFit="contain"
                  layout="fill"
                />
              </figure>
              <h3 className="mt-10">PIF Essentails</h3>
              <p className="font-SofiaPro md:text-22px text-[#E9E9E9] opacity-90 leading-8 mt-8 ">
                Alios autem dicere aiunt multo etiam inhumanius (quem locum
                breviter paulo ante perstrinxi) praesidii adiumentique causa,
                non benevolentiae neque caritatis, amicitias esse expetendas;
                itaque, ut quisque minimume.
              </p>
              <Button className="mt-12 hover:bg-pink">Learn More</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperSlider;
