import styled from 'styled-components';

export const AllStyle = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;

    &.con1 {
        background-image: url('/images/intro-bg.png');
    }
`;
export const CardStyle = styled.div`
    overflow: hidden;
    position: relative;
    width: 100vw;
    /* height: 300vh; */
    background-image: url('/images/card-bg.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;

    .inner {
        position: relative;
        height: 100vh;
    }
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 450px;
        width: 260px;
        height: 376px;
        perspective: 1000px;

        p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 24px;
            font-weight: 500;
        }
    }

    .card-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        animation: floating 3s infinite ease-in-out;
    }

    #card-1 .card-wrapper {
        animation-delay: 0s;
    }
    #card-2 .card-wrapper {
        animation-delay: 0.2s;
    }
    #card-3 .card-wrapper {
        animation-delay: 0.4s;
    }
    #card-4 .card-wrapper {
        animation-delay: 0.6s;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        /* width: 260px;
        height: 376px; */
        transform-style: preserve-3d;
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        /* border-radius: 0.8em; */
    }

    .flip-card-back {
        background-image: url('images/card-back.png');
        transform: rotateY(180deg);
        p {
            font-family: 'EB Garamond';
            padding-bottom: 20px;
            span {
                display: block;
                margin-bottom: 10px;
                opacity: 0.5;
                font-weight: 600;
            }
        }
    }

    @keyframes floating {
        0% {
            transform: translate(-50%, -50%);
        }
        50% {
            transform: translate(-50%, -60%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }
`;
