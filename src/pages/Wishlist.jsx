import { useEffect, useState } from 'react';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const removeFromWishlist = (id) => {
        const updateWishlist = wishlist.filter(item => item.id !== id);
        setWishlist(updateWishlist);
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
                                <small> € {item.price}</small>
                                <small>{item.quantity}</small>
                            </div>
                            <button className='btn btn-outline-dark btn_wishlist py-2'>Remove</button>
                            onClick={() => removeFromWishlist(item.id)}

                            <button className='btn btn-outline-dark btn_wishlist py-2'>Buy</button>
                            {/* onClick={()} => non so dove connetterlo */}

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;