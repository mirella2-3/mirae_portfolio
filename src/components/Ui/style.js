import styled, { keyframes } from 'styled-components';

export const ViewStyle = styled.div`
    &.link-wrapper {
        border-radius: 244px;
        border: 2px solid var(--White, #fff);
        background: rgba(0, 0, 0, 0.2);
        width: 244px;
        height: 244px;
        border: 2px solid white;
        border-radius: 50%;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        pointer-events: auto;
        box-sizing: border-box;
        z-index: 10;
        overflow: visible;
        position: absolute;
        left: 78%;
        bottom: 10%;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .link {
        color: white;
        text-align: center;

        letter-spacing: 0.1em;
        display: flex;
        flex-direction: column;
        user-select: none;
        text-decoration: none;
        color: #fff;
        text-align: center;
        font-family: 'Pretendard';
        font-size: 24px;
        font-style: normal;
        line-height: normal;
    }

    .link span {
        display: block;
        pointer-events: none;
        width: 160px;

        text-transform: uppercase;
        letter-spacing: 0;
        &:first-child {
            text-align: left;
        }
        &:last-child {
            text-align: right;
        }
    }
`;
