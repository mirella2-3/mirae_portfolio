import styled from 'styled-components';

export const EventPageStyle = styled.div`
    background: #f2efeb;
    padding: 160px 0;
    text-align: center;
    h3 {
        font-size: 46px;
        font-weight: 700;
        color: #000;
        margin-bottom: 18px;
    }
    > p {
        font-size: 16px;
        font-weight: 500;
        color: #616161;
    }
    .detaliText {
        color: #292929;
        display: flex;
        font-weight: 500;
        font-size: 18px;
        justify-content: center;
        padding-top: 70px;
        p {
            margin-right: 7px;
        }

        strong {
            color: #c14165;
            font-weight: 700;
        }
        span {
            position: relative;
            display: inline-block;
            color: #292929;
            font-weight: 700;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                bottom: 5px;
                left: 3px;
                width: 130px;
                height: 10px;
                background: #f2c6d2;
                z-index: -1;
            }
        }
    }

    .thumbList {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        margin-top: 75px;
        li {
            width: 220px;
            height: 220px;
            img {
                filter: grayscale(100%);
                transition: filter 0.3s ease; /* 부드럽게 전환 */
                cursor: pointer;
            }

            img:hover {
                filter: grayscale(0%);
            }
        }
    }
    .event-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 40px;

        // 모달 스크롤 가능하게
        overflow-y: auto;

        .event-modal-content {
            position: relative;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            max-width: 100%;
            max-height: 100vh;
            overflow-y: auto; // 콘텐츠 스크롤 허용

            img {
                width: 100%;
                height: auto;
            }

            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 24px;
                background: none;
                border: none;
                color: #000;
                cursor: pointer;
            }
        }
    }
`;
