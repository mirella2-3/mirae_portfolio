import styled from 'styled-components';

export const PortraitPageStyle = styled.div`
    width: 100vw;
    background: radial-gradient(50% 50% at 50% 50%, #e4e3e1 0%, rgba(141, 132, 123, 0) 100%);
    .container {
        display: flex;
        justify-content: space-between;
        .leftBox {
            width: 50%;
            padding: 160px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .text-box {
                margin-bottom: 20px;
                padding-left: 182px;

                h3 {
                    font-size: 46px;
                    font-weight: 700;
                    color: #000;
                }
                p {
                    color: #616161;
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            .thumbs-swiper {
                width: 620px;
                /* width: 620px; */
                height: 147px;
                padding-right: 540px;

                .swiper-slide {
                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 4px;
                        border: 2px solid transparent;
                        transition: border-color 0.2s ease;
                    }

                    &.swiper-slide-thumb-active img {
                        border-color: #000;
                    }
                }
            }
        }

        .main-swiper {
            width: 1079px;
            height: 1080px;

            img {
                width: 100%;
                height: auto;
                border-radius: 8px;
            }
        }
    }
`;
