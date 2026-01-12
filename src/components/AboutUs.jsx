import Falegname from "../assets/carousel/Falegname.png"
import Miniera from "../assets/carousel/Miniera.png"
import ArtWall from "../assets/immagini_dualia/artWall_black.jpeg"

export default function AboutUs() {

    return (
        <>
            <div class="wave wave-top">
                <svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                    preserveAspectRatio="none">
                    <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <section className="dualia-about">
                <div className="container text-center ">
                    <h2 className="m-5">Design Inspired <br /> by Balance</h2>
                    <p>
                        Dualia was born from the belief that the spaces we live in profoundly influence our well-being. <br />
                        For this reason, we select furnishings that bring calm, harmony,
                        <br />
                        and essential beauty into the homes of those who, like us,
                        believe in the power of simplicity.
                    </p>
                    <div className="row dualia-values">
                        <div className="col-12 col-md-4">
                            <div className="dualia-img">
                                <img src={Miniera} alt="" />
                            </div>
                            <h3>Essenzialità</h3>
                            <p>
                                Ogni pezzo è selezionato per la sua capacità di comunicare senza eccessi.
                                Forme pure che lasciano spazio al respiro.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="dualia-img">
                                <img src={Falegname} alt="" />
                            </div>
                            <h3>Qualità</h3>
                            <p>
                                Materiali naturali, lavorazioni artigianali e attenzione ai dettagli.
                                Oggetti pensati per durare nel tempo.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="dualia-img">
                                <img src={ArtWall} alt="" />
                            </div>
                            <h3>Equilibrio</h3>
                            <p>
                                L’armonia nasce dal dialogo tra gli elementi. Palette ridotte e
                                proporzioni studiate per creare spazi sereni.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="wave wave-bottom">
                <svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                    preserveAspectRatio="none">
                    <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                        fill="currentColor"></path>
                </svg>
            </div>
        </>
    )
}