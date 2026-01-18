import { useEffect, useState } from 'react';
import { getWishlist, removeFromWishlist } from '../wishlistUtils';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        setWishlist(getWishlist());
    }, []);

    const handleRemove = (productId) => {
        removeFromWishlist(productId);
        setWishlist(getWishlist());
    };

    const handleAddToCart = (item) => {
        // Prendi il carrello dal localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Cerca se il prodotto esiste già
        const existingItem = cart.find(cartItem => cartItem.product_id === item.product_id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        // Salva nel localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.name} added to cart!`);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Your Wishlist</h2>

            {wishlist.length === 0 ? (
                <div className="text-center py-5">
                    <p className="lead">Your wishlist is empty.</p>
                    <Link to="/products" className="btn btn-dark mt-3">
                        Browse Products
                    </Link>
                </div>
            ) : (
                <div className="row">
                    {wishlist.map(item => (
                        <div key={item.product_id} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 rounded-0">
                                <Link to={`/products/${item.product_id}`}>
                                    <img
                                        src={item.url_image}
                                        className="card-img-top rounded-0"
                                        alt={item.name}
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-muted">€{item.price}</p>

                                    <div className="mt-auto d-flex gap-2">
                                        {/* Bottone Shopping Bag - Aggiungi al carrello */}
                                        <button
                                            className="btn btn-add-to-cart btn-dualia-dark rounded-0 flex-grow-1"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            <i className="bi bi-bag me-2"></i>
                                            Add to Cart
                                        </button>

                                        {/* Bottone Cuore - Rimuovi dalla wishlist */}
                                        <button
                                            className="btn btn-outline-dark btn_wishlist py-2 rounded-0"
                                            onClick={() => handleRemove(item.product_id)}
                                            title="Remove from wishlist"
                                        >
                                            <i className="bi bi-heart-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;