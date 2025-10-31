import { useState } from 'react';
import { gsap } from 'gsap';
import { FirstPage } from './style';
import ViewProjectButton from '../../components/Ui/ViewProjectButton';
import Home from '../Home';

const Intro0 = () => {
    const [showNext, setShowNext] = useState(false);

    const handleNext = () => {
        setShowNext(true);
    };

    return (
        <FirstPage>
            {!showNext ? (
                <>
                    <ul className="text">
                        <li>A Cup of Code</li>
                        <li>A Cup of Code</li>
                        <li>A Cup of Code</li>
                        <li>A Cup of Code</li>
                    </ul>
                    <div className="coffee">
                        <img src="/images/Intro-image/coffee.png" alt="Coffee" />
                    </div>

                    <ViewProjectButton onClick={handleNext} />
                </>
            ) : (
                <Home />
            )}
        </FirstPage>
    );
};

export default Intro0;
