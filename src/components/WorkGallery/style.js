import styled from 'styled-components';

export const WorkGalleryStyle = styled.div`
    height: 650px;
    position: relative;
    z-index: 100;

    @keyframes infiniteScroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }
    .bgText {
        position: absolute;
        bottom: 30px;
        line-height: 1;
        z-index: -1;

        display: flex;
        font-size: 40px;
        width: 2600px;
        animation-name: infiniteScroll;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        .horizontal-scrolling-items__item {
            white-space: nowrap;
            color: var(--Brown-brown-50, #f2efeb);
            text-align: center;
            font-size: 200px;
            font-weight: 800;
            text-transform: uppercase;
        }
    }
    .title {
        color: orange;
        text-align: center;
        margin-bottom: 25px;
    }

    .tabContainer {
        width: 100%;
        position: relative;

        .buttonContainer {
            height: 15%;
            /* margin-left: 8.3px; */
            padding-left: 9px;
            width: 1600px;
            overflow: hidden;

            button {
                width: 207.2px;
                margin-left: -9.25px;
                height: 56px;
                height: 88px;
                float: left;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 18px;
                background: transparent;

                transition: background-color 0.2s ease;

                &:hover {
                }
                span {
                    height: 56px;
                    color: var(--Brown-brown-200, #b1aaa4);
                    text-align: center;

                    /* Medium/18px */

                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 130%; /* 23.4px */
                }
            }
        }

        .tabPanel {
            box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
            width: 100%;
            background-color: #fff;
            color: white;
            text-align: center;
            padding: 74px 100px;
            box-sizing: border-box;
            font-size: 22px;
            display: none;
            border-radius: 15px;

            position: absolute;
            top: 56px;
            z-index: 100;
            ul {
                display: flex;
                gap: 100px;
                justify-content: space-between;
                color: #000;

                .left {
                    text-align: left;
                    width: 35%;
                    h2 {
                        text-align: left;
                        color: var(--Grey-grey-900, #292929);
                        font-size: 60px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin-bottom: 0;
                    }
                    div {
                        button {
                            background: #cfc0acff;
                            color: #fff;
                            font-weight: 300;
                            border: none;
                            font-size: 12px;
                            border-radius: 0;
                            padding: 5px 10px;
                        }
                    }
                    p {
                        color: var(--Grey-grey-500, #616161);

                        font-family: Pretendard;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 130%;
                        margin-bottom: 60px;
                        margin-top: 37px;
                    }
                    button {
                        color: var(--Brown-brown-500, #564438);
                        text-align: center;
                        font-size: 16px;
                        font-weight: 700;
                        padding: 8px 26px;
                        justify-content: center;
                        align-items: center;
                        border-radius: 60px;
                        border: 1px solid var(--Brown-brown-500, #564438);
                        color: #564438;
                        background: #fff;
                        margin-right: 10px;

                        &:hover {
                            border-radius: 60px;
                            border: 1px solid var(--Brown-brown-500, #564438);
                            background: var(--Brown-brown-500, #564438);
                            color: #fff;
                        }
                    }
                }
                .right {
                    width: 65%;
                    /* border: 1px solid #000; */
                    height: 506px;
                    p {
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
`;
