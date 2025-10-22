import React, { useEffect } from 'react';

const EventModal = ({ src, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="event-modal-backdrop" onClick={onClose}>
            <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <img src={src} alt="Event Detail" />
            </div>
        </div>
    );
};

export default EventModal;
