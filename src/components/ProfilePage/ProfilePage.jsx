import React, { useEffect, useRef, useState } from 'react';
import { ProfilePageStyle } from './style';

const ProfilePage = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.7,
            }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <ProfilePageStyle ref={sectionRef}>
            <div className="profilePhoto">
                <p>
                    <img
                        className={isInView ? 'fadeIn' : ''}
                        src="/images/Profile-image/first.png"
                        alt="first"
                    />
                </p>
                <p>
                    <img
                        className={isInView ? 'fadeIn' : ''}
                        src="/images/Profile-image/second.png"
                        alt="second"
                    />
                </p>
            </div>
            <div className="shadow">
                <img src="/images/Profile-image/shadow.png" alt="shadow" />
            </div>
            <div className="inner">
                <div className="text-box">
                    <h3>Profile</h3>
                    <div className="typing-box">
                        <div className={`typing-demo ${isInView ? 'active' : ''}`}>
                            아이디어를 인터페이스로, 감각을 기능으로.
                        </div>
                        <div className={`typing-demo2 ${isInView ? 'active' : ''}`}>
                            기획과 감각을 코드로 구현하는 <strong> 개발자 김미래 </strong> 입니다.
                        </div>
                    </div>
                </div>
            </div>
        </ProfilePageStyle>
    );
};

export default ProfilePage;
