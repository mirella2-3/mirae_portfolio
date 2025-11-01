import React, { useRef, useState, useEffect } from 'react';

const RippleEffectCanvas = () => {
    const canvasRef = useRef(null); // 캔버스 참조
    const [circleCoord, setCircleCoord] = useState([]);
    const [stay, setStay] = useState(0);
    const [auto, setAuto] = useState(true);
    const [mX, setMX] = useState(window.innerWidth / 2);
    const [mY, setMY] = useState(window.innerHeight / 2);
    const [frame, setFrame] = useState(0);
    const [dir, setDir] = useState(1);
    const [dirY, setDirY] = useState(1);

    // 마우스 이벤트 핸들러
    const handleMouseMove = (e) => {
        setStay(0);
        setAuto(false);
        setMX(e.pageX - e.target.offsetLeft);
        setMY(e.pageY - e.target.offsetTop);
    };

    // 캔버스 렌더링
    const drawCircle = (context, mx, my, radius, opacity) => {
        context.beginPath();
        context.arc(mx, my, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 3;
        context.strokeStyle = `rgba(100, 149, 237, ${opacity})`;
        context.stroke();
    };

    // 애니메이션 렌더링
    const render = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // 캔버스 클리어

        const currentFrame = frame + 1;
        if (
            currentFrame > 5 &&
            currentFrame % 2 === 0 &&
            circleCoord[circleCoord.length - 1] &&
            circleCoord[circleCoord.length - 1][0] === mX &&
            circleCoord[circleCoord.length - 1][1] === mY
        ) {
            setStay(stay + 1);
            if (stay > 50) setAuto(true);
        }

        if (!auto) {
            setCircleCoord([...circleCoord, [mX, mY, currentFrame]]);
        } else {
            setStay((prevStay) => (prevStay + 1) % 400);
            if (stay % 93 === 0) {
                setDir(-dir);
                setDirY(-dirY);
            }

            setCircleCoord([
                ...circleCoord,
                [
                    mX + dir * (Math.random() * 3 - 100 + stay),
                    mY + dirY * (Math.random() * 3 - 100 + stay),
                    currentFrame,
                ],
            ]);
        }

        if (circleCoord.length > 100) circleCoord.shift();

        // 원을 그리기
        circleCoord.forEach(([x, y, frameDelta]) => {
            const base = currentFrame - frameDelta + 15;
            drawCircle(context, x + base, y + base / 2, 3 * base + base / 10, 1.3 / base);
            drawCircle(context, x, y, 1.5 * base + base / 10, 2.3 / base);
            drawCircle(context, x, y, 2 * base + base / 20, 2.5 / base);
        });

        setFrame(currentFrame);
        requestAnimationFrame(render); // 계속해서 애니메이션 호출
    };

    // useEffect를 사용하여 컴포넌트 마운트 시 이벤트 리스너 설정 및 애니메이션 시작
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleMouseMove);

        // 애니메이션 시작
        render();

        // 컴포넌트 언마운트 시 이벤트 리스너 정리
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchmove', handleMouseMove);
        };
    }, [circleCoord, stay, auto, mX, mY, dir, dirY, frame]);

    return (
        <div>
            <div id="debug">
                {mX} {mY}
            </div>
            <div id="canvasDiv">
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </div>
        </div>
    );
};

export default RippleEffectCanvas;
