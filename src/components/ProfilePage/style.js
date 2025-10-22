import styled from 'styled-components';

export const ProfilePageStyle = styled.div`
    background: #f2efeb;
    position: relative;
    width: 100vw;
    height: 1080px;
    border: 1px solid #000;

    .profilePhoto {
        p {
            position: absolute;
            top: 300px;
        }
    }
    @keyframes dash {
        to {
            stroke-dashoffset: 1111.0604248046875;
        }
    }
    .circle {
        position: absolute;
        left: 67.3vw;
        bottom: 17.7vh;
    }
    path {
        stroke-dasharray: 1111.0604248046875;
        stroke-dashoffset: 1111.0604248046875;
        animation: dash 2s linear forwards;
    }

    .inner {
        padding: 160px 0;
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

            /* @keyframes typing {
                from {
                    width: 0;
                    opacity: 0;
                }
                to {
                    width: 100%;
                    opacity: 1;
                }
            } */
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

            .typing-demo,
            .typing-demo2 {
                width: 670px;
                animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
                white-space: nowrap;
                overflow: hidden;
                color: var(--Black, #060606);
                text-align: left;
                font-family: Pretendard;
                font-size: 32px;
                font-style: normal;
                font-weight: 600;
                line-height: 170%;
                opacity: 0;
                animation-fill-mode: forwards;
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
`;
