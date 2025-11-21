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

        let loadedCount = 0;
        const checkImagesLoaded = () => {
            loadedCount++;
            if (loadedCount === originalCount) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        initSlider();
                    });
                });
            }
        };

        items.forEach((li) => {
            const img = li.querySelector('img');
            if (img.complete) {
                checkImagesLoaded();
            } else {
                img.addEventListener('load', checkImagesLoaded);
            }
        });

        function initSlider() {
            const itemWidth = items[0].offsetWidth;

            while (slider.children.length > originalCount) {
                slider.removeChild(slider.lastChild);
            }

            for (let i = originalCount - 1; i >= 0; i--) {
                const clone = items[i].cloneNode(true);
                slider.insertBefore(clone, slider.firstChild);
            }

            for (let i = 0; i < originalCount; i++) {
                const clone = items[i].cloneNode(true);
                slider.appendChild(clone);
            }

            const totalCount = slider.children.length;
            slider.style.width = `${itemWidth * totalCount}px`;

            gsap.set(slider, { x: 0 });

            tl.current = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });
            tl.current.to(slider, {
                x: -itemWidth * originalCount,
                duration: 100,
                onComplete: () => {
                    gsap.set(slider, { x: 0 });
                },
            });
        }

        return () => {
            items.forEach((li) => {
                const img = li.querySelector('img');
                img.removeEventListener('load', checkImagesLoaded);
            });
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
