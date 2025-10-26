import styled, { keyframes } from 'styled-components';

export const IntroStyle = styled.div`
    box-sizing: border-box;

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    section {
        position: relative;
        width: 100vw;
        height: 100svh;
        padding: 2rem;
        overflow: hidden;
    }

    /* con1 */
    .con1 {
        background-color: #f9f4eb;

        background-image: url(/images/Intro-image/Index021.png);
        background-size: cover;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-color: #362718;
        color: #000000;
        display: flex;
        justify-content: center;

        h2 {
            font-size: 80px;
            line-height: 1.1;
            text-align: center;
            padding-top: 100px;
        }

        .con1-cards {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 35%;
            display: flex;
            justify-content: center;
            gap: 1rem;

            .card {
                flex: 1;
                position: relative;
                aspect-ratio: 5 / 7;
                padding: 0.75rem;
                /* border-radius: 0.5rem; */
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .card-title {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }

                span {
                    font-size: 0.7rem;
                }

                &#con1-card-1 {
                    background-image: url(/images/Intro-image/card1.png);
                    background-size: cover;
                    background-position: 0 0;
                    background-repeat: no-repeat;
                    transform-origin: top right;
                    z-index: 2;
                }

                &#con1-card-2 {
                    background-image: url(/images/Intro-image/card2.png);
                    background-size: cover;
                    background-position: 0 0;
                    background-repeat: no-repeat;
                    z-index: 1;
                }

                &#con1-card-3 {
                    background-image: url(/images/Intro-image/card4.png);
                    background-size: cover;
                    background-position: 0 0;
                    background-repeat: no-repeat;
                    transform-origin: top left;
                    z-index: 0;
                }
            }
        }
    }

    .con2,
    .con4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #24190f;
        color: #f9f4eb;
    }
    .con2 {
        font-family: 'EB Garamond';
        font-size: 30px;
    }

    .con3 {
        /* padding: 8rem 2rem; */

        .con3-header {
            position: relative;
            width: 100%;
            text-align: center;
            transform: translateY(400%);
            will-change: transform;
        }
    }

    .cards {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100svh;
        display: flex;
        justify-content: center;
        z-index: -1;
        background: #362718;
        background-image: url(/images/Intro-image/Index02.png);
        background-size: cover;
        background-position: 0 0;
        background-repeat: no-repeat;

        .cards-container {
            position: relative;
            width: 60%;
            height: 100%;
            margin-top: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4rem;

            .card {
                flex: 1;
                position: relative;
                aspect-ratio: 5 / 7;
                perspective: 1000px;
                opacity: 0;

                .card-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    animation: floating 2s infinite ease-in-out;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;

                    .flip-card-front,
                    .flip-card-back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                        backface-visibility: hidden;
                        overflow: hidden;
                    }

                    .flip-card-front {
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .flip-card-back {
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 2rem;
                        transform: rotateY(180deg);
                        background-image: url(/images/Intro-image/card-back.png);
                        background-size: cover;
                        background-position: 0 0;
                        background-repeat: no-repeat;
                        .card-title {
                            display: flex;
                            flex-direction: column;
                            /* justify-content: center; */
                            align-items: center;
                            text-align: center;
                            width: 100%;
                            height: 100%;
                            position: relative;

                            p {
                                color: #d1c5bc;
                                display: block;
                                font-family: 'EB Garamond';
                                font-size: 38px;
                                font-style: normal;
                                font-weight: 600;
                                line-height: normal;
                                display: block;
                                margin: 0;
                                margin-top: 150px;
                            }
                            span {
                                display: block;
                                color: var(--Brown-brown-400, #81614e);
                                font-family: 'EB Garamond';
                                font-size: 40px;
                                font-style: normal;
                                font-weight: 600;
                                line-height: 124%; /* 49.6px */
                                margin-top: 25px;
                            }
                        }
                    }
                }

                &#card-1 {
                    .flip-card-front {
                        background-image: url(/images/Intro-image/card1.png);
                        background-size: cover;
                        background-position: 0 0;
                        background-repeat: no-repeat;
                    }
                    transform: translateX(100%) translateY(-100%) rotate(-5deg) scale(0.25);
                    z-index: 2;
                    .card-wrapper {
                        animation-delay: 0s;
                    }
                }

                &#card-2 {
                    .flip-card-front {
                        background-image: url(/images/Intro-image/card2.png);
                        background-size: cover;
                        background-position: 0 0;
                        background-repeat: no-repeat;
                    }
                    transform: translateX(0%) translateY(-100%) rotate(0deg) scale(0.25);
                    z-index: 1;
                    .card-wrapper {
                        animation-delay: 0.25s;
                    }
                }

                &#card-3 {
                    .flip-card-front {
                        background-image: url(/images/Intro-image/card4.png);
                        background-size: cover;
                        background-position: 0 0;
                        background-repeat: no-repeat;
                    }
                    transform: translateX(-100%) translateY(-100%) rotate(5deg) scale(0.25);
                    z-index: 0;
                    .card-wrapper {
                        animation-delay: 0.5s;
                    }
                }
            }
        }
    }

    @keyframes floating {
        0% {
            transform: translate(-50%, -50%);
        }
        50% {
            transform: translate(-50%, -55%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }

    .mobile-cards {
        display: none;
    }
    @media screen and (max-width: 1023px) {
        background-color: #362718;
        .con1,
        .con2,
        .con3,
        .cards {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        background-color: #362718;
        .con1,
        .con2,
        .con3,
        .cards {
            display: none;
        }
    }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* 아래에서 위로 슬라이드 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const FirstPage = styled.div`
    width: 100vw;
    height: 1080px;
    overflow: hidden;
    background-image: url(/images/Intro-image/bg_shadow.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    position: relative;

    .coffee {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--Brown-brown-500, #564438);
        text-align: center;
        font-family: 'EB Garamond';
        font-size: 166px;
        font-style: normal;
        font-weight: 600;
        line-height: 102%; /* 169.32px */
        letter-spacing: -1.66px;
        text-transform: uppercase;
        width: 100vw;

        li {
            opacity: 0;
            animation: ${fadeIn} 0.5s forwards; /* 애니메이션 적용 */
        }

        li:nth-child(1) {
            animation-delay: 0s; /* 첫 번째 항목은 즉시 */
        }
        li:nth-child(2) {
            animation-delay: 0.7s; /* 두 번째 항목은 0.7초 뒤 */
        }
        li:nth-child(3) {
            animation-delay: 1.4s; /* 세 번째 항목은 1.4초 뒤 */
        }
        li:nth-child(4) {
            animation-delay: 2.1s; /* 네 번째 항목은 2.1초 뒤 */
        }
    }
    @media screen and (max-width: 1023px) {
        background-color: #362718;
        background-image: none;
        height: 100vh;
        .text {
            font-size: 100px;
        }
    }
    @media screen and (max-width: 600px) {
        background-color: #362718;
        background-image: none;
        padding-top: 150px;
        height: 90vh;
        .coffee {
            img {
                transform: scale(0.6);
            }
        }
        .text {
            font-size: 70px;
        }
    }
`;
