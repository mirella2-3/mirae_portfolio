import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { IntroStyle } from './style';

const Intro = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const smoothStep = (p) => p * p * (3 - 2 * p);

        if (window.innerWidth > 1000) {
            // --- Section con1 ---
            ScrollTrigger.create({
                trigger: '.con1',
                start: 'top top',
                end: '75% top',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    const con1CardsContainerOpacity = gsap.utils.interpolate(
                        1,
                        0.5,
                        smoothStep(progress)
                    );
                    gsap.set('.con1-cards', {
                        opacity: con1CardsContainerOpacity,
                    });

                    ['#con1-card-1', '#con1-card-2', '#con1-card-3'].forEach((cardId, index) => {
                        const delay = index * 0.9;
                        const cardProgress = gsap.utils.clamp(
                            0,
                            1,
                            (progress - delay * 0.1) / (1 - delay * 0.1)
                        );

                        const y = gsap.utils.interpolate('0%', '350%', smoothStep(cardProgress));
                        const scale = gsap.utils.interpolate(1, 0.75, smoothStep(cardProgress));

                        let x = '0%';
                        let rotation = 0;
                        if (index === 0) {
                            x = gsap.utils.interpolate('0%', '90%', smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, -15, smoothStep(cardProgress));
                        } else if (index === 2) {
                            x = gsap.utils.interpolate('0%', '-90%', smoothStep(cardProgress));
                            rotation = gsap.utils.interpolate(0, 15, smoothStep(cardProgress));
                        }

                        gsap.set(cardId, {
                            y,
                            x,
                            rotation,
                            scale,
                        });
                    });
                },
            });

            // --- Section con3 pinning ---
            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top top',
                end: `+=${window.innerHeight * 4}px`,
                pin: '.con3',
                pinSpacing: true,
            });

            // --- con3 position management ---
            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top top',
                end: `+=${window.innerHeight * 4}px`,
                onLeave: () => {
                    const con3Section = document.querySelector('.con3');
                    const con3Rect = con3Section.getBoundingClientRect();
                    const con3Top = window.pageYOffset + con3Rect.top;

                    gsap.set('.cards', {
                        position: 'absolute',
                        top: con3Top,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                    });
                },
                onEnterBack: () => {
                    gsap.set('.cards', {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                    });
                },
            });

            // --- con3 scroll animation ---
            ScrollTrigger.create({
                trigger: '.con3',
                start: 'top bottom',
                end: `+=${window.innerHeight * 4}`,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
                    const headerY = gsap.utils.interpolate(
                        '400%',
                        '0%',
                        smoothStep(headerProgress)
                    );
                    gsap.set('.con3-header', { y: headerY });

                    ['#card-1', '#card-2', '#card-3'].forEach((cardId, index) => {
                        const delay = index * 0.5;
                        const cardProgress = gsap.utils.clamp(
                            0,
                            1,
                            (progress - delay * 0.1) / (0.9 - delay * 0.1)
                        );

                        const innerCard = document.querySelector(`${cardId} .flip-card-inner`);

                        let y;
                        if (cardProgress < 0.4) {
                            const normalizedProgress = cardProgress / 0.4;
                            y = gsap.utils.interpolate(
                                '-100%',
                                '50%',
                                smoothStep(normalizedProgress)
                            );
                        } else if (cardProgress < 0.6) {
                            const normalizedProgress = (cardProgress - 0.4) / 0.2;
                            y = gsap.utils.interpolate('50%', '0%', smoothStep(normalizedProgress));
                        } else {
                            y = '0%';
                        }

                        let scale;
                        if (cardProgress < 0.4) {
                            const normalizedProgress = cardProgress / 0.4;
                            scale = gsap.utils.interpolate(
                                0.25,
                                0.75,
                                smoothStep(normalizedProgress)
                            );
                        } else if (cardProgress < 0.6) {
                            const normalizedProgress = (cardProgress - 0.4) / 0.2;
                            scale = gsap.utils.interpolate(0.75, 1, smoothStep(normalizedProgress));
                        } else {
                            scale = 1;
                        }

                        let opacity;
                        if (cardProgress < 0.2) {
                            const normalizedProgress = cardProgress / 0.2;
                            opacity = smoothStep(normalizedProgress);
                        } else {
                            opacity = 1;
                        }

                        let x, rotate, rotationY;
                        if (cardProgress < 0.6) {
                            x = index === 0 ? '100%' : index === 1 ? '0%' : '-100%';
                            rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
                            rotationY = 0;
                        } else if (cardProgress < 1) {
                            const normalizedProgress = (cardProgress - 0.6) / 0.4;
                            x = gsap.utils.interpolate(
                                index === 0 ? '100%' : index === 1 ? '0%' : '-100%',
                                '0%',
                                smoothStep(normalizedProgress)
                            );
                            rotate = gsap.utils.interpolate(
                                index === 0 ? -5 : index === 1 ? 0 : 5,
                                0,
                                smoothStep(normalizedProgress)
                            );
                            rotationY = smoothStep(normalizedProgress) * 180;
                        } else {
                            x = '0%';
                            rotate = 0;
                            rotationY = 180;
                        }

                        gsap.set(cardId, {
                            opacity,
                            y,
                            x,
                            rotate,
                            scale,
                        });

                        gsap.set(innerCard, { rotationY });
                    });
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <IntroStyle className="portfolio">
            <section className="con1">
                <h2>
                    Creative
                    <br />
                    Frontend Portfolio
                </h2>
                <div className="con1-cards">
                    <div className="card" id="con1-card-1">
                        <div className="card-title">
                            <span>Plan</span>
                            <span>01</span>
                        </div>
                        <div className="card-title">
                            <span>01</span>
                            <span>Plan</span>
                        </div>
                    </div>
                    <div className="card" id="con1-card-2">
                        <div className="card-title">
                            <span>Design</span>
                            <span>02</span>
                        </div>
                        <div className="card-title">
                            <span>02</span>
                            <span>Design</span>
                        </div>
                    </div>
                    <div className="card" id="con1-card-3">
                        <div className="card-title">
                            <span>Develop</span>
                            <span>03</span>
                        </div>
                        <div className="card-title">
                            <span>03</span>
                            <span>Develop</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="con2">
                <h1>Not just websites, but interactive stories</h1>
            </section>

            <section className="con3">
                <div className="con3-header">
                    <h1>More than websites, immersive experiences.</h1>
                </div>
            </section>

            <section className="cards">
                <div className="cards-container">
                    {['Plan', 'Design', 'Develop'].map((title, idx) => (
                        <div className="card" id={`card-${idx + 1}`} key={idx}>
                            <div className="card-wrapper">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="card-title">
                                            <span>{title}</span>
                                            <span>{`0${idx + 1}`}</span>
                                        </div>
                                        <div className="card-title">
                                            <span>{`0${idx + 1}`}</span>
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card-title">
                                            <span>{title}</span>
                                            <span>{`0${idx + 1}`}</span>
                                        </div>
                                        <div className="card-copy">
                                            {idx === 0 && (
                                                <>
                                                    <p>Requirements Check</p>
                                                    <p>User Flow 이해</p>
                                                    <p>Site Map 분석</p>
                                                    <p>Accessibility 고려</p>
                                                    <p>Responsive Strategy</p>
                                                    <p>Publishing Guide</p>
                                                </>
                                            )}
                                            {idx === 1 && (
                                                <>
                                                    <p>Wireframes</p>
                                                    <p>UI Kits</p>
                                                    <p>Prototypes</p>
                                                    <p>Visual Style</p>
                                                    <p>Interaction</p>
                                                    <p>Design QA</p>
                                                </>
                                            )}
                                            {idx === 2 && (
                                                <>
                                                    <p>HTML/CSS/JS</p>
                                                    <p>CMS Build</p>
                                                    <p>GSAP Motion</p>
                                                    <p>Responsive</p>
                                                    <p>Optimization</p>
                                                    <p>Launch</p>
                                                </>
                                            )}
                                        </div>
                                        <div className="card-title">
                                            <span>{`0${idx + 1}`}</span>
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="con4">
                <h1>The Story of My Code Continues</h1>
            </section>
        </IntroStyle>
    );
};

export default Intro;
