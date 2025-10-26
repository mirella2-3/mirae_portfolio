import styled from 'styled-components';

export const ProfilePageStyle = styled.div`
    background: #f2efeb;
    position: relative;
    width: 100vw;
    padding: 160px 0;

    .profilePhoto {
        p {
            position: absolute;
            top: 300px;
        }
    }

    .circle {
        position: absolute;
        right: 5vw;
        bottom: -vh;
    }

    .inner {
        height: 760px;
        /* border: 1px solid #000; */
        .text-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h3 {
                color: #564438;
                font-family: 'EB Garamond';
                font-size: 52px;
                text-align: center;
                font-weight: 600;
            }
        }
        @keyframes typing {
            0% {
                width: 0;
                opacity: 0;
            }
            1% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
        }
        .typing-box {
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;

            .typing-demo,
            .typing-demo2 {
                width: 670px;
                white-space: nowrap;
                overflow: hidden;
                color: var(--Black, #060606);
                font-family: 'Pretendard';
                font-size: 32px;
                font-style: normal;
                font-weight: 600;
                line-height: 170%;
                opacity: 0;
                visibility: hidden;
                animation-fill-mode: forwards;

                &.active {
                    opacity: 1;
                    animation: typing 2s steps(22);
                }
            }

            .typing-demo2 {
                animation-delay: 2s;
                strong {
                    color: var(--Black, #060606);
                    font-family: Pretendard;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 170%;
                }
            }
            .typing-demo.active {
                animation: typing 2s steps(22);
                visibility: visible;
            }

            .typing-demo2.active {
                animation: typing 2s steps(22);
                animation-delay: 2s; // 2초 딜레이
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .shadow {
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        img {
            /* filter: blur(8px); */
            mix-blend-mode: multiply;
            width: 100vw;
            opacity: 0.3;
        }
    }
    @media screen and (max-width: 1023px) {
        height: 74vh;
        position: relative;
        padding-bottom: 0;
        .profilePhoto {
            p {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .circle {
            left: 0;
            bottom: 0;
            border: 1px solid #000;
        }
        .inner {
            height: 74vh;
            width: 100%;

            .text-box {
                width: 100vw;
                h3 {
                }
            }
            .typing-box {
                width: 670px;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                .typing-demo {
                    width: 600px;
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;

        .inner {
            width: 100vw;
            .typing-box {
                width: 600px;

                right: 50%;
                bottom: 0%;
                transform: translate(-50%, -50%);
                padding: 0;
                margin: 0;

                .typing-demo,
                .typing-demo2 {
                    /* border: 1px solid #000; */
                    width: 100vw;
                    strong {
                    }
                    &.active {
                        font-size: 22px;
                        text-align: center;

                        strong {
                            font-size: 22px;
                            width: 500px;
                        }
                    }
                }
            }
        }
    }
`;
