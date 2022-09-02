import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import Img1 from "../../images/1.jpg"
import Img2 from "../../images/2.jpg"
import Img3 from "../../images/3.jpg"
import Img4 from "../../images/4.jpg"
import "./Sliders.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
function Sliders() {

    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 5000,
            }}
            slidesPerView={2}
            // scrollbar={{ draggable: true }}
            navigation={true} modules={[Navigation, Pagination, Scrollbar, Autoplay]} className="mySwiper"
        >
            <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>

        </Swiper>
    );
}

export default Sliders