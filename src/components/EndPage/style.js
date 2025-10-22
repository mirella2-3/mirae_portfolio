import styled from 'styled-components';

export const EndPageStyle = styled.div`
    text-align: center;
    padding-top: 315px;
    background-image: url(/images/endBg.png);
    background-position: 0, 0;
    background-repeat: no-repeat;
    position: relative;

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

        span {
            color: #cac6c2;
            font-size: 18px;
            font-weight: 500;
            line-height: 130%;
        }
        h5 {
            color: #cac6c2;
            font-size: 16px;
            font-family: 'EB Garamond';
            padding-top: 297px;
            padding-bottom: 160px;
        }
    }
`;
