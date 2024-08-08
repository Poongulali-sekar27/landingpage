import React from 'react';
import '../Style/Showcase.css';

const ShowcaseItem = ({ image, orderClass, title, description }) => {
    return (
        <div className="row g-0 showcase-item">
            <div className={`col-lg-6 ${orderClass} text-white showcase-img`} style={{ backgroundImage: `url(${image})` }}></div>
            <div className="col-lg-6 my-auto showcase-text">
                <h2>{title}</h2>
                <p className="lead mb-0">{description}</p>
            </div>
        </div>
    );
}

export default ShowcaseItem;
