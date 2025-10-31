import styled, { keyframes } from 'styled-components';

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
    min-height: 100vh;
    height: auto;
    /* overflow: hidden; */
    overflow: visible;
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
