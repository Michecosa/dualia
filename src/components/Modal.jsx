import { useEffect } from 'react';

export default function Modal({ message, onClose, duration = 5000, type = 'success' }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const iconColor = type === 'success' ? '#e3be85' : type === 'error' ? '#ff6b6b' : '#4ecdc4';

    return (
        <>
            <div
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                style={{ zIndex: 9998 }}
                onClick={onClose}
            ></div>

            <div
                className="position-fixed top-50 start-50 translate-middle bg-black border border-2 rounded-3 p-4 text-center"
                style={{
                    zIndex: 9999,
                    borderColor: '#e3be85',
                    minWidth: '320px',
                    maxWidth: '500px',
                    boxShadow: '0 10px 40px rgba(227, 190, 133, 0.3)'
                }}
            >
                <button
                    className="btn-close btn-close-white position-absolute top-0 end-0 m-2"
                    onClick={onClose}
                    style={{ filter: 'invert(0.7) sepia(1) saturate(5) hue-rotate(10deg)' }}
                ></button>

                <div className="mb-3" style={{ fontSize: '3rem', color: iconColor }}>
                    {type === 'success' && <i className="bi bi-check-circle-fill"></i>}
                    {type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
                    {type === 'info' && <i className="bi bi-info-circle-fill"></i>}
                </div>

                <p className="mb-0 fs-5 fw-medium" style={{ color: '#e3be85' }}>
                    {message}
                </p>
            </div>
        </>
    );
}
