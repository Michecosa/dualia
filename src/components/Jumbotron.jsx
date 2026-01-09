import React from 'react';

const Jumbotron = ({ title, subtitle, imageSrc, imageAlt }) => {
    return (
        <div className="jumbotron position-relative overflow-hidden text-center bg-light">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-100 position-absolute top-0 start-0 object-fit-cover"
                style={{ zIndex: 0 }}
            />
            <div
                className="position-relative p-5"
                style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
                <h1 className="display-4 fw-bold text-white">{title}</h1>
                {subtitle && <p className="lead text-white">{subtitle}</p>}
            </div>
        </div>
    );
};

export default Jumbotron;