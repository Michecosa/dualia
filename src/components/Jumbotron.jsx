import React from 'react';
import jumbotronImage from '../assets/jumbotron_image.jpeg';

function Jumbotron() {
    return (
        <div className="jumbotron position-relative overflow-hidden text-center bg-light">
            <img
                src={jumbotronImage}
                alt="Dualia Jumbotron"
                className="w-100 position-absolute top-0 start-0 object-fit-cover"
                style={{ zIndex: 0 }}
            />
            <div
                className="position-relative p-5"
                style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
                <h1 className="display-4 fw-bold text-white"> Minimal Luxury for Inner Balance </h1>
                <p className="lead text-white"> Two colors One balance </p>
            </div>
        </div>
    );
}

export default Jumbotron;