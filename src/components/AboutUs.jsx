import Falegname from "../assets/carousel/Falegname.png"
import Miniera from "../assets/carousel/Miniera.png"
import ArtWall from "../assets/immagini_dualia/artWall_black.jpeg"

export default function AboutUs() {
    return (
        <>
            <div className="wave wave-top">
                <svg className="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                    preserveAspectRatio="none">
                    <path className="wavePath-haxJK1 animationPaused-2hZ4IO"
                        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <section className="dualia-about">
                <div className="container text-center">
                    <h1 className="mt-5 mb-3">Design Inspired <br /> by Balance</h1>
                    <div className="d-flex justify-content-center">
                        <p className="p-sub">
                            Dualia was born from the belief that the spaces we live in profoundly influence our well-being. <br />
                            For this reason, we select furnishings that bring calm, harmony,
                            <br />
                            and essential beauty into the homes of those who, like us,
                            believe in the power of simplicity.
                        </p>
                    </div>
                    <div className="row dualia-values">
                        <div className="col-12 col-lg-4">
                            <div className="dualia-img">
                                <img src={Miniera} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>Essentiality</h3>
                                <p className="p-home">
                                    Every piece is selected for its ability to communicate without excess.
                                    Pure forms that leave room to breathe.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="dualia-img">
                                <img src={Falegname} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>Quality</h3>
                                <p className="p-home">
                                    Natural materials, craftsmanship, and attention to detail.
                                    Objects designed to last over time.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="dualia-img">
                                <img src={ArtWall} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>Balance</h3>
                                <p className="p-home">
                                    Harmony is born from the dialogue between elements. Minimal palettes
                                    and carefully studied proportions to create serene spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="wave wave-bottom">
                <svg className="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                    preserveAspectRatio="none">
                    <path className="wavePath-haxJK1 animationPaused-2hZ4IO"
                        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="container pb-5 mb-5">
                <h2 className="text-center p-5">
                    Our Promise
                </h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="border p-4 h-100 d-flex flex-column justify-content-center">
                            <h3>Free Shipping</h3>
                            <p className="text-muted mb-0">Delivery is on us for all orders over €999.99</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-4 h-100 d-flex flex-column justify-content-center">
                            <h3>Easy Returns</h3>
                            <p className="text-muted mb-0">14 days to change your mind. Simple and fast return process.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-4 h-100 d-flex flex-column justify-content-center">
                            <h3>Secure Payments</h3>
                            <p className="text-muted mb-0">Protected and encrypted transactions for your peace of mind.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-4 h-100 d-flex flex-column justify-content-center">
                            <h3>Dedicated Support</h3>
                            <p className="text-muted mb-0">A team ready to help you choose the right furniture for your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}