import { useState } from "react";
export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <section id="shopping_cart" className="py-5">
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4 className="mb-3"><b>Shopping Cart</b></h4>
                                </div>
                                <div className="col text-end">
                                    3 items
                                </div>
                            </div>
                        </div>

                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt="" />
                                </div>
                                <div className="col">
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col text-decoration-none">
                                    <a href="#">-</a>
                                    <a href="#">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col">
                                    € 44.00 <span className="close">&#10005;</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" alt="" />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>


                                <div className="col">
                                    <button
                                        className="btn btn-plus"
                                        onClick={decrementQuantity}
                                        disabled={quantity === 1}
                                        style={{ border: "none", fontSize: "1.2rem" }}
                                    >
                                        −
                                    </button>
                                    <span className="mx-3 fs-5 fw-bold">{quantity}</span>
                                    <button
                                        className="btn btn-plus"
                                        onClick={incrementQuantity}
                                        style={{ border: "none", fontSize: "1.2rem" }}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="col">
                                    € 44.00 <span className="close">&#10005;</span>
                                </div>
                            </div>
                        </div>

                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2">
                                    <img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" alt="" />
                                </div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col">
                                    <a href="#">-</a>
                                    <a href="#" className="border">1</a>
                                    <a href="#">+</a>
                                </div>
                                <div className="col">
                                    € 44.00 <span className="close">&#10005;</span>
                                </div>
                            </div>
                        </div>

                        <div className="back-to-shop">
                            <a href="#">&larr;</a>
                            <span className="text-muted">Back to shop</span>
                        </div>
                    </div>

                    <div className="col-md-4 summary">
                        <div>
                            <h5 className="mb-3"><b>Summary</b></h5>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: "0" }}>ITEMS 3</div>
                            <div className="col text-right">€ 132.00</div>
                        </div>
                        <form>
                            <p>SHIPPING</p>
                            <select>
                                <option className="text-muted">Standard-Delivery - €5.00</option>
                            </select>
                            <p>GIVE CODE</p>
                            <input id="code" placeholder="Enter your code" />
                        </form>

                        <div
                            className="row"
                            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
                        >
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">€ 137.00</div>
                        </div>

                        <button className="btn">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
