import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react"; //useEffect l'ho rimosso
import { useCart } from "../components/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  // const [cart, setCart] = useState([]);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllOfProduct,
    clearCart,
  } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountData, setDiscountData] = useState({
    valid: false,
    amount: 0,
    promotion_id: null,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const resetDiscount = () => {
    setDiscountData({ valid: false, amount: 0, promotion_id: null });
    setPromoCode("");
  };

  // Carica il carrello dal localStorage
  /*useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);*/

  // Funzione per aumentare la quantità
  /*const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product_id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    resetDiscount();
  };

  // Funzione per diminuire la quantità
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product_id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    resetDiscount();
  };*/
  // Questo aggiorna l'Header all'istante
  const increaseQuantity = (product) => {
    addToCart(product);
    resetDiscount();
  };

  const decreaseQuantity = (productId) => {
    removeFromCart(productId);
    resetDiscount();
  };

  // Funzione per rimuovere un prodotto
  /*const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    resetDiscount();
  };*/
  // Rimuove tutte le istanze di quel prodotto
  /*const removeItem = (productId) => {
    const itemsToRemove = cartItems.filter((item) => item.product_id === productId);
    itemsToRemove.forEach(() => removeFromCart(productId));
    resetDiscount();
  };*/

  const removeItem = (productId) => {
    removeAllOfProduct(productId);
    resetDiscount();
  };

  const handleEmptyCart = () => {
    clearCart();
    resetDiscount();
  };

  const groupedCart = cartItems.reduce((acc, item) => {
    const found = acc.find((i) => i.product_id === item.product_id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calcola il subtotale
  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price || 0),
    0,
  );

  // SOGLIA PER LA SPEDIZIONE GRATUITA
  const free_shipping_threshold = 999.99;

  const shipping =
    subtotal >= free_shipping_threshold || subtotal === 0 ? 0 : 5.0;

  const total = subtotal + shipping - discountData.amount;
  // Conteggio totale degli oggetti
  const itemsCount = cartItems.length;

  const handleCheckout = () => {
    const checkoutData = {
      cart: groupedCart,
      subtotal,
      shipping,
      discount: discountData.amount,
      promotion_id: discountData.promotion_id,
      total: total,
    };
    localStorage.setItem("checkout_data", JSON.stringify(checkoutData));
    navigate("/checkout");
  };

  //const itemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleApplyDiscount = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch(
        "http://localhost:3000/api/discounts/validate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ promo_code: promoCode, subtotal: subtotal }),
        },
      );
      const data = await response.json();
      if (response.ok && data.valid) {
        setDiscountData({
          valid: true,
          amount: parseFloat(data.discount),
          promotion_id: data.discount_id,
        });
      } else {
        setErrorMessage(data.error || "Invalid code");
        setDiscountData({ valid: false, amount: 0, promotion_id: null });
      }
    } catch (error) {
      setErrorMessage("Connection error");
    }
  };

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
            {groupedCart.length === 0 ? (
              <div className="text-center py-5">
                <p className="lead">Ups! Your cart is empty.</p>
              </div>
            ) : (
              // Mappa tutti i prodotti nel carrello
              groupedCart.map((item, index) => (
                <div
                  key={`cart-item-${item.product_id}-${index}`}
                  className="row border-bottom py-3 align-items-center"
                >
                  {/* immagine */}
                  <div className="col-4 col-sm-3">
                    <img
                      className="img rounded-0"
                      src={item.url_image}
                      alt={item.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* info prodotto */}
                  <div className="col-8 col-sm-9">
                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                      {/* prodotto */}
                      <div className="d-flex align-items-center">
                        <span className="display_res d-none me-3 fw-medium">
                          Product:
                        </span>
                        <span className="ms-2">{item.name}</span>
                      </div>

                      {/* quantità */}
                      <div className="d-flex align-items-center">
                        <span className="display_res d-none me-2 fw-medium">
                          Quantity:
                        </span>
                        <button
                          className="btn btn-sm btn_quantity"
                          onClick={() => decreaseQuantity(item.product_id)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn_quantity"
                          onClick={() => increaseQuantity(item)}
                        >
                          +
                        </button>
                        <button
                          className="close_mobile d-none fw-bold"
                          onClick={() => removeItem(item.product_id)}
                        >
                          X
                        </button>
                      </div>

                      {/* prezzo */}
                      <div className="cart_price d-flex align-items-center justify-content-between gap-2">
                        <span className="display_res d-none me-4 fw-medium">
                          Price:
                        </span>
                        <span className="ms-3">
                          € {parseFloat(item.price).toFixed(2)}
                        </span>
                        <button
                          className="close fw-bold"
                          onClick={() => removeItem(item.product_id)}
                        >
                          X
                        </button>
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
            <form className="py-3" onSubmit={handleApplyDiscount}>
              <p>SHIPPING</p>
              <select disabled className="mb-3">
                <option className="text-muted">
                  {shipping === 0
                    ? "Free Delivery - € 0.00"
                    : `Standard-Delivery - € ${shipping.toFixed(2)}`}
                </option>
              </select>

              {subtotal > 0 && subtotal < free_shipping_threshold && (
                <small className="text-muted fw-light d-block mb-5">
                  Add{" "}
                  <span className="fw-bold">
                    € {(free_shipping_threshold - subtotal).toFixed(2)}
                  </span>{" "}
                  more for FREE shipping!
                </small>
              )}
              {subtotal >= free_shipping_threshold && (
                <small className="text-muted fw-normal d-block  mb-5">
                  Your shipping is free!
                </small>
              )}

              <p>GIVE CODE</p>
              <div className="d-flex gap-2">
                <input
                  placeholder="Enter your code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit" className="btn btn-dark btn-sm rounded-0">
                  APPLY
                </button>
              </div>
              {errorMessage && (
                <small className="text-muted fw-light d-block mt-1">
                  {errorMessage}
                </small>
              )}
              {discountData.valid && (
                <small className="d-block fw-light mt-1">
                  Discount: -€ {discountData.amount.toFixed(2)}
                </small>
              )}
            </form>

            <div className="separator"></div>

            {discountData.valid && (
              <div className="row text-muted mb-2">
                <div className="col fw-light p-0">discount</div>
                <div className="col fw-light text-right">
                  -€ {discountData.amount.toFixed(2)}
                </div>
              </div>
            )}

            <div className="row">
              <div className="col p-0">TOTAL</div>
              <div className="col text-right">€ {total.toFixed(2)}</div>
            </div>
            <button className="btn btn_checkout" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-center">
        {/* Bottone torna indietro */}
        <Link
          to="/products"
          className="btn btn-back-to__ rounded-0 m-4"
          onClick={() => navigate("/products")}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Shop
        </Link>
        {/* Bottone svuota carrello */}
        {cartItems.length > 0 && (
          <button
            className="btn btn-cart  rounded-0 m-4"
            onClick={handleEmptyCart}
          >
            <i className="bi bi-trash me-2"></i>
            Remove all products
          </button>
        )}
      </div>
    </>
  );
}
