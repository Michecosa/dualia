import React from 'react';
import jumbotronImage from '../assets/Jumbotron_photo.jpeg';

function Jumbotron() {
    return (
        <div className="jumbotron position-relative overflow-hidden text-center bg-light">
            <img
                src={jumbotronImage}
                alt="Dualia Jumbotron"
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
            />
            <div className="jumbotron-overlay position-relative p-5">
                <h1 className="display-1 fw-bold text-white fs-1"> D U A L I A </h1>
                <p className="lead text-white fs-5"> Two colors One balance </p>
                <div className="container text-center text-white p-5 mt-5">
                    <h2>
                        "Perfection is achieved, not when there is nothing more to add, <br />
                        but when there is nothing left to take away."
                    </h2>
                    <p className="text-white p-3">— Antoine de Saint-Exupéry</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;