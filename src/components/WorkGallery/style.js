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

            padding-left: 9px;
            width: 1600px;
            overflow: hidden;

            button {
                margin-left: -9.25px;
                height: 88px;
                float: left;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 18px;
                background: transparent;

                transition: background-color 0.2s ease;

                &:hover {
                    /* filter: brightness(1.5); */
                }
                span {
                    height: 56px;
                    color: var(--Brown-brown-200, #b1aaa4);
                    text-align: center;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 130%;
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
                        display: flex;
                        gap: 10px;
                        > button {
                            background: #cfc0acff;
                            color: #fff;
                            font-weight: 300;
                            border: none;
                            font-size: 12px;
                            border-radius: 0;
                            padding: 5px 10px;
                            cursor: default;

                            &:hover {
                                background: #cfc0acff;
                                color: #fff;
                                font-weight: 300;
                                border: none;
                                font-size: 12px;
                                border-radius: 0;
                                padding: 5px 10px;
                            }
                        }
                    }

                    p {
                        color: var(--Grey-grey-500, #616161);
                        word-break: keep-all;
                        font-family: Pretendard;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 160%;
                        margin-bottom: 60px;
                        margin-top: 37px;
                    }
                    .link-buttons {
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
                            /* margin-right: 10px; */
                            cursor: pointer;

                            &:hover {
                                font-size: 16px;
                                font-weight: 700;
                                padding: 8px 26px;
                                border-radius: 60px;
                                border: 1px solid var(--Brown-brown-500, #564438);
                                background: var(--Brown-brown-500, #564438);
                                color: #fff;
                            }
                        }
                    }
                }
                .right {
                    width: 65%;
                    /* border: 1px solid #000; */
                    height: 506px;
                    p {
                        position: relative;
                        cursor: pointer;
                        .txt {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: var(--White, #fff);
                            font-family: 'Pretendard';
                            font-size: 50px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            opacity: 0;
                        }

                        &:hover {
                            img {
                                filter: grayscale(100%) brightness(50%);
                            }
                            .txt {
                                opacity: 1;
                            }
                        }
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
    @media screen and (max-width: 1023px) {
        width: 100vw;

        .tabContainer {
            width: 100vw;
            position: relative;
            .buttonContainer {
                button {
                    span {
                        font-size: 16px;
                    }
                }
            }
            .tabPanel {
                padding: 50px 0px;
                ul {
                    width: 100vw;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 30px;
                    .left {
                        width: 100vw;
                        padding: 0 20px;
                        h2 {
                            font-size: 40px;
                            padding-bottom: 20px;
                        }
                        div {
                            button {
                                font-size: 14px;
                                &:hover {
                                    font-size: 14px;
                                }
                            }
                        }
                        p {
                            font-size: 16px;
                        }
                        > button {
                            font-size: 18px;
                        }
                    }
                    .right {
                        width: 100vw;
                        padding: 0 20px;
                        p {
                            height: auto;
                        }
                    }
                }
            }
        }
        .bgText {
            display: none;
        }
    }

    @media screen and (max-width: 600px) {
        .tabContainer {
            .buttonContainer {
                button {
                    span {
                        font-size: 18px;
                        font-weight: 700;
                        height: 30px;
                        width: 64px;
                        .projects-word {
                            display: none;
                        }
                    }
                }
            }
            .tabPanel {
                padding: 50px 0;
                height: 100vh;

                ul {
                    .left {
                        h2 {
                            font-size: 64px;
                        }
                        p {
                            font-size: 18px;
                        }
                        div {
                            button {
                                font-size: 16px;
                                &:hover {
                                    font-size: 16px;
                                }
                            }
                        }

                        button {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
`;
