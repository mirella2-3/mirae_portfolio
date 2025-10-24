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
`;
