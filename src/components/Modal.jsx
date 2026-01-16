import { useEffect } from 'react';

export default function Modal({ message, onClose, duration = 4000, type = 'success' }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const iconColor = type === 'success' ? '#e3be85' : type === 'error' ? '#ff6b6b' : '#4ecdc4';

    return (
        <div
            className="position-fixed top-50 start-50 translate-middle bg-black rounded-3 p-4 text-center"
            style={{ zIndex: 9999, minWidth: '320px', maxWidth: '500px' }}>

            <button
                type="button"
                className="position-absolute top-0 end-0 m-2 border-0 bg-transparent p-0"
                onClick={onClose}
                aria-label="Close"
                style={{color: '#e3be85',fontSize: '1.8rem',lineHeight: 1,cursor: 'pointer',width: '1.5rem',height: '1.5rem'}}>
                ×
            </button>

            <div className="mb-3" style={{ fontSize: '3rem', color: iconColor }}>
                {type === 'success' && <i className="bi bi-check-circle-fill"></i>}
                {type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
                {type === 'info' && <i className="bi bi-info-circle-fill"></i>}
            </div>

            <p className="mb-0 fs-5 fw-medium" style={{ color: '#e3be85' }}>
                {message}
            </p>
        </div>
    );
};
