import React from 'react';

import './loading-spinner.styles.css'
const LoadingSpinner = () => {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default LoadingSpinner;