import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'; // Import the custom CSS file

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true} // Add this line to enable navigation buttons
                loop={true}
                modules={[Pagination, Navigation]}
                className="w-full max-h-[594px] overflow-hidden"
            >
                <SwiperSlide><img src='/ultimate-final-banner.jpg' alt="banner" className="w-full max-h-[594px]" /></SwiperSlide>
                <SwiperSlide><img src='/ultimate-final-banner-2.jpg' alt="banner" className="w-full max-h-[594px]" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;
