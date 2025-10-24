import styled from 'styled-components';

export const HeaderStyle = styled.header`
    /* width: 100vw; */
    height: 40px;
    background: transparent;
    overflow: visible;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    p {
        line-height: 40px;
        text-align: center;

        img {
            vertical-align: middle;
            cursor: pointer;
        }
    }
`;

export const NavStyle = styled.header`
    display: flex;
    gap: 40px;
    padding: 0 70px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    margin: 20px;

    button {
        background: none;
        background-size: cover;
        font-family: 'EB Garamond';
        font-size: 20px;
        line-height: 40px;
        font-weight: 400;
        color: #3a3331ff;

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
