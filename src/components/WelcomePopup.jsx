import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Mostra il popup solo se non è mai stato visto
    if (!localStorage.getItem("welcomeSeen")) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("welcomeSeen", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/emails/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      }

      alert("Thanks for subscribing!");
      handleClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={handleClose}></div>
      <div className="modal fade show d-block" style={{ zIndex: 1050 }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <h4 className="modal-title">Welcome to Dualia</h4>
              <button className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <p className="fs-2 text-center">
                Sign up for updates on new releases.
              </p>
              <p className="fs-5 text-center">
                Promise not to blow up your inbox
              </p>
              <p className="text-center mb-4">Get 10% off your first order</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your email goes here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-dark w-100 rounded-5">
                  Unlock 10% off
                </button>
              </form>
              <small className="d-flex justify-content-center mb-2 mt-3 text-secondary">
                Discount may or may not exist
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
