import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper.css";

import {
  Autoplay,
  Pagination,
  EffectFade,
  Navigation
  
} from "swiper";
import useProducts from "../../hooks/useProducts";

const Carousel = () => {
  const [products, setProducts] = useProducts([]);
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade, Navigation, Pagination]}
      >
        <div className="container mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <img
                className="relative w-[100%] h-auto xl:h-[500px]"
                src={product?.carouselImg}
                alt="all"
              />
              <div className="container uppercase absolute top-[15%] left-[10%]">
                <p className="  z-20 text-white text-xl md:text-2xl font-light">
                  {product.supplier}
                </p>
                <p className="  z-20 text-white text-xl md:text-5xl font-light">
                  {product.name}
                </p>
              </div>
              <div className=" left-72 absolute top-48 z-20 block min-w-sm h-4 border-2 bg-white text-white ">
                <span className="  "></span>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
