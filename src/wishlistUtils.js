export const getWishlist = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
}

//salva la wishlist nel localStorage
export const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

//aggiunge il prodotto alla wishlist
export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    const exists = wishlist.find(p => p.product_id === product.product_id);

    if (!exists) {
        wishlist.push(product)
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
};

// rimuove un prodotto dalla wishlist
export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    const newWishlist = wishlist.filter(p => p.product_id !== productId)
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
};

// controlla se un prodotto è nella wishlist
export const isInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.some(p => p.product_id === productId);
};