import { useEffect, useRef, useState } from 'react';
import PortfolioData from '../../assets/PortfolioData';
import { WorkGalleryStyle } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const showPanel = (index) => {
        setActiveIndex(index);
    };

    const sectionRef = useRef(null);
    const vw = window.innerWeight;

    const startOffset = vw > 2000 ? 'top 65%' : 'top 75%';

    useEffect(() => {
        const el = sectionRef.current;

        gsap.set(el, {
            scale: 0.7,
            filter: 'grayscale(100%)',
            opacity: 0.5,
            transformOrigin: 'center center',
        });

        gsap.to(el, {
            scale: 1,
            y: -250,
            filter: 'grayscale(0%)',
            opacity: 1,
            duration: 1,

            scrollTrigger: {
                trigger: el,
                start: startOffset,
                // start: 'top 80%',
                end: 'top 300px',
                toggleActions: 'play none none reverse',
            },
            marker: true,
        });
    }, []);

    return (
        <WorkGalleryStyle>
            <div className="inner" ref={sectionRef}>
                <div className="tabContainer">
                    <div className="buttonContainer">
                        {PortfolioData.map((item, index) => {
                            const isActive = activeIndex === index;
                            const isFirst = index === 0;
                            const isLast = index === PortfolioData.length - 1;

                            const pathD = isFirst
                                ? 'M200.528 13.7402C197.826 5.54028 190.167 0 181.533 0H20C8.9543 0 -1.52588e-05 8.95431 -1.52588e-05 20V68C-1.52588e-05 79.0457 8.95428 88 20 88H197.351C210.974 88 220.61 74.6783 216.346 61.7402L200.528 13.7402Z'
                                : isLast
                                ? 'M13.6636 14.1336C16.2407 5.73403 23.9978 0 32.7838 0H196C207.046 0 216 8.95431 216 20V68C216 79.0457 207.046 88 196 88H18.0566C4.60715 88 -5.00872 74.9914 -1.0637 62.1336L13.6636 14.1336Z'
                                : 'M11.695 14.7376C14.0681 6.03642 21.9713 0 30.9903 0H182.438C191.457 0 199.361 6.03643 201.734 14.7377L214.825 62.7377C218.294 75.4605 208.717 88 195.529 88H17.8994C4.71189 88 -4.86577 75.4604 -1.39591 62.7377L11.695 14.7376Z';

                            const fillColor = isActive
                                ? '#fff'
                                : index % 2 === 0
                                ? '#564438'
                                : '#362718';

                            const textColor = isActive ? '#362718' : '#fff';

                            return (
                                <button
                                    key={index}
                                    onClick={() => showPanel(index)}
                                    style={{
                                        position: 'relative',
                                        zIndex: isActive ? 10 : 1,
                                        color: textColor,
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="215"
                                        height="88"
                                        viewBox="0 0 215 88"
                                        fill="none"
                                    >
                                        <g filter="url(#filter0_d)">
                                            <path d={pathD} fill={fillColor} />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d"
                                                x="-10"
                                                y="-4"
                                                width="230"
                                                height="96"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood
                                                    floodOpacity="0"
                                                    result="BackgroundImageFix"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dx="0" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '-5%',
                                            transform: 'translate(-50%, -50%)',
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        Projects 0{item.id}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {PortfolioData.map((item, index) => (
                        <div
                            key={index}
                            className="tabPanel"
                            style={{
                                display: activeIndex === index ? 'block' : 'none',
                            }}
                        >
                            <ul>
                                <li className="left">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <button>Web</button>
                                    <button>Figma</button>
                                </li>
                                <li className="right">
                                    <p>
                                        <img src={item.imgUrl} alt={item.imgUrl} />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bgText">
                <div className="horizontal-scrolling-items__item">ezen academic projects</div>

                <div className="horizontal-scrolling-items__item">ezen academic projects</div>
            </div>
        </WorkGalleryStyle>
    );
};

export default WorkGallery;
