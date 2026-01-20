import cerchio from "../assets/logo-oro.png"
import cornice from "../assets/cornice-oro.png"

export default function LogoAnimation() {

    return (

        <>
            <div className="vh-100 w-100 bg-black d-flex align-items-center justify-content-center flex-column" style={{ opacity: "0.75" }}>
                <div className="logo-animation">
                    <img id="cornice" src={cornice} alt="" className="" />
                    <img id="cerchio" src={cerchio} alt="" className="" />
                </div>
                <h5 className="text-center mt-3" style={{ color: "#e3be85" }}>Payment in progress...</h5>
            </div>

        </>
    )
}
