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

        ScrollTrigger.create({
            trigger: '.cards',
            start: 'top top',
            end: `+=${totalScrollHeight}`,
            pin: true,
            pinSpacing: true,
        });

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
        gsap.to('.letter-in', {
            y: 200, // Move it down by 200px
            scrollTrigger: {
                trigger: '.cards',
                start: 'top 20%', // When the top of the .cards hits the 20% mark of the viewport
                end: 'top 40%', // Ends when the top reaches 40% of the viewport
                scrub: true, // Sync with scrolling
                pin: true, // Keep the letter elements pinned while scrolling
                anticipatePin: 1, // Smooth pinning
            },
        });

        gsap.to('.letter-out', {
            y: 300, // Move it down by 200px
            scrollTrigger: {
                trigger: '.cards',
                start: 'top 20%', // When the top of the .cards hits the 20% mark of the viewport
                end: 'top 40%', // Ends when the top reaches 40% of the viewport
                scrub: true, // Sync with scrolling
                pin: true, // Keep the letter elements pinned while scrolling
                anticipatePin: 1, // Smooth pinning
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return (
        <>
            <AllStyle className="con1">
                <div className="letter-wrap">
                    <div className="letter-in">
                        <img src="/images/Intro-image/letter-in.png" alt="" />
                    </div>
                    <div className="letter-out">
                        <img src="/images/Intro-image/letter-out.png" alt="" />
                    </div>
                </div>
            </AllStyle>

            <CardStyle className="cards">
                <div className="inner">
                    {CardData.map((card) => (
                        <div className="card" id={`card-${card.id}`} key={card.id}>
                            <div className="card-wrapper">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/images/Intro-image/card1.png" alt={card.title} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p
                                            style={{
                                                fontSize: 26,
                                                color: '#81614E',
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            <span style={{ fontSize: 24, color: '#d1c5bc' }}>
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
