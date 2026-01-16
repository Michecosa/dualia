import { Link } from 'react-router-dom';

export default function ThankYou() {
    return (
        <div className="container">
            <div className="text-center" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
                <img
                    src="/src/assets/Loghi_Dualia/logo_dualia_header.png"
                    alt="Dualia Logo"
                    style={{ height: '80px', marginBottom: '3rem' }} />

                <h1 className="mb-4">Thank You for Your Order!</h1>

                <p className="lead mb-4">
                    Your order has been successfully placed.
                </p>

                <p className="text-muted" style={{ marginBottom: '4rem' }}>
                    You will receive a confirmation email shortly.
                </p>

                <Link to="/" className="btn btn-dualia-thank-you rounded-1 px-4 py-2">
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
