import React from 'react';
import './image-card.styles.css';

const ImageCard = ({id, hdurl, title, date, explanation, url}) => {

    const handleImageClick = () => {
        const modal = document.getElementById("myModal");
        const imgHtml = `
        <img src=${hdurl} class="modal-content" id="FullImage" alt=${title} />
        <div id="Caption">${title}</div>
        `
        modal.insertAdjacentHTML('afterbegin', imgHtml);
        modal.style.display = "block";
    }

    return (
        <div className="col-12 col-md-6 my-3">
            <div className="card">
            {
                hdurl ?
                (<div
                    className="card-img" 
                    style={{
                        backgroundImage: `url(${hdurl})`
                    }}
                    onClick={handleImageClick}></div>)
                :
                <div
                className="card-img" 
                style={{
                    backgroundImage: `url(/assets/placeholder.jpeg)`
                }}></div>
            }
                
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{date}</p>
                    <p className="card-text">{(explanation.length > 150) ? explanation.substring(0, 150) + '...' : explanation}</p>
                    <a href={url} className="btn btn-primary">More information</a>
                </div>
            </div>
        </div>
    )
}
export default ImageCard;