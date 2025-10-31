import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import Intro0 from './page/Intro';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Routes>
                <Route path="/intro" element={<Intro0 />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
