import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import { PortraitPageStyle } from './style';

const PortraitPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [1, 2, 3, 4, 5];

    return (
        <PortraitPageStyle>
            <div className="container">
                {/* 텍스트박스 + 썸네일 묶음 (세로 정렬) */}
                <div className="leftBox">
                    <div className="text-box">
                        <h3>Portrait Retouching</h3>
                        <p>이미지 위에 마우스를 올려보면 보정 전 사진을 확인할 수 있습니다.</p>
                    </div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        watchSlidesProgress
                        slideToClickedSlide
                        className="thumbs-swiper"
                    >
                        {images.map((n) => (
                            <SwiperSlide key={n}>
                                <img src={`/images/main-${n}.png`} alt={`thumb-${n}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 메인 슬라이더 (오른쪽에) */}
                <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    // spaceBetween={10}
                    slidesPerView={1}
                    className="main-swiper"
                >
                    {images.map((n) => (
                        <SwiperSlide key={n}>
                            <img src={`/images/main-${n}.png`} alt={`main-${n}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </PortraitPageStyle>
    );
};

export default PortraitPage;
