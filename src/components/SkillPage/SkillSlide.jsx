import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SkillList from '../../assets/SkillList';

const SkillSlide = () => {
    const sliderRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const items = Array.from(slider.children);
        const originalCount = items.length;

        const itemWidth = items[0].offsetWidth;
        const totalWidth = itemWidth * originalCount;

        for (let i = 0; i < originalCount; i++) {
            const clone = items[i].cloneNode(true);
            slider.appendChild(clone);
        }

        slider.style.width = `${itemWidth * slider.children.length}px`;

        gsap.set(slider, { x: 0 });

        tl.current = gsap.to(slider, {
            x: -totalWidth,
            duration: 240,

            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

        const handleEnter = () => tl.current.pause();
        const handleLeave = () => tl.current.resume();

        slider.addEventListener('mouseenter', handleEnter);
        slider.addEventListener('mouseleave', handleLeave);

        return () => {
            tl.current.kill();
            slider.removeEventListener('mouseenter', handleEnter);
            slider.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <div
            id="SkillBox"
            style={{
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <ul
                ref={sliderRef}
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    userSelect: 'none',
                    padding: 0,
                    margin: 0,
                }}
            >
                {SkillList.map((src, idx) => (
                    <li key={idx}>
                        <a>
                            <img src={src} alt={`Skill-${idx + 1}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillSlide;
