import { Link } from "react-router-dom";

const exploreLinks = [
    { id: 1, name: "Products" },
    { id: 2, name: "Promotions" },
    { id: 4, name: "About us" },
]

const supportLinks = [
    { id: 1, name: "Shipping & returns" },
    { id: 2, name: "Order tracking" },
    { id: 4, name: "Contact" },
]

const socialLinks = [
    { id: 1, logo: "bi bi-instagram" },
    { id: 2, logo: "bi bi-pinterest" },
    { id: 3, logo: "bi bi-spotify" }
];

const footerLinks = [
    { id: 1, name: "Legal notice" },
    { id: 2, name: "Privacy policy" },
    { id: 3, name: "Conditions" },
    { id: 4, name: "Terms of service" },
    { id: 5, name: "Shipping policy" },
    { id: 6, name: "Cookie preferences" }
];

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* newsletter */}
                    <div className="footer_newsletter col-xs-12 col-md-4">
                        <h6 className="intestazione_newsletter">Newsletter</h6>
                        <p>Occasional notes about light, time and space.</p>

                        <form className="newsletter_form d-flex align-items-center gap-2">
                            <input
                                type="email"
                                className="form-control newsletter_input"
                                placeholder="Your email"
                                required />
                            <button className="btn btn-dark btn_newsletter" type="submit">Subscribe</button>
                        </form>
                    </div>

                    {/* esplora */}
                    <div className="col-xs-12 col-md-3">
                        <h6>Explore</h6>
                        <ul className="footer_support list-unstyled">
                            {
                                exploreLinks.map((link) => (
                                    <li key={link.id}>
                                        <small className="copyright_content">
                                            <Link to="/">{link.name}</Link>
                                        </small>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* supporto clienti */}
                    <div className="col-xs-12 col-md-3">
                        <h6>Customer care</h6>
                        <ul className="footer_support list-unstyled">
                            {
                                supportLinks.map((link) => (
                                    <li key={link.id}>
                                        <small className="copyright_content">
                                            <Link to="/">{link.name}</Link>
                                        </small>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* icone social */}
                    <div className="col-xs-12 col-md-2">
                        <h6>Follow</h6>
                        <ul className="footer_social list-unstyled">
                            {
                                socialLinks.map((icon) => (
                                    <li key={icon.id}>
                                        <Link to="/">
                                            <i className={icon.logo}></i>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="separatore mb-4">
                    </div>

                    {/* policy */}
                    <div className="footer_copyright col-12">
                        <ul className="footer_policy list-unstyled d-flex">
                            {
                                footerLinks.map((link) => (
                                    <li key={link.id}>
                                        <small className="copyright_content">
                                            <Link to="#">{link.name}</Link>
                                        </small>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* copyright */}
                        <div className="copyright text-center">

                            <small className="copyright_content">© 2026,
                                <Link to="#">Dualia  - </Link>
                            </small>
                            <small className="copyright_content">
                                <Link to="#">Powered by Pilates Team</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}