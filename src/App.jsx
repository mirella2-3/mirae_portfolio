import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './page/Home';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import Intro0 from './page/Intro';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<Navigate to="/intro" replace />} />
                <Route path="/intro" element={<Intro0 />} />
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
