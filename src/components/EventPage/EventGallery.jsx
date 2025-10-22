import React, { useState } from 'react';
import EventModal from './EventModal';

const EventGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (index) => {
        const formattedNum = String(index + 1).padStart(2, '0'); // 01~14
        setSelectedImage(`/images/Event-image/Event-image${formattedNum}.png`);
    };

    const closeModal = () => setSelectedImage(null);

    return (
        <div className="thumbList">
            {[...Array(14)].map((_, i) => (
                <li key={i} onClick={() => handleClick(i)}>
                    <img
                        src={`/images/Event-image/Event-thumb${String(i + 1).padStart(2, '0')}.png`}
                        alt={`thumb${i + 1}`}
                    />
                </li>
            ))}

            {selectedImage && <EventModal src={selectedImage} onClose={closeModal} />}
        </div>
    );
};

export default EventGallery;
