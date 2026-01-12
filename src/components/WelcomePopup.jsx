import { useState, useEffect } from 'react';

export default function WelcomePopup() {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    
     useEffect(() => {
         // Mostra il popup solo se non è mai stato visto
          if (!localStorage.getItem('welcomeSeen')) {
          setShow(true);
         }
      }, []);
    
    
 const handleClose = () => {
         setShow(false);
         localStorage.setItem('welcomeSeen', 'true');
     };
    
     const handleSubmit = (e) => {
        e.preventDefault();
         console.log('Email', email);
         alert('Thanks for Subscribing')
         handleClose();
     };

if (!show) return null;

return (
    <>
        <div className="modal-backdrop fade show" onClick={handleClose}></div>
        <div className="modal fade show d-block" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Welcome to Dualia</h5>
                        <button className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Objects designed to slow time.Discover pieces created to bring balance, into your space.</p>
                        <p>Subscribe to get exclusive offers!</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Your email goes here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-dark w-100">
                                I WANT 10% OFF
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}