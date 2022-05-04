import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper.css";

import carousel1 from "../../images/CarouselImage/g80.jpg";
import carousel2 from "../../images/CarouselImage/g90.jpg";
import carousel3 from "../../images/CarouselImage/gv60.jpg";
import carousel4 from "../../images/CarouselImage/gv70.jpg";
import carousel5 from "../../images/CarouselImage/gv70-1.jpg";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Carousel = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const url = `http://localhost:5000/product`;
    const url = `https://auto-vio.herokuapp.com/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <img className="relative" src={product?.carouselImg} alt="all" />
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
