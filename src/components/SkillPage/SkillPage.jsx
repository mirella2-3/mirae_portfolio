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
                            상명대학교 패션디자인과 졸업 <span>2015.03 - 2020.02</span>
                        </li>
                    </ul>
                    <ul className="sub1 ">
                        <li className="title">Experience</li>
                        <ul className="sub2">
                            <li>
                                이젠아카데미 부트캠프 UXUI/프론트엔드 과정
                                <span>2025.04 - 2025.09</span>
                            </li>
                            <li>
                                런던 웨스트필드 카페 TisamisU - Supervisor
                                <span>2023.10 - 2025.02</span>
                            </li>
                            <li>
                                화성 엔터테인먼트 - CAD Assistant
                                <span>2022.10 - 2023.01</span>
                            </li>
                            <li>
                                카페 투썸플레이스 - Senior Manager
                                <span>2021.08 - 2022.10</span>
                            </li>
                            <li>
                                카페 투썸플레이스 - Staff <span>2019.02 - 2020.01</span>
                            </li>
                        </ul>
                    </ul>
                </section>
                <section className="rightSide">
                    <ul className="sub1">
                        <li className="title">Certificate</li>
                        <ul className="sub2">
                            <li>
                                정보처리기사 (필기) <span>2025.09</span>
                            </li>
                            <li>
                                정보처리산업기사 (필기) <span>2025.09</span>
                            </li>
                            <li>
                                SQLD (SQL 개발자)<span>2025.06</span>
                            </li>
                            <li>
                                운전면허 2종 보통 <span>2019.09</span>
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
