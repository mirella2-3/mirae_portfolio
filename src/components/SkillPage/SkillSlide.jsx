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
                initSlider(); // 이제 안전하게 호출 가능
            }
        };

        // 이미지 로드 확인
        items.forEach((li) => {
            const img = li.querySelector('img');
            if (img.complete) {
                checkImagesLoaded();
            } else {
                img.addEventListener('load', checkImagesLoaded);
            }
        });

        // ⚡ 여기만 바꿈
        function initSlider() {
            const itemWidth = items[0].offsetWidth;

            // 기존 클론 제거
            while (slider.children.length > originalCount) {
                slider.removeChild(slider.lastChild);
            }

            // 앞뒤로 클론 추가
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

            // 무한 슬라이드 타임라인
            tl.current = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });
            tl.current.to(slider, {
                x: -itemWidth * originalCount,
                duration: 100,
                onComplete: () => {
                    gsap.set(slider, { x: 0 });
                },
            });

            // 마우스 이벤트
            const handleEnter = () => tl.current.pause();
            const handleLeave = () => tl.current.resume();
            slider.addEventListener('mouseenter', handleEnter);
            slider.addEventListener('mouseleave', handleLeave);

            // 클린업
            return () => {
                tl.current.kill();
                slider.removeEventListener('mouseenter', handleEnter);
                slider.removeEventListener('mouseleave', handleLeave);
            };
        }

        // 클린업
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
