import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import PopupSmall from '../../assets/PopupSmall';
import PopupBig from '../../assets/PopupBig';

const PopupSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const bigSwiperRef = useRef(null);

    useEffect(() => {
        if (bigSwiperRef.current) {
            bigSwiperRef.current.slideToLoop(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div className="swiperWrap">
            <Swiper
                className="popup-small-swiper"
                loop={true}
                centeredSlides={true}
                slideToClickedSlide={true}
                slidesPerView="auto"
                spaceBetween={11}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000, // 3초마다 자동 슬라이드
                    disableOnInteraction: false, // 사용자 조작 이후에도 계속 자동 재생
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {PopupSmall.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="slide-content">
                            <img src={src} alt={`popup-${i + 1}`} className="popup-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="iPhoneImg">
                <img src="/images/popup-image/iPhone.png" alt="iPhone" />
            </p>

            <Swiper
                className="popup-big-swiper"
                onSwiper={(swiper) => {
                    bigSwiperRef.current = swiper;
                }}
                slidesPerView={1}
                allowTouchMove={false}
                loop={true}
            >
                {PopupBig.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="big-slide-content">
                            <img src={src} alt={`big-popup-${i + 1}`} className="big-popup-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopupSlide;
