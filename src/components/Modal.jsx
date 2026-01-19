import { useEffect } from 'react';

export default function Modal({ message, onClose, duration = 4000, type = 'success' }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const iconColor = type === 'error' ? '#ff6b6b' : '#e3be85';

    return (
        <div
            className="position-fixed start-50 translate-middle-x bg-black p-4 text-center mx-3"
            style={{ zIndex: 9999, minWidth: '280px', maxWidth: '500px', top: '30%' }}>

            <button
                className="position-absolute top-0 end-0 m-2 border-0 bg-transparent"
                onClick={onClose}
                style={{ color: '#e3be85', fontSize: '1.5rem', cursor: 'pointer' }}>
                <i className="bi bi-x-lg"></i>
            </button>

            <div className="mb-3" style={{ fontSize: '3rem', color: iconColor }}>
                {type === 'success' && <i className="bi bi-check-circle-fill"></i>}
                {type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
            </div>

            <p className="mb-0 fs-5 fw-medium" style={{ color: '#e3be85' }}>
                {message}
            </p>
        </div>
    );
};
