import { useState } from "react";
import zenGarden from "../assets/immagini_dualia/giardino_zen_delux_white.jpeg";

export default function Contact() {
    const [message, setMessage] = useState("");
    const [showZenMessage, setShowZenMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowZenMessage(true);
        setTimeout(() => setShowZenMessage(false), 5000);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    {/* Header Zen */}
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold mb-3">
                            🧘‍♂️ Contact Our Zen Master 🧘‍♀️
                        </h1>
                        <p className="lead text-muted fst-italic">
                            "The journey of a thousand lights begins with a single message" - Michi Della Gatta (probably)
                        </p>
                    </div>

                    {/* Zen Garden Image */}
                    <div className="position-relative mb-5 rounded-0 overflow-hidden shadow-lg">
                        <img
                            src={zenGarden}
                            alt="Zen Garden"
                            className="w-100"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        >
                            <h2 className="text-white fw-bold display-6">
                                ✨ Find Your Inner Light ✨
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        {/* Contact Info Card */}
                        <div className="col-md-6 mb-4">
                            <div className="card rounded-0 border-0 shadow h-100" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4" style={{ color: "#e3be85" }}>
                                        📍 Our Enlightenment Headquarters
                                    </h3>

                                    <div className="mb-4">
                                        <h5 className="fw-bold mb-3">🧙‍♂️ Grand Master of Illumination</h5>
                                        <p className="mb-1">
                                            <strong>Michi Della Gatta</strong>
                                        </p>
                                        <p className="text-muted fst-italic small">
                                            (Chief Candle Lighter & Pizza Enthusiast)
                                        </p>
                                    </div>

                                    <div className="mb-3">
                                        <i className="bi bi-envelope-fill me-2" style={{ color: "#e3be85" }}></i>
                                        <a href="mailto:michi@example.com" className="text-decoration-none text-dark">
                                            michi@example.com
                                        </a>
                                        <p className="ms-4 text-muted small">
                                            (Spiritual inquiries answered within 1-3 business karma cycles)
                                        </p>
                                    </div>

                                    <div className="mb-3">
                                        <i className="bi bi-geo-alt-fill me-2" style={{ color: "#e3be85" }}></i>
                                        <span>Via della Pizza, 1</span>
                                        <p className="ms-4 mb-0">80121 Napoli (NA)</p>
                                        <p className="ms-4 text-muted small">
                                            Italy 🇮🇹 (Third door on the left, follow the smell of mozzarella)
                                        </p>
                                    </div>

                                    <div className="alert rounded-0 mt-4" style={{ backgroundColor: "#e3be85", border: "none" }}>
                                        <p className="mb-0 fw-bold text-center">
                                            🍕 "May your path be lit and your pizza be hot" 🍕
                                        </p>
                                        <p className="mb-0 text-center small fst-italic">
                                            - Ancient Neapolitan Proverb
                                        </p>
                                    </div>

                                    <div className="mt-4 p-3 bg-white rounded-0">
                                        <h6 className="fw-bold mb-2">🕐 Meditation Hours:</h6>
                                        <p className="mb-1 small">Mon-Fri: 9:00 - 18:00 (Siesta included)</p>
                                        <p className="mb-1 small">Sat: 10:00 - 14:00 (Half-enlightenment day)</p>
                                        <p className="mb-0 small">Sun: Closed (Even Zen masters need rest)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-6 mb-4">
                            <div className="card rounded-0 border-0 shadow h-100">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4" style={{ color: "#e3be85" }}>
                                        ✉️ Send Us Your Zen Vibes
                                    </h3>

                                    {showZenMessage && (
                                        <div className="alert alert-success rounded-0 mb-4">
                                            <p className="mb-0 fw-bold">🙏 Message received!</p>
                                            <p className="mb-0 small">
                                                Your energy has been transmitted to the universe (and to Michi's inbox)
                                            </p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label fw-bold">
                                                Your Spiritual Name:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control rounded-0"
                                                id="name"
                                                placeholder="e.g., Illuminated Soul #42"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-bold">
                                                Email Address:
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control rounded-0"
                                                id="email"
                                                placeholder="enlightened@universe.com"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="subject" className="form-label fw-bold">
                                                Subject:
                                            </label>
                                            <select className="form-select rounded-0" id="subject" required>
                                                <option value="">Choose your quest...</option>
                                                <option value="light">🕯️ I seek the perfect light</option>
                                                <option value="zen">🧘 Zen garden advice needed</option>
                                                <option value="pizza">🍕 Pizza + Candles combo?</option>
                                                <option value="existential">💭 Existential lamp crisis</option>
                                                <option value="other">🌟 Other cosmic inquiry</option>
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="message" className="form-label fw-bold">
                                                Your Message:
                                            </label>
                                            <textarea
                                                className="form-control rounded-0"
                                                id="message"
                                                rows="5"
                                                placeholder="Share your thoughts... or just tell us about your day 🌸"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            ></textarea>
                                            <small className="text-muted">
                                                Pro tip: Messages containing "pizza" get 20% faster response time
                                            </small>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-dualia-dark w-100 py-3 fw-bold"
                                        >
                                            🚀 Send to the Zen Dimension
                                        </button>
                                    </form>

                                    <div className="mt-4 p-3 text-center" style={{ backgroundColor: "#f8f9fa" }}>
                                        <p className="mb-2 fst-italic small">
                                            "A cluttered inbox is a cluttered mind"
                                        </p>
                                        <p className="mb-0 small text-muted">
                                            (But we'll still read your message, promise! 🤞)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fun Facts Section */}
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="card rounded-0 border-0 shadow" style={{ backgroundColor: "black", color: "white" }}>
                                <div className="card-body p-4">
                                    <h4 className="text-center mb-4" style={{ color: "#e3be85" }}>
                                        🎭 Fun Facts About Michi
                                    </h4>
                                    <div className="row text-center">
                                        <div className="col-md-3 mb-3">
                                            <h1 className="display-4">🍕</h1>
                                            <p className="mb-0 small">Eats pizza for breakfast</p>
                                            <p className="small" style={{ color: "#e3be85" }}>(It's meditation fuel)</p>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <h1 className="display-4">🕯️</h1>
                                            <p className="mb-0 small">Speaks fluent Candle</p>
                                            <p className="small" style={{ color: "#e3be85" }}>(Wax on, wax off)</p>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <h1 className="display-4">🧘</h1>
                                            <p className="mb-0 small">Meditation expert</p>
                                            <p className="small" style={{ color: "#e3be85" }}>(Can nap anywhere)</p>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <h1 className="display-4">🌟</h1>
                                            <p className="mb-0 small">Illumination degree</p>
                                            <p className="small" style={{ color: "#e3be85" }}>(From Pizza University)</p>
                                        </div>
                                    </div>
                                    <p className="text-center mt-3 mb-0 fst-italic">
                                        "I don't always meditate, but when I do, I prefer Dualia candles" - Michi 🕉️
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="text-center mt-5 p-4 rounded-0" style={{ backgroundColor: "#e3be85" }}>
                        <h5 className="fw-bold mb-2">🚨 Candle Emergency Hotline 🚨</h5>
                        <p className="mb-2">
                            If your lamp refuses to turn on or your candle starts giving life advice:
                        </p>
                        <p className="mb-0 fw-bold fs-4">
                            Call: 1-800-ZEN-HELP
                        </p>
                        <p className="mb-0 small fst-italic">
                            (Not a real number, but positive thoughts work just as well)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
