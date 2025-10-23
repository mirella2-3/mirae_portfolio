import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import { AboutMeStyle } from './style';

const AboutMe = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [1, 2, 3, 4, 5, 6, 7];

    return (
        <AboutMeStyle>
            <div className="container">
                <div className="leftBox">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        watchSlidesProgress
                        slideToClickedSlide
                        direction="vertical"
                        // centeredSlides={true}
                        loop={true}
                        className="thumbs-swiper"
                    >
                        {images.map((n) => (
                            <SwiperSlide key={n}>
                                <img
                                    src={`/images/Aboutme-image/Bigimgae0${n}.png`}
                                    alt={`thumb-${n}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="rightBox">
                    <div className="text-box">
                        <h3>Every Moment, Like a Rich Brew</h3>
                        <p>모든 순간에 삶의 풍미를 더하며 즐겁게 살아가고 있습니다.</p>
                    </div>

                    <Swiper
                        modules={[Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                        slidesPerView={1}
                        effect="fade"
                        speed={500}
                        loop={true}
                        className="main-swiper"
                    >
                        {images.map((n) => (
                            <SwiperSlide key={n}>
                                <img
                                    src={`/images/Aboutme-image/Bigimgae0${n}.png`}
                                    alt={`main-${n}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </AboutMeStyle>
    );
};

export default AboutMe;
