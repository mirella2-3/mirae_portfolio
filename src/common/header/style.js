import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 68px;
    background: #f8f8f8;
    overflow: visible;
    position: fixed;
    top: 0;
    z-index: 9999;
    .inner {
        display: flex;
        justify-content: space-between;
        line-height: 68px;

        p {
            line-height: 68px;
            text-align: center;

            img {
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }
`;

export const NavStyle = styled.header`
    display: flex;
    gap: 40px;

    button {
        background: none;
        background-size: cover;
        font-family: 'EB Garamond';
        font-size: 20px;
        line-height: 68px;
        font-weight: 400;
        color: #616161;

        &:hover {
            color: #564438;
            opacity: 0.7;
            background: radial-gradient(
                50% 50% at 50% 50%,
                rgba(153, 117, 92, 0.2) 0%,
                rgba(153, 117, 92, 0) 100%
            );
        }
    }
`;
