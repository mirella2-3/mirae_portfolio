import styled from 'styled-components';

export const PeopleStyle = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section {
        position: relative;
        width: 100vw;
        height: 100svh;
        background-color: #362718;
        color: #fff;
        overflow: hidden;

        .intro,
        .outro {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 50%;
            z-index: 1;
            color: #cac6c2;
            font-size: 16px;
            font-family: 'EB Garamond';
            padding-top: 297px;
            padding-bottom: 160px;
            p {
                width: 109px;
                height: 109px;
                flex-shrink: 0;
                aspect-ratio: 1/1;
                position: absolute;
                top: 63%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                z-index: 0;
            }
            h1 {
                position: relative;
                z-index: 1;
                text-transform: uppercase;
                font-size: 6rem;
                line-height: 0.85;
                letter-spacing: -0.02rem;
                color: #cac6c2;
                font-size: 40px;
                font-family: 'EB Garamond';
                font-weight: 600;
                span {
                    font-size: 15px;
                    display: block;
                    font-family: 'EB Garamond';
                    margin: 50px;
                    font-weight: 300;
                }
            }
        }

        .spotlight {
        }

        .spotlight-images {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 300svh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transform: translateY(5%);
            will-change: transform;
        }

        .row {
            width: 100%;
            display: flex;
            gap: 2rem;

            .img {
                flex: 1;
                overflow: hidden;

                img {
                    opacity: 0.5;
                    filter: saturate(0);
                }
            }
        }

        .mask-container {
            position: absolute;
            top: 10%;
            left: 0;
            width: 100vw;
            height: 100svh;
            -webkit-mask: url(/images/Aboutme-image/1_Background.png) center/contain no-repeat;
            mask: url(/images/Aboutme-image/1_Background.png) center/contain no-repeat;

            overflow: hidden;
            -webkit-mask-size: 0%;
            mask-size: 0%;
            z-index: 10;

            .mask-img {
                width: 100%;
                height: 100%;
                font: 30px;
            }
        }
    }

    .bg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        mix-blend-mode: multiply;
        img {
        }
    }
    .text-box {
        padding-top: 163px;
        position: relative;
        z-index: 1;
        align-items: center;
        .bg {
            margin-bottom: 500px;
        }
        h5 {
            color: #cac6c2;
            font-size: 16px;
            font-weight: 500;
            line-height: 130%;
        }
    }

    .outro {
        position: relative;
        background: transparent;
        /* background-image: url(/images/Aboutme-image/LastContent.png); */
        /* background-size: cover; */
        background: #362718;

        .inner {
            text-align: center;
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            p {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                border: 1px solid transparent;
                width: 530px;
                height: 488px;
                flex-shrink: 0;
                background: #362718;
                img {
                    width: 100%;
                    height: 100%;
                    flex-shrink: 0;
                    mix-blend-mode: multiply;
                }
            }

            h4 {
                color: var(--Brown-brown-200, #b1aaa4);
                text-align: center;
                font-size: 40px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                margin-bottom: 28px;
                font-family: 'EB Garamond';
            }
            h5 {
                color: var(--White, #fff);
                text-align: center;
                font-family: Pretendard;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 130%;
                margin-bottom: 310px;
            }
            span {
                color: var(--Brown-brown-100, #787572ff);

                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        section {
            &:first-child {
                margin-top: 500px;
            }
            .header {
                width: 100%;

                p {
                    font-size: 30px;
                }
                h1 {
                    font-size: 60px;
                    height: auto;
                    margin: 0;
                    span {
                        font-size: 22px;
                    }
                }
            }
        }
        .outro {
            width: 100vw;
            .inner {
                h5 {
                    font-size: 24px;
                    font-weight: 300;
                }
                span {
                    font-size: 20px;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        section {
            &:first-child {
                margin-top: 0px;
            }
            .header {
                p {
                    font-size: 20px;
                }
                h1 {
                    font-size: 40px;
                    height: auto;

                    span {
                        margin: 30px auto;
                        width: 400px;
                        font-size: 20px;
                        word-break: keep-all;
                        line-height: 1.2;
                    }
                }
            }
            .text-box {
                padding-top: 400px;
            }
        }
        .outro {
            .inner {
                position: absolute;
                top: 40%;
                left: 50%;
                p {
                    top: 50%;
                }
                h4 {
                    font-size: 32px;
                }
                h5 {
                    font-size: 20px;
                }
                span {
                    font-size: 16px;
                }
            }
        }
    }
`;
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
                    font-family: 'EB Garamond';
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
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
