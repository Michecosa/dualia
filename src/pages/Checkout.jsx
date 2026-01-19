import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";
import TermsModal from "../components/TermsModal";

export default function Checkout() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // State per il carrello
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [promotionId, setPromotionId] = useState(null);
  const [shipping, setShipping] = useState(5.0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");

  // Carica il carrello dal localStorage
  useEffect(() => {
    const checkoutInfo = JSON.parse(localStorage.getItem("checkout_data"));

    if (checkoutInfo) {
      setCart(checkoutInfo.cart || []);
      setDiscount(checkoutInfo.discount || 0);
      setPromotionId(checkoutInfo.promotion_id || null);
      setShipping(
        checkoutInfo.shipping !== undefined ? checkoutInfo.shipping : 5.0,
      );
    } else {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }
  }, []);

  // Calcolo del subtotale e totale (sottraendo lo sconto)
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const total = subtotal + shipping - discount;

  async function handlePlaceOrder(e) {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !city ||
      !postalCode ||
      !country ||
      !agreedToTerms
    ) {
      setModalMessage(
        "Please fill all required fields and accept the terms and conditions.",
      );
      setModalType("error");
      setShowModal(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const nameRegex = /^[A-Za-zÀ-ÿ\s']{2,}$/;
    if (!nameRegex.test(firstName)) {
      alert(
        "First Name must be at least 2 characters long and contain only letters.",
      );
      return;
    }

    if (!nameRegex.test(lastName)) {
      alert(
        "Last Name must be at least 2 characters long and contain only letters.",
      );
      return;
    }

    const pcRegex = /^[0-9]{5}$/;
    if (!pcRegex.test(postalCode)) {
      alert("Postal Code must be exactly 5 digits.");
      return;
    }

    if (city.trim().length < 2 || country.trim().length < 2) {
      alert("City and Country names are too short.");
      return;
    }

    const orderData = {
      firstName,
      lastName,
      email,
      street,
      houseNumber,
      city,
      state,
      postalCode,
      country,
      promotion_id: promotionId,
      shipping_cost: shipping,
      items: cart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/orders",
        orderData,
      );

      if (response.data.ok) {
        localStorage.removeItem("cart");
        localStorage.removeItem("checkout_data");

        setTimeout(() => {
          setModalMessage("Order confirmed! Processing your order...");
          setModalType("success");
          setShowModal(true);
        }, 2000);

        setTimeout(() => {
          navigate("/thank-you");
        }, 6000);
      }
    } catch (error) {
      console.error("Errore durante l'ordine:", error);
      const errorMessage =
        error.response?.data?.error ||
        "Si è verificato un errore durante l'invio dell'ordine.";
      setModalMessage(errorMessage);
      setModalType("error");
      setShowModal(true);
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handlePlaceOrder}>
            {/* BILLING INFORMATION */}
            <div className="card mb-4 rounded-0">
              <div className="card-body">
                <h4 className="card-title mb-4">Billing Information</h4>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* SHIPPING ADDRESS */}
            <div className="card mb-4 rounded-0">
              <div className="card-body mb-3">
                <h4 className="card-title mb-4">Shipping Address</h4>

                <div className="row mb-3">
                  <div className="col-md-8 mb-3 mb-md-0">
                    <label className="form-label">Street *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">House Number</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={houseNumber}
                      onChange={(e) => setHouseNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State/Province</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">Postal Code *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country *</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="col-md-4 mb-4">
          <div className="card h-100  rounded-0">
            <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>

              {/* Lista prodotti */}
              {cart.length === 0 ? (
                <p className="text-muted">No items in cart</p>
              ) : (
                <div className="mb-3">
                  {cart.map((item) => (
                    <div
                      key={item.product_id}
                      className="d-flex justify-content-between mb-2"
                    >
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>€ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span>€ {subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span>€ {shipping.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>Discount</span>
                  <span>- € {discount.toFixed(2)}</span>
                </div>
              )}

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <strong>TOTAL</strong>
                <strong>€ {total.toFixed(2)}</strong>
              </div>

              {/* TERMINI E CONDIZIONI CON MODALE */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  required
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="terms">
                  I accept
                </label>

                <button
                  type="button"
                  className="btn btn-link p-0 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#termsModal"
                >
                  the terms and conditions
                </button>
              </div>
              {/* FINE TERMININI E CONDIZIONI */}

              <button
                type="submit"
                className="btn btn-dualia-dark-checkout w-100 py-2"
                onClick={handlePlaceOrder}
              >
                <i className="bi bi-check-circle me-2"></i>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/cart" className="btn btn-back-to__ mb-4 rounded-0">
        <i className="bi bi-arrow-left me-2"></i>
        Back to Cart
      </Link>

      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
          type={modalType}
        />
      )}

      <TermsModal />
    </div>
  );
}
