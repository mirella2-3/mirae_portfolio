// App.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitText from 'gsap/SplitText';
import { PeopleStyle } from './style';

gsap.registerPlugin(ScrollTrigger, SplitText);

const People = () => {
    const spotlightImagesRef = useRef(null);
    const maskContainerRef = useRef(null);
    const maskImageRef = useRef(null);
    const maskHeaderRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        // Spotlight animation logic
        const spotlightContainerHeight = spotlightImagesRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const initialOffset = spotlightContainerHeight * 0.05;
        const totalMovement = spotlightContainerHeight + initialOffset + viewportHeight;

        let headerSplit = null;
        if (maskHeaderRef.current) {
            headerSplit = SplitText.create(maskHeaderRef.current, {
                type: 'words',
                wordsClass: 'spotlight-word',
            });
            gsap.set(headerSplit.words, { opacity: 0 });
        }

        ScrollTrigger.create({
            trigger: '.spotlight',
            start: 'top top',
            end: `+=${window.innerHeight * 7}px`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                if (progress <= 0.5) {
                    const imagesMoveProgress = progress / 0.5;

                    const startY = 5;
                    const endY = -(totalMovement / spotlightContainerHeight) * 100;
                    const currentY = startY + (endY - startY) * imagesMoveProgress;

                    gsap.set(spotlightImagesRef.current, {
                        y: `${currentY}%`,
                    });
                }

                if (maskContainerRef.current && maskImageRef.current) {
                    if (progress >= 0.25 && progress <= 0.75) {
                        const maskProgress = (progress - 0.25) / 0.5;
                        const maskSize = `${maskProgress * 450}%`;
                        const imageScale = 1.5 - maskProgress * 0.5;

                        maskContainerRef.current.style.setProperty('-webkit-mask-size', maskSize);
                        maskContainerRef.current.style.setProperty('mask-size', maskSize);

                        gsap.set(maskImageRef.current, {
                            scale: imageScale,
                        });
                    } else if (progress < 0.25) {
                        maskContainerRef.current.style.setProperty('-webkit-mask-size', '0%');
                        maskContainerRef.current.style.setProperty('mask-size', '0%');
                        gsap.set(maskImageRef.current, {
                            scale: 1.5,
                        });
                    } else if (progress > 0.75) {
                        maskContainerRef.current.style.setProperty('-webkit-mask-size', '450%');
                        maskContainerRef.current.style.setProperty('mask-size', '450%');
                        gsap.set(maskImageRef.current, {
                            scale: 1,
                        });
                    }
                }

                if (headerSplit && headerSplit.words.length > 0) {
                    if (progress >= 0.75 && progress <= 0.95) {
                        const textProgress = (progress - 0.75) / 0.2;
                        const totalWords = headerSplit.words.length;

                        headerSplit.words.forEach((word, index) => {
                            const wordRevealProgress = index / totalWords;

                            if (textProgress >= wordRevealProgress) {
                                gsap.set(word, { opacity: 1 });
                            } else {
                                gsap.set(word, { opacity: 0 });
                            }
                        });
                    } else if (progress < 0.75) {
                        gsap.set(headerSplit.words, { opacity: 0 });
                    } else if (progress > 0.95) {
                        gsap.set(headerSplit.words, { opacity: 1 });
                    }
                }
            },
        });
    }, []);

    return (
        <PeopleStyle id="people">
            <section className="spotlight">
                <div className="header">
                    <p>
                        <img src="/images/Aboutme-image/bean.png" alt="" />
                    </p>
                    <h1>
                        Shared Moments
                        <span>
                            Every Moment, Like a Rich Brew <br />
                            <br />
                            제가 마주하는 모든 순간에 풍미를 더하며 다채로운 삶을 만들어 가고
                            있습니다.
                        </span>
                    </h1>
                </div>
                <div className="spotlight-images" ref={spotlightImagesRef}>
                    <div className="row">
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture0.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture2.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture3.png" alt="" />
                        </div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture4.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture1.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture5.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture6.png" alt="" />
                        </div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture7.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture8.png" alt="" />
                        </div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture9.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture10.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture11.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture12.png" alt="" />
                        </div>
                        <div className="img"></div>
                    </div>
                    <div className="row">
                        <div className="img"></div>
                        <div className="img">
                            <img src="/images/Aboutme-image/Picture13.png" alt="" />
                        </div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>

                    {/* More rows */}
                </div>
                <div className="mask-container" ref={maskContainerRef}>
                    <div className="mask-img" ref={maskImageRef}>
                        {/* <img src="../assets/images/img-1.jpg" alt="" /> */}
                    </div>
                    <div className="header" ref={maskHeaderRef}>
                        <h1>저의 이러한 여정에, 여러분과 함께 하기를 원합니다.</h1>
                    </div>
                </div>
            </section>
            <section className="outro">
                <div className="inner">
                    <div className="bg">
                        <img src="/images/endPhoto.png" alt="" />
                    </div>
                    <div className="text-box">
                        <p>
                            <img src="/images/endText.png" alt="" />
                        </p>

                        <h1>음저의 이러한 여정에, 여러분과 함께 하기를 원합니다.</h1>
                        <h5>© 2025 Kimmirae. All rights reserved.</h5>
                    </div>
                </div>
            </section>
        </PeopleStyle>
    );
};

export default People;
