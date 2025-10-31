import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ViewStyle } from './style';

const ViewProjectButton = ({ onClick }) => {
    const wrapperRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const link = linkRef.current;

        const xTo = gsap.quickTo(wrapper, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(wrapper, 'y', { duration: 0.4, ease: 'power3' });

        const handleMouseMove = (e) => {
            const rect = link.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width / 2;
            const relY = e.clientY - rect.top - rect.height / 2;
            xTo(relX * 3);
            yTo(relY * 3);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        link.addEventListener('mousemove', handleMouseMove);
        link.addEventListener('mouseleave', handleMouseLeave);

        gsap.set(wrapper, { x: 0, y: 0, xPercent: -50, yPercent: -50 });

        return () => {
            link.removeEventListener('mousemove', handleMouseMove);
            link.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <ViewStyle className="link-wrapper" ref={wrapperRef}>
            <a
                href="#"
                ref={linkRef}
                className="link"
                onClick={(e) => {
                    e.preventDefault();

                    if (onClick) onClick();
                }}
            >
                <span>view</span>
                <span>portfolio</span>
            </a>
        </ViewStyle>
    );
};

export default ViewProjectButton;
