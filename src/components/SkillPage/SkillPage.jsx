import SkillSlide from './SkillSlide';
import { SkillPageStyle } from './style';

const SkillPage = () => {
    return (
        <SkillPageStyle>
            <div className="text-bg">My skills</div>
            <div className="inner">
                <section className="leftSide">
                    <ul className="sub1 edu">
                        <li className="title">Education</li>
                        <li>
                            경상국립대학교 텍스타일 디자인과 졸업 <span>2012.02 - 2016.02</span>
                        </li>
                    </ul>
                    <ul className="sub1 ">
                        <li className="title">Experience</li>
                        <ul className="sub2">
                            <li>
                                티오피성형외과의원 - 상세페이지&SNS 등 바이럴 이미지 디자인,
                                인물사진 보정 <span>2020.11 - 2023.11</span>
                            </li>
                            <li>
                                스노우의원 - 상세페이지&SNS 등 바이럴 이미지 디자인, 인물사진 보정
                                <span>2019.05 - 2020.11</span>
                            </li>
                            <li>
                                나다움 미술학원 - 학생 관리&지도, 보호자 상담, 행정 및 운영 관리
                                <span>2018.01 - 2019.02</span>
                            </li>
                            <li>
                                신일디앤피 - 카다로그 홍보물 편집 디자인
                                <span>2017.02 - 2017.03</span>
                            </li>
                            <li>
                                영원한미소 미술학원 - 학생 관리&지도 <span>2012.12 - 2014.10</span>
                            </li>
                        </ul>
                    </ul>
                </section>
                <section className="rightSide">
                    <ul className="sub1">
                        <li className="title">Certificate</li>
                        <ul className="sub2">
                            <li>
                                컴퓨터그래픽스운용기능사 <span>2015.10</span>
                            </li>
                            <li>
                                GTQ포토샵 1급<span>2015.04</span>
                            </li>
                            <li>
                                AutoCAD 2급<span>2016.04</span>
                            </li>
                            <li>
                                운전면허 1종 보통 <span>2017.10</span>
                            </li>
                            <li>
                                JLPT N3 <span>2018.09</span>
                            </li>
                        </ul>
                    </ul>
                </section>
            </div>
            <SkillSlide />
        </SkillPageStyle>
    );
};

export default SkillPage;
