import React, { useState, useEffect } from "react";
import data from "../../assets/project-data.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function App() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const getRandomPictures = () => {
      const shuffled = data.results.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4).map((item) => item.picture_url.url);
    };

    setPictures(getRandomPictures());
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-color": "#232323",
          "--swiper-pagination-bullet-inactive-color": "#F8F8F8",
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <img src={picture} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
