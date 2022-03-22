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

export default function RoadMapSlider() {
  return (
    <div className="mySwiper">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
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
            spaceBetween: 48,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 66,
          },

          1536: {
            slidesPerView: 4.8,
            spaceBetween: 96,
          },
        }}
      >
        {RoadMapData.map((item,i) => (
          <SwiperSlide className="text-center" key={i}>
            <h4 className="mb-[100px]">{item.title}</h4>
            <ul className="text-xl font-SofiaPro">
              <li className="listItems">{item.list1}</li>
              <li className="listItems">{item.list2}</li>
              <li className="listItems">{item.list3}</li>
              <li className="listItems">{item.list4}</li>
              <li className="listItems">{item.list5}</li>
              <li className="text-pink text-lg mt-6 cursor-pointer inline-block">
                {item.btn}
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
