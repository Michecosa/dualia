import React from 'react';
import jumbotronImage from '../assets/jumbotron_image.jpeg';

function Jumbotron() {
    return (
        <div className="jumbotron position-relative overflow-hidden text-center bg-light">
            <img
                src={jumbotronImage}
                alt="Dualia Jumbotron"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
            />
            <div className="jumbotron-overlay position-relative p-5">
                <h1 className="display-1 fw-bold text-white fs-1"> Minimal Luxury for Inner Balance </h1>
                <p className="lead text-white fs-5"> Two colors One balance </p>
            </div>
        </div>
    );
}

export default Jumbotron;