import styled from 'styled-components';

export const PopupPageStyle = styled.section`
    padding: 160px 0;
    background: #f8f8f8;

    h3 {
        color: #000;
        font-size: 42px;
        font-weight: 500;
        margin-bottom: 18px;

        strong {
            font-size: 46px;
            font-weight: 700;
        }
    }

    span {
        color: #616161;
        font-size: 16px;
        margin-bottom: 29px;
    }

    .swiperWrap {
        position: relative;
        height: 638px;

        .iPhoneImg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            z-index: 1;
        }
    }

    .popup-small-swiper {
        padding: 140px 0;
        .swiper-slide {
            width: 281px;
            transition: transform 0.3s, scale 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .slide-content {
            background-color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease;
        }
        .swiper-slide-active {
            /* transform: scale(1.27); */
        }
    }

    .popup-big-swiper {
        width: 370px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        z-index: 1;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2), 0 4px 14px 0 rgba(0, 0, 0, 0.05);

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 370px;
        }

        .big-slide-content {
            img {
                display: block;
                max-width: 100%;
                height: auto;
            }
        }
    }
`;
