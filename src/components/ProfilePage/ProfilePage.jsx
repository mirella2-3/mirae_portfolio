import React, { useEffect, useRef, useState } from 'react';
import { ProfilePageStyle } from './style';
import gsap from 'gsap';

const ProfilePage = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const firstImgRef = useRef(null);
    const secondImgRef = useRef(null);

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

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 첫 번째 이미지 fadeIn + 약간 위에서 내려오는 효과
            gsap.fromTo(
                firstImgRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 20%',
                        end: 'top 0%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(
                secondImgRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top -10%',
                        end: 'top 0%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <ProfilePageStyle ref={sectionRef}>
            <div className="profilePhoto">
                <p>
                    <img ref={firstImgRef} src="/images/Profile-image/first.png" alt="first" />
                </p>
                <p>
                    <img ref={secondImgRef} src="/images/Profile-image/second.png" alt="second" />
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
