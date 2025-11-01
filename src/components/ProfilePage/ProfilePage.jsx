import React, { useEffect, useRef } from 'react';
import { ProfilePageStyle } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProfilePage = () => {
    const sectionRef = useRef(null);
    const firstImgRef = useRef(null);
    const secondImgRef = useRef(null);
    const typingRef1 = useRef(null);
    const typingRef2 = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                firstImgRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
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
                        start: 'top 60%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // 타이핑 효과
            gsap.fromTo(
                typingRef1.current,
                { width: 0, opacity: 1 },
                {
                    width: '100%',
                    duration: 2,
                    ease: 'steps(22)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(
                typingRef2.current,
                { width: 0, opacity: 1 },
                {
                    width: '100%',
                    duration: 3,
                    ease: 'steps(33)',
                    delay: 2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                circleRef.current,
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 4,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
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
                        <div ref={typingRef1} className="typing-demo">
                            아이디어를 인터페이스로, 감각을 기능으로.
                        </div>
                        <div ref={typingRef2} className="typing-demo2">
                            기획과 감각을 코드로 구현하는 <strong> 개발자 김미래 </strong> 입니다.
                        </div>
                        <div className="circle" ref={circleRef}>
                            <img src="/images/Profile-image/circle.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </ProfilePageStyle>
    );
};

export default ProfilePage;
