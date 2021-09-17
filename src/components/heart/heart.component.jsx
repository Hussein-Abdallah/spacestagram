import React from 'react';

import './heart.styles.css'

const Heart = ({floatDirection}) => {
    const handleHeartClick = (e) => {
        e.target.classList.toggle('is-active');
    }

    return(
        <div className="stage">
            <div className="heart" style={{background: `url("/assets/resized-heart.png")`, float: `${floatDirection}`}} onClick={handleHeartClick}></div>
        </div>
    )
}

export default Heart
