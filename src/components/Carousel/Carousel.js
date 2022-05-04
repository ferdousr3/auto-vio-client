import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import './swiper.css'

import carousel1 from '../../images/CarouselImage/g80.jpg'
import carousel2 from '../../images/CarouselImage/g90.jpg'
import carousel3 from '../../images/CarouselImage/gv60.jpg'
import carousel4 from '../../images/CarouselImage/gv70.jpg'
import carousel5 from '../../images/CarouselImage/gv70-1.jpg'

import { Autoplay,EffectFade, Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        <div className="container mySwiper">
          <SwiperSlide>
            <img src={carousel1} alt="all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel2} alt="all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel3} alt="all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel4} alt="all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel5} alt="all" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
