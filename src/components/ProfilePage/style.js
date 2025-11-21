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

    .inner {
        height: 760px;
        width: 1700px;

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
                letter-spacing: 1px;
            }
        }
        @keyframes typing {
            0% {
                width: 0;
                opacity: 1;
                visibility: visible;
            }
            100% {
                width: 100%;
                opacity: 1;
            }
        }
        .typing-box {
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;

            .circle {
                position: absolute;
                bottom: -15px;
                right: 70px;
            }

            .typing-demo,
            .typing-demo2 {
                white-space: nowrap;
                overflow: hidden;
                display: inline-block; // 중요
                width: 0; // 초기 width 0
                opacity: 1;
                color: var(--Black, #060606);
                font-family: 'Pretendard';
                font-size: 32px;
                font-style: normal;
                font-weight: 600;
                line-height: 170%;
                letter-spacing: -2px;
            }
        }
    }

    .shadow {
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        img {
            mix-blend-mode: multiply;
            width: 100vw;
            opacity: 0.3;
        }
    }
    @media screen and (max-width: 1023px) {
        /* height: 74vh; */
        height: 100vh;
        position: relative;

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
        }
        .inner {
            /* height: 74vh; */
            height: 100vh;
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
        height: 85vh;

        .inner {
            width: 100vw;
            height: 85vh;
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
