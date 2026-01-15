import { useState, useRef, useEffect } from "react";

export default function SliderPrice({ onChange }) {

    const MIN = 20;
    const MAX = 10000;

    const [min, setMin] = useState(MIN);
    const [max, setMax] = useState(MAX);

    const minRef = useRef(null);
    const maxRef = useRef(null);
    const rangeRef = useRef(null);

    // aggiorna la barra piena
    useEffect(() => {
        const minPercent = ((min - MIN) / (MAX - MIN)) * 100;
        const maxPercent = ((max - MIN) / (MAX - MIN)) * 100;
        if (rangeRef.current) {
            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [min, max]);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), max);
        setMin(value);
        onChange?.({ min: value, max });
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), min);
        setMax(value);
        onChange?.({ min, max: value });
    };

    return (

        <>
            <div id="slider" className="price-wrapper p-3 border rounded">
                <label className="form-label fw-semibold mb-2">Price</label>

                <div className="d-flex flex-column justify-content-between mb-2 gap-2">
                    <span className="badge bg-dark">€ {min.toFixed(2)}</span>
                    <span className="badge bg-dark">€ {max.toFixed(2)}</span>
                </div>

                <div className="slider-container">
                    <div className="slider-track"></div>
                    <div className="slider-range bg-dark" ref={rangeRef}></div>
                    <input
                        type="range"
                        className="thumb thumb-left"
                        min={MIN}
                        max={MAX}
                        value={min}
                        onChange={handleMinChange}
                    />
                    <input
                        type="range"
                        className="thumb thumb-right"
                        min={MIN}
                        max={MAX}
                        value={max}
                        onChange={handleMaxChange}
                    />
                </div>
            </div>


        </>

    )
}

