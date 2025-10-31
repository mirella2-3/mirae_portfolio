import styled from 'styled-components';

export const TextPageStyle = styled.div`
    text-align: center;
    width: 100vw;
    height: 700px;
    padding-top: 160px;
    position: relative;
    background: #f8f8f8;

    .gradient-bg {
        position: absolute;
        top: 100px;
        left: 50%;
        width: 638px;
        height: 638px;
        transform: translateX(-50%) scale(0);
        overflow: visible;
        background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(153, 117, 92, 0.3) 0%,
            rgba(241, 239, 235, 0) 100%
        );
        opacity: 0.7;
        transition: 0.3s;
        z-index: 1;
    }

    &.active {
        .gradient-bg {
            transform: translateX(-50%) scale(1);
        }
    }
    .inner {
        padding: 160px 0;
    }
    h1 {
        font-size: 74px;
        font-weight: 600;
        color: #000;
        line-height: 1;
        margin-bottom: 8px;
        font-family: 'EB Garamond';
    }
    h3 {
        color: #564438;
        font-size: 64px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 58px;
        font-family: 'EB Garamond';
    }
    span {
        color: #353535;
        font-size: 18px;
        font-weight: 500;
    }
    @media screen and (max-width: 1023px) {
        .inner {
            width: 100vw;
        }
        h1 {
            font-size: 60px;
            font-weight: 600;
            color: #000;
            line-height: 1;
            margin-bottom: 8px;
            font-family: 'EB Garamond';
        }
        h3 {
            color: #564438;
            font-size: 50px;
            font-weight: 600;
            line-height: 1;
            margin-bottom: 58px;
            font-family: 'EB Garamond';
        }
        span {
            font-size: 24px;
        }
    }
    @media screen and (max-width: 600px) {
        h1 {
            font-size: 40px;
        }
        h3 {
            font-size: 34px;
        }
        span {
            font-size: 20px;
        }
    }
`;
