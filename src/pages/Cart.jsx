export default function Cart() {

    return (
        <>
            <div className="card_custom_cart mt-5">
                <div className="row">
                    <div className="col-md-9 cart">
                        <div className="row">
                            {/* carrello */}
                            <div className="col-8">
                                <h4 className="mt-3 mb-0">Shopping Cart</h4>
                            </div>

                            <div className="col-4 align-self-end text-right text-muted text-end">
                                <span>3 items</span>
                            </div>

                            {/* separatore */}
                            <div className="separator"></div>
                        </div>

                        {/* prodotto */}
                        <div className="row border-bottom">
                            <div className="row py-3 align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" />
                                </div>

                                <div className="col">
                                    <div>Cotton T-shirt</div>
                                </div>
                                <div className="col">
                                    <a href="#">-</a>
                                    <a href="#">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col d-flex">€ 44.00
                                    <button className="close fw-bold">X</button>
                                </div>
                            </div>
                        </div>
                        {/* Bottone torna indietro */}
                        <div>
                            <button className="btn btn-back_to_shop">
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to shop
                            </button>
                        </div>

                    </div>

                    {/* sommario */}
                    <div class="col-md-3 summary">
                        <div>
                            <h4 className="mt-3">Summary</h4>
                        </div>

                        {/* separator */}
                        <div className="separator"></div>

                        <div class="row">
                            <div class="col p-0 mb-4">ITEMS 3</div>
                            <div class="col text-right">€ 132.00</div>
                        </div>

                        {/* form */}
                        <form className="py-3">
                            <p>SHIPPING</p>
                            <select>
                                <option class="text-muted">Standard-Delivery - € 5.00</option>
                            </select>
                            <p>GIVE CODE</p>
                            <input placeholder="Enter your code" />
                        </form>

                        {/* separator */}
                        <div className="separator"></div>

                        <div class="row">
                            <div class="col p-0">TOTAL</div>
                            <div class="col text-right">€ 137.00</div>
                        </div>
                        <button class="btn btn_checkout">CHECKOUT</button>
                    </div>

                </div>
            </div>
        </>
    );
}
