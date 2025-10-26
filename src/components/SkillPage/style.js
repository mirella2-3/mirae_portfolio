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
    @media screen and (max-width: 1023px) {
        .inner {
            display: block;
            /* display: grid; */
            /* grid-template-columns: 1; */
            height: auto;
            .leftSide {
                height: auto;
                padding: 0;
            }
        }
        .sub1 {
            display: flex;
            &.edu {
                margin-bottom: 40px;
            }
        }
        .title {
            color: #81614e;
            font-size: 30px;
            font-weight: 600;
            width: 190px;
            margin-right: 16px;
            line-height: 1;
        }
        li {
            margin-bottom: 12px;
            font-size: 22px;
            span {
                font-weight: 300;
                font-size: 16px;
                display: block;
                color: #959595;
                line-height: 1;
            }
        }
        .rightSide {
            margin-top: 40px;
        }
        #SkillBox {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        .text-bg {
            font-size: 120px;
            top: 0;
            left: 0;
        }
        .inner {
            padding-left: 50px;
        }
        .sub1 {
            display: block;
            &.edu {
                margin-bottom: 83px;
            }
        }
        .title {
            color: #81614e;
            font-size: 30px;
            font-weight: 600;
            width: 100vw;
            margin-right: 16px;
            line-height: 1;
        }
        li {
            margin-bottom: 12px;
            font-size: 18px;
            span {
                font-weight: 300;
                font-size: 12px;
                display: block;
                color: #959595;
                line-height: 1;
            }
        }
    }
`;
