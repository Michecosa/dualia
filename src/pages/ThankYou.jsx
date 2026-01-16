import { Link } from 'react-router-dom';

export default function ThankYou() {
    return (
        <div className="container mt-5">
            <div className="text-center py-5">
                {/* Logo Dualia */}
                <img
                    src="/src/assets/Loghi_Dualia/Logo_Dualia_Nero.png"
                    alt="Dualia Logo"
                    style={{ height: '80px', marginBottom: '2rem' }}/>



                <h1 className="mb-4">Thank You for Your Order!</h1>

                <p className="lead mb-4">
                    Your order has been successfully placed.
                </p>

                <p className="text-muted mb-5">
                    You will receive a confirmation email shortly.
                </p>

                <Link to="/" className="btn btn-dualia-dark rounded-1 px-4 py-2">
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
