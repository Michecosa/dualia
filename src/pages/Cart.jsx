import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Carica il carrello dal localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Funzione per aumentare la quantità
    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.product_id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Funzione per diminuire la quantità
    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.product_id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Funzione per rimuovere un prodotto
    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.product_id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Calcola il subtotale
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.00;
    const total = subtotal + shipping;
    const itemsCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <>
            <div className="card_custom_cart">
                <div className="row">
                    <div className="col-md-9 cart">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="mt-3 mb-0">Shopping Cart</h4>
                            </div>

                            <div className="col-4 align-self-end text-right text-muted text-end">
                                <span>{itemsCount} items</span>
                            </div>

                            <div className="separator"></div>
                        </div>

                        {/* Mostra messaggio se il carrello è vuoto */}
                        {cart.length === 0 ? (
                            <div className="text-center py-5">
                                <p className="lead">Ups! Your cart is empty.</p>
                            </div>
                        ) : (
                            // Mappa tutti i prodotti nel carrello
                            cart.map(item => (
                                <div key={item.product_id} className="row border-bottom py-3 align-items-center">

                                    {/* immagine */}
                                    <div className="col-4 col-sm-3">
                                        <img
                                            className="img rounded-1"
                                            src={item.url_image}
                                            alt={item.name}
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                        />
                                    </div>

                                    {/* info prodotto */}
                                    <div className="col-8 col-sm-9">
                                        <div className="d-flex flex-column flex-sm-row justify-content-between">

                                            {/* prodotto */}
                                            <div className="d-flex align-items-center">
                                                <span className="display_res d-none me-3 fw-medium">Product:</span>
                                                <span className="ms-1">{item.name}</span>
                                            </div>

                                            {/* quantità */}
                                            <div className="d-flex align-items-center">
                                                <span className="display_res d-none me-2 fw-medium">Quantity:</span>
                                                <button className="btn btn-sm btn_quantity" onClick={() => decreaseQuantity(item.product_id)}>-</button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button className="btn btn-sm btn_quantity" onClick={() => increaseQuantity(item.product_id)}>+</button>
                                                <button className="close_mobile d-none fw-bold" onClick={() => removeItem(item.product_id)}>X</button>
                                            </div>

                                            {/* prezzo */}
                                            <div className="cart_price d-flex align-items-center justify-content-between gap-2">
                                                <span className="display_res d-none me-4 fw-medium">Price:</span>
                                                <span className="ms-1">€ {(item.price * item.quantity).toFixed(2)}</span>
                                                <button className="close fw-bold" onClick={() => removeItem(item.product_id)}>X</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* sommario */}
                    <div className="col-md-3 summary">
                        <div>
                            <h4 className="mt-3">Summary</h4>
                        </div>

                        <div className="separator"></div>

                        <div className="row">
                            <div className="col p-0 mb-4">ITEMS {itemsCount}</div>
                            <div className="col text-right">€ {subtotal.toFixed(2)}</div>
                        </div>

                        {/* form */}
                        <form className="py-3">
                            <p>SHIPPING</p>
                            <select>
                                <option className="text-muted">Standard-Delivery - € {shipping.toFixed(2)}</option>
                            </select>
                            <p>GIVE CODE</p>
                            <input placeholder="Enter your code" />
                        </form>

                        <div className="separator"></div>

                        <div className="row">
                            <div className="col p-0">TOTAL</div>
                            <div className="col text-right">€ {total.toFixed(2)}</div>
                        </div>
                        <button className="btn btn_checkout" onClick={() => navigate("/checkout")}>CHECKOUT</button>
                    </div>                </div>
            </div>

            {/* Bottone torna indietro */}
            <div>
                <button className="btn btn-back_to_shop" onClick={() => navigate("/products")}>
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to shop
                </button>
            </div>
        </>
    );
}
