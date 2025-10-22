import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import CardData from '../../assets/CardData';
import { AllStyle, CardStyle } from './style';

gsap.registerPlugin(ScrollTrigger);

const CardIndex = () => {
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const cards = gsap.utils.toArray('.card');
        const totalScrollHeight = window.innerHeight * 3;
        const positions = [14, 38, 62, 86];
        const rotations = [-15, -7.5, 7.5, 15];

        // pin section
        ScrollTrigger.create({
            trigger: '.cards',
            start: 'top top',
            end: `+=${totalScrollHeight}`,
            pin: true,
            pinSpacing: true,
        });

        // spread cards
        cards.forEach((card, index) => {
            gsap.to(card, {
                left: `${positions[index]}%`,
                rotation: rotations[index],
                ease: 'none',
                scrollTrigger: {
                    trigger: '.cards',
                    start: 'top top',
                    end: `+=${window.innerHeight}`,
                    scrub: 0.5,
                },
            });
        });

        // rotate / flip
        cards.forEach((card, index) => {
            const frontEl = card.querySelector('.flip-card-front');
            const backEl = card.querySelector('.flip-card-back');
            const staggerOffset = index * 0.05;
            const startOffset = 1 / 3 + staggerOffset;
            const endOffset = 2 / 3 + staggerOffset;

            ScrollTrigger.create({
                trigger: '.cards',
                start: 'top top',
                end: `+=${totalScrollHeight}`,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (progress >= startOffset && progress <= endOffset) {
                        const animationProgress = (progress - startOffset) / (1 / 3);
                        const frontRotation = -180 * animationProgress;
                        const backRotation = 180 - 180 * animationProgress;
                        const cardRotation = rotations[index] * (1 - animationProgress);
                        frontEl.style.transform = `rotateY(${frontRotation}deg)`;
                        backEl.style.transform = `rotateY(${backRotation}deg)`;
                        card.style.transform = `translate(-50%, -50%) rotate(${cardRotation}deg)`;
                    }
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <>
            <AllStyle className="con1">
                <h1>인트로</h1>
            </AllStyle>

            <CardStyle className="cards">
                <div className="inner">
                    {CardData.map((card) => (
                        <div className="card" id={`card-${card.id}`} key={card.id}>
                            <div className="card-wrapper">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/images/card-front.png" alt={card.title} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p style={{ fontSize: 26, color: '#fff', lineHeight: 1.2 }}>
                                            <span style={{ fontSize: 24, color: '#75273D' }}>
                                                0{card.id}
                                            </span>
                                            {card.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardStyle>
        </>
    );
};

export default CardIndex;
