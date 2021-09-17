import React from 'react';
import ImageCard from '../image-card/image-card.component';

const ImagesList = ({imagesList}) => {
    return (
        <div className="container">
            <div className="row">
                { imagesList.map((image, index) => (
                <ImageCard key={index} {...image} />
                ))}
            </div>
        </div>
    )
}

export default ImagesList;