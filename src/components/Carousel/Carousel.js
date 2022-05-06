import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper.css";
import Loading from '../share/Loading/Loading'

import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import useProducts from "../../hooks/useProducts";

const Carousel = () => {
  const [products] = useProducts([]);

  return (
    <>
      <Swiper
        spaceBetween={0}
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
        {products ? <div className="container mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <img
                className="relative w-[100%] h-[150px] md:h-[400px] xl:h-[500px]"
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
              <div
                className=" hidden left-0 absolute top-[50%] w-60 z-20 xl:block min-w-sm h-1
              border border-second  bg-white text-white "
              ></div>
              <div
                className=" hidden left-0 absolute top-[58%] w-60 z-20 xl:block min-w-sm h-1
              border border-second  bg-white text-white "
              ></div>
            </SwiperSlide>
          ))}
        </div> : <Loading /> }
      </Swiper>
    </>
  );
};

export default Carousel;
