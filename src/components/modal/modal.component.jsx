import React from 'react';

import './modal.styles.css'

const Modal = () => {

    const handleCloseButton = () => {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("FullImage").remove();
        document.getElementById("Caption").remove();
    }

    return (
        <div id="myModal" className="modal">
            <span className="close" onClick={handleCloseButton}>&times;</span>
        </div>
    )
}

export default Modal