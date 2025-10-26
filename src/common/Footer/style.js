import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background: #291d11;
    color: #f2efeb;
    .inner {
        padding: 20px 160px;
        ul {
            display: flex;
            gap: 30px;
            justify-content: center;
            li {
                position: relative;
                font-weight: 300;
                font-size: 18px;
                font-family: 'Pretendard';
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    right: -15px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 50%;
                    background: #f2efeb;
                }
                &:last-child {
                    &::before {
                        content: none;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1023px) {
        .inner {
            padding: 20px 0;
            width: 100vw;
            ul {
                li {
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        .inner {
            padding: 20px 0;
            width: 100vw;
            ul {
                li {
                    font-size: 16px8;
                }
            }
        }
    }
`;
