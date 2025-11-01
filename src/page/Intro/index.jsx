import { useNavigate } from 'react-router-dom';
import { FirstPage } from './style';
import ViewProjectButton from '../../components/Ui/ViewProjectButton';

const Intro0 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // Layout 안의 Portfolio(Home) 페이지로 이동
        navigate('/portfolio');
    };

    return (
        <FirstPage>
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
        </FirstPage>
    );
};

export default Intro0;
