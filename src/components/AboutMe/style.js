import styled from 'styled-components';

export const AboutMeStyle = styled.div`
    width: 100vw;
    background-image: url(/images/Aboutme-image/1_Background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;

    .container {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        height: 100vh;
        padding: 0 160px;
        box-sizing: border-box;

        .leftBox {
            height: 100%;

            .thumbs-swiper {
                height: 100%;
                .swiper-slide {
                    height: 260px;

                    display: flex;
                    justify-content: center;

                    img {
                        width: auto;
                        height: 100%;
                        border-radius: 4px;
                        border: 2px solid transparent;
                        transition: border-color 0.2s ease;
                    }

                    &.swiper-slide-thumb-active img {
                        filter: grayscale(100%) brightness(50%);
                    }
                }
            }
        }
        .rightBox {
            padding-top: 100px;

            padding-right: 50px;

            .text-box {
                text-align: right;

                h3 {
                    color: var(--Brown-brown-50, #f2efeb);
                    text-align: right;
                    font-family: 'Garamond';
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-bottom: 16px;
                }
                p {
                    color: var(--Brown-brown-100, #cac6c2);
                    text-align: right;
                    margin-bottom: 28px;
                    /* Medium/16px */
                    font-family: 'Pretendard';
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 130%; /* 20.8px */
                }
            }
            .main-swiper {
                width: 1000px;
                height: 650px;
                border-radius: 0;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;
