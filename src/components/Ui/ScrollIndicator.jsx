import React from 'react';
import styled, { keyframes } from 'styled-components';

const colorBg = '#362718';
const colorOutline = '#ffffff';
const colorOutlineFade = '#81614E';

const widthMouse = 40;
const heightMouse = 60;
const borderMouse = 6;

const posMouse = 8;
const posText = 2;

const sizeTrackball = 10;
const posTrackball = 20;
const shrinkTrackball = 0.4;

const animDuration = '5s';

// 🎞️ keyframes 정의
const colorSlide = keyframes`
  0% { background-position: 0% 100%; }
  20% { background-position: 0% 0%; }
  21% { background-color: ${colorOutlineFade}; }
  29.99% { background-color: ${colorOutline}; background-position: 0% 0%; }
  30% { background-color: ${colorOutlineFade}; background-position: 0% 100%; }
  50% { background-position: 0% 0%; }
  51% { background-color: ${colorOutlineFade}; }
  59% { background-color: ${colorOutline}; background-position: 0% 0%; }
  60% { background-color: ${colorOutlineFade}; background-position: 0% 100%; }
  80% { background-position: 0% 0%; }
  81% { background-color: ${colorOutlineFade}; }
  90%, 100% { background-color: ${colorOutline}; }
`;

const trackBallSlide = keyframes`
  0% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
  6% { opacity: 1; transform: scale(0.9) translateY(${posTrackball / 4}px); }
  14% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(${posTrackball * 2}px); }
  15%, 19% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(-${posTrackball}px); }
  28%, 29.99% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
  30% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
  36% { opacity: 1; transform: scale(0.9) translateY(${posTrackball / 4}px); }
  44% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(${posTrackball * 2}px); }
  45%, 49% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(-${posTrackball}px); }
  58%, 59.99% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
  60% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
  66% { opacity: 1; transform: scale(0.9) translateY(${posTrackball / 4}px); }
  74% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(${posTrackball * 2}px); }
  75%, 79% { opacity: 0; transform: scale(${shrinkTrackball}) translateY(-${posTrackball}px); }
  88%, 100% { opacity: 1; transform: scale(1) translateY(-${posTrackball}px); }
`;

const nudgeMouse = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(${posMouse}px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(${posMouse}px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(${posMouse}px); }
  90% { transform: translateY(0); }
`;

const nudgeText = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(${posText}px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(${posText}px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(${posText}px); }
  90% { transform: translateY(0); }
`;

const colorText = keyframes`
  21% { color: ${colorOutlineFade}; }
  30% { color: ${colorOutline}; }
  51% { color: ${colorOutlineFade}; }
  60% { color: ${colorOutline}; }
  81% { color: ${colorOutlineFade}; }
  90% { color: ${colorOutline}; }
`;

// 🖱️ Mouse 스타일
const Mouse = styled.div`
    position: relative;
    width: ${widthMouse}px;
    height: ${heightMouse}px;
    border-radius: 100px;
    background: ${colorOutlineFade}
        linear-gradient(transparent 0%, transparent 50%, ${colorOutline} 50%, ${colorOutline} 100%);
    background-size: 100% 200%;
    animation: ${colorSlide} ${animDuration} linear infinite,
        ${nudgeMouse} ${animDuration} ease-out infinite;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 100px;
    }

    &::before {
        width: ${widthMouse - borderMouse}px;
        height: ${heightMouse - borderMouse}px;
        background-color: ${colorBg};
    }

    &::after {
        background-color: ${colorOutline};
        width: ${sizeTrackball}px;
        height: ${sizeTrackball}px;
        border-radius: 100%;
        animation: ${trackBallSlide} ${animDuration} linear infinite;
    }
`;

// 📜 SCROLL 텍스트
const ScrollText = styled.p`
    margin-top: 7px;
    font-family: 'EB Garamond';
    color: ${colorOutline};
    animation: ${colorText} ${animDuration} ease-out infinite,
        ${nudgeText} ${animDuration} ease-out infinite;
`;

// 💡 Wrapper
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 200px;

    background-color: ${colorBg};
`;

export default function ScrollIndicator() {
    return (
        <Wrapper>
            <Mouse />
            <ScrollText>SCROLL</ScrollText>
        </Wrapper>
    );
}
