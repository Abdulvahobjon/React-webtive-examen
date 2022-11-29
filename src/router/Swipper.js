import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./blog.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swipper() {
  return (
    <div>
        <br /><br /><br />
          <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
        <br /><br /><br />
      <SwiperSlide>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyyYZ2N2uQrOktRkIsi1ZS0NBnq5VVXlpAw&usqp=CAU"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/premium-vector/little-kid-avatar-profile_18591-50928.jpg?w=2000"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145866.png"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
