import cerchio from "../assets/Cerchio.png"
import cornice from "../assets/Cornice.png"

export default function LogoAnimation() {

    return (

        <>
            <div className="logo-animation">
                <img id="cornice" src={cornice} alt="" />
                <img id="cerchio" src={cerchio} alt="" />
            </div>

        </>
    )
}
