import SliderPrice from "./SliderPrice";


export default function Searchbar() {

    // rangeOutput.textContent = rangeInput.value;

    // rangeInput.addEventListener('input', function () {
    //     rangeOutput.textContent = this.value;
    // });

    return (
        <>

            <div className="container-fluid pt-3">
                <h5 className="mb-4">Advanced Search</h5>

                <div className="d-flex flex-column g-4">
                    {/* CATEGORY */}
                    <div className="p-2">
                        <label className="form-label">CATEGORY</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>Decorations</option>
                            <option>Lighting</option>
                            <option>Candles and Scents</option>
                            <option>Clock and Frames</option>
                            <option>Forniture</option>
                            <option>Zen Garden</option>
                        </select>
                    </div>

                    {/* COLOR */}
                    <div className="p-2">
                        <label className="form-label">COLOR</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>Black</option>
                            <option>White</option>
                        </select>
                    </div>

                    {/* SALE */}
                    <div className="p-2">
                        <label className="form-label">SALE</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                    {/* PRICE */}
                    <div className="p-2">
                        <label className="form-label">PRICE</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>Increasing</option>
                            <option>Decreasing</option>
                        </select>
                    </div>

                    {/* ORDER */}
                    <div className="p-2">
                        <label className="form-label">ORDER</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>A -> Z</option>
                            <option>Z -> A</option>
                        </select>
                    </div>

                    {/* LATEST PRODUCTS */}
                    <div className="p-2">
                        <label className="form-label">LATEST</label>
                        <select className="form-select border-secondary">
                            <option>-</option>
                            <option>Che devo mette'?</option>
                            <option>non ho capito</option>
                            <option>voglio morire</option>
                            <option>uccidetemi</option>
                            <option>non scherzo</option>
                        </select>
                    </div>

                    <hr />

                    {/* SELETTORE DEL PREZZO */}
                    <SliderPrice />

                </div>

                {/* BOTTONI IN FONDO CHE NON SAPREI COME CHIAMARE :C */}
                <div className="d-flex align-items-center justify-content-between mt-4">

                    <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-dark text-light px-4">Search</button>
                        <button className="btn btn-secondary text-decoration-none">Reset</button>
                    </div>
                </div>
            </div>


        </>
    )
}