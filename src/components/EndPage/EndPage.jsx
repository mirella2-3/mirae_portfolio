import { EndPageStyle } from './style';

const EndPage = () => {
    return (
        <EndPageStyle>
            <div className="inner">
                <div className="bg">
                    <img src="/images/endPhoto.png" alt="" />
                </div>
                <div className="text-box">
                    <p>
                        <img src="/images/endText.png" alt="" />
                    </p>

                    <span>내 작품이 커피 향처럼 오래 머물기를 바랍니다.</span>
                    <h5>© 2025 Kangmiseon. All rights reserved.</h5>
                </div>
            </div>
        </EndPageStyle>
    );
};

export default EndPage;
