import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { RoadMapData } from "../../../data/RoadMapData";
import MainCard from "../../../components/maincard/MainCard";
import { Charitydata } from "../../../data/charitydata";

export const MoreCompaignSlider = () => {
  return (
    <div className="mySwiper">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="morecompaign"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 32,
          },

          1536: {
            slidesPerView: 4.5,
            spaceBetween: 32,
          },
        }}
      >
        {Charitydata?.map((item,i) => (
          <SwiperSlide className="" key={i}>
            <MainCard {...item} ind={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
