import { useEffect, useState } from 'react';
import { getwishlist, removeFromWishlist } from '../wishlistUtils';
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const setWishlist(getwishlist());
    }, []);

    const handleRemove = (productId) => {
        removeFromWishlist(productId);
        setWishlist(getWishlist); //ricarica la lista
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Your WishList</h2>

            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul className="list-group">

                    {wishlist.map(item => (
                        <li
                            key={item.id}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{item.name}</strong>
                                - € {item.price}
                                <small>{item.quantity}</small>
                            </div>
                            <div>

                                <button className='btn btn-outline-dark btn_wishlist py-2'>Remove
                                onClick={() => handleRemove(item.id)}
                                </button>
                                <Link
                                    to={`/products/${item.productt_id}`}
                                    className="btn btn-outline-dark">View
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Wishlist;