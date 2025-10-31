import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPageStyle } from './style';

gsap.registerPlugin(ScrollTrigger);

const TextPage = () => {
    const sectionRef = useRef(null);
    const gradientRef = useRef(null);
    const h1Ref = useRef(null);
    const h3Ref = useRef(null);
    const spanRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                // === 데스크톱 (1024px 이상) ===
                '(min-width: 1024px)': function () {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 55%',
                            end: '+=450',
                            scrub: true,
                        },
                    });

                    tl.to(gradientRef.current, {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                    });

                    tl.fromTo(
                        h1Ref.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 1 },
                        '+=0.2'
                    );

                    tl.fromTo(
                        h3Ref.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 1 },
                        '+=0.2'
                    );

                    tl.fromTo(
                        spanRef.current,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.4 },
                        '+=0.2'
                    );

                    const tlDisappear = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top -22%',
                            end: 'top -45%',
                            scrub: true,
                        },
                    });

                    tlDisappear.to(h1Ref.current, {
                        x: -100,
                        opacity: 0,
                        ease: 'power1.out',
                        duration: 0.3,
                    });

                    tlDisappear.to(
                        h3Ref.current,
                        { x: 100, opacity: 0, ease: 'power1.out', duration: 0.3 },
                        '>-0.2'
                    );

                    tlDisappear.to(
                        spanRef.current,
                        { opacity: 0, filter: 'blur(8px)', ease: 'power1.out', duration: 0.3 },
                        '>-0.2'
                    );
                },

                '(max-width: 1023px)': function () {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 60%',
                            end: '+=450',
                            scrub: true,
                        },
                    });

                    tl.to(gradientRef.current, {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                    });

                    tl.fromTo(
                        [h1Ref.current, h3Ref.current, spanRef.current],
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
                    );
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <TextPageStyle ref={sectionRef}>
            <div className="gradient-bg" ref={gradientRef}></div>
            <div className="inner">
                <h1 ref={h1Ref}>Practical project designed</h1>
                <h3 ref={h3Ref}>with readability as the top priority</h3>
                <span ref={spanRef}>가독성을 최우선으로 디자인한 실용적인 프로젝트</span>
            </div>
        </TextPageStyle>
    );
};

export default TextPage;
