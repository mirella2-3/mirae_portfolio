import React from 'react';
import { ViralPageStyle } from './style';
import ViralLongSlide from './ViralLongSlide';
import ViralShortSlide from './ViralShortSlide';

const ViralPage = () => {
    return (
        <ViralPageStyle>
            <h1>Viral image</h1>
            <ViralLongSlide />
            <ViralShortSlide />
        </ViralPageStyle>
    );
};

export default ViralPage;
