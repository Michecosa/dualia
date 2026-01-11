const supportLinks = [
    { id: 1, name: "Shipping & returns", url: "/" },
    { id: 2, name: "Order tracking", url: "/" },
    { id: 4, name: "Contact", url: "/" },
]

const socialLinks = [
    { id: 1, logo: "bi bi-instagram", url: "#" },
    { id: 2, logo: "bi bi-pinterest", url: "#" },
    { id: 3, logo: "bi bi-spotify", url: "#" }
];

const footerLinks = [
    { id: 1, name: "Legal notice", url: "/" },
    { id: 2, name: "Privacy policy", url: "/" },
    { id: 3, name: "Conditions", url: "/" },
    { id: 4, name: "Terms of service", url: "/" },
    { id: 5, name: "Shipping policy", url: "/" },
    { id: 6, name: "Cookie preferences", url: "/" }
];

export default function Footer() {

    return (
        <footer className="mt-5">
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

                    {/* supporto clienti */}
                    <div className="col-xs-12 col-md-3">
                        <h6>Customer care</h6>
                        <ul className="footer_support list-unstyled">
                            {
                                supportLinks.map((link) => (
                                    <li key={link.id}>
                                        <small className="copyright_content">
                                            <a href={link.url}>{link.name}</a>
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
                                            <a href={link.url}>{link.name}</a>
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
                                        <a href={icon.url}>
                                            <i className={icon.logo}></i>
                                        </a>
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
                                            <a href={link.url}>{link.name}</a>
                                        </small>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* copyright */}
                        <div className="copyright text-center">

                            <small className="copyright_content">© 2026,
                                <a href="/">Dualia  - </a>
                            </small>
                            <small className="copyright_content">
                                <a href="/">Powered by Pilates Team</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}