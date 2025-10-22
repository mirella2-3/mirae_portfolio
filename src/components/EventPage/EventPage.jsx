import EventGallery from './EventGallery';
import { EventPageStyle } from './style';

const EventPage = () => {
    return (
        <EventPageStyle>
            <div className="inner">
                <h3>Event details page</h3>
                <p>이벤트 정보를 직관적으로 전달하기 위해 설계한 상세 페이지입니다.</p>
                <EventGallery />
                <span className="detaliText">
                    <p>
                        <img src="/images/mingcute_finger-tap-line.png" alt="" />
                    </p>
                    썸네일 이미지를<strong>{'\u00A0'} 클릭</strong> 하시면 이벤트
                    <span> {'\u00A0'}상세페이지를 확인</span> 하실 수 있습니다.
                </span>
            </div>
        </EventPageStyle>
    );
};

export default EventPage;
