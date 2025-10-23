import styled from 'styled-components';

export const IntroStyle = styled.div`
    box-sizing: border-box;

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
    }

    span {
        text-transform: uppercase;
        font-family: 'DM Mono';
        font-size: 0.75rem;
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
                border-radius: 0.5rem;
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
                    background-color: #e5d9f6;
                    transform-origin: top right;
                    z-index: 2;
                }

                &#con1-card-2 {
                    background-color: #ffd2f3;
                    z-index: 1;
                }

                &#con1-card-3 {
                    background-color: #fcdca6;
                    transform-origin: top left;
                    z-index: 0;
                }
            }
        }
    }

    /* con2 + con4 */
    .con2,
    .con4 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        color: #f9f4eb;
    }

    /* con3 */
    .con3 {
        padding: 8rem 2rem;

        .con3-header {
            position: relative;
            width: 100%;
            text-align: center;
            transform: translateY(400%);
            will-change: transform;
        }
    }

    /* ===========================
   CARDS SECTION
   =========================== */
    .cards {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100svh;
        display: flex;
        justify-content: center;
        z-index: -1;
        background-color: #f9f4eb;

        .cards-container {
            position: relative;
            width: 75%;
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

                        .card-title {
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                        }
                    }

                    .flip-card-back {
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 2rem;
                        background-color: #ffffff;
                        transform: rotateY(180deg);

                        .card-copy {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            gap: 0.5rem;

                            p {
                                flex: 1;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 1rem;
                                background-color: #f0ece5;
                                border-radius: 0.25rem;
                            }
                        }
                    }
                }

                &#card-1 {
                    .flip-card-front {
                        background-color: #e5d9f6;
                    }
                    transform: translateX(100%) translateY(-100%) rotate(-5deg) scale(0.25);
                    z-index: 2;
                    .card-wrapper {
                        animation-delay: 0s;
                    }
                }

                &#card-2 {
                    .flip-card-front {
                        background-color: #ffd2f3;
                    }
                    transform: translateX(0%) translateY(-100%) rotate(0deg) scale(0.25);
                    z-index: 1;
                    .card-wrapper {
                        animation-delay: 0.25s;
                    }
                }

                &#card-3 {
                    .flip-card-front {
                        background-color: #fcdca6;
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

    /* Floating animation */
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

    /* ===========================
   MOBILE HIDDEN
   =========================== */
    .mobile-cards {
        display: none;
    }
`;
// export const CardStyle = styled.div`
//     overflow: hidden;
//     position: relative;
//     width: 100vw;
//     height: 150vh;
//     background: #000;
//     background-image: url('/images/Intro-image/Index.png');
//     background-position: 0 0;
//     background-repeat: no-repeat;
//     background-size: contain;

//     .inner {
//         position: relative;
//         height: 100vh;
//     }
//     .card {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 300px;
//         height: 408px;
//         width: 282px;
//         height: 376px;
//         perspective: 1000px;
//         z-index: 20;

//         p {
//             position: absolute;
//             top: 50%;
//             left: 60%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             font-size: 24px;
//             font-weight: 500;
//         }
//     }

//     .card-wrapper {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 100%;
//         height: 100%;
//         animation: floating 3s infinite ease-in-out;
//     }

//     #card-1 .card-wrapper {
//         animation-delay: 0s;
//     }
//     #card-2 .card-wrapper {
//         animation-delay: 0.2s;
//     }
//     #card-3 .card-wrapper {
//         animation-delay: 0.4s;
//     }
//     #card-4 .card-wrapper {
//         animation-delay: 0.6s;
//     }

//     .flip-card-inner {
//         position: relative;
//         width: 100%;
//         height: 100%;

//         transform-style: preserve-3d;
//     }

//     .flip-card-front,
//     .flip-card-back {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         backface-visibility: hidden;
//     }

//     .flip-card-back {
//         background-image: url('/images/Intro-image/card-back.png');
//         transform: rotateY(180deg);
//         p {
//             font-family: 'EB Garamond';
//             padding-bottom: 20px;
//             span {
//                 display: block;
//                 margin-bottom: 10px;
//                 opacity: 0.5;
//                 font-weight: 600;
//             }
//         }
//     }

//     @keyframes floating {
//         0% {
//             transform: translate(-50%, -50%);
//         }
//         50% {
//             transform: translate(-50%, -60%);
//         }
//         100% {
//             transform: translate(-50%, -50%);
//         }
//     }
// `;
