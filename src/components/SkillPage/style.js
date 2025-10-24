import styled from 'styled-components';

export const SkillPageStyle = styled.div`
    width: 100vw;
    position: relative;
    background: #f2efeb;
    .text-bg {
        color: #e5e2dd;
        font-weight: 700;
        font-size: 240px;
        position: absolute;
        right: -20px;
        bottom: 325px;
    }
    .inner {
        display: flex;
        gap: 266px;
        height: 904px;
        padding: 160px 0;
        padding-left: 106px;
    }
    .sub1 {
        display: flex;
        &.edu {
            margin-bottom: 83px;
        }
    }
    .title {
        color: #81614e;
        font-size: 20px;
        font-weight: 600;
        width: 110px;
        margin-right: 16px;
        line-height: 1;
    }
    li {
        margin-bottom: 12px;
        span {
            font-weight: 300;
            font-size: 12px;
            display: block;
            color: #959595;
            line-height: 1;
        }
    }
    #SkillBox {
        padding-bottom: 160px;
    }
`;
