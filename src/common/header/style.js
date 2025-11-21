import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: transparent;
    position: fixed;
    top: 38px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    @media screen and (max-width: 1023px) {
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
        padding: 0%;
        top: 0;
    }
`;

export const NavStyle = styled.nav`
    display: flex;
    gap: 40px;
    padding: 0 65px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50px;
    margin: 20px;
    margin: auto;

    button {
        background: none;
        background-size: cover;
        font-family: 'EB Garamond';
        font-size: 20px;
        line-height: 45px;
        font-weight: 400;
        color: #564438;
        position: relative;
        p {
            position: absolute;
            top: 1px;

            left: 50%;
            transform: translateX(-50%);
            mix-blend-mode: multiply;
            width: 44px;
            height: 42px;
            flex-shrink: 0;
            aspect-ratio: 22/21;
            opacity: 0;
            transition: all 0.3s;
        }

        &:hover {
            color: #24190f;
            p {
                opacity: 1;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        button {
            width: 130px;
            font-size: 28px;
        }
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
        border-radius: 0;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            font-size: 25px;
        }
    }
`;
