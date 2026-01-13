export const getwishlist = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
}

//salva la wishlist nel localStorage
export const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

//aggiunge il prodotto alla wishlist
export const addToWishList = (product) => {
    const wishlist = getwishlist();
    const exits = wishlist.find(p => p.product_id === product.product_id);

    if(!exists) {
        wishlist.push(product)
        localStorage.setItem("wishlist", JASON.stringify(wishlist));
    }
};

// rimuove un prodotto dalla wishlist
export const removeFromWishlist = (productId) => {
    const wishlist = getwishlist();
    const newWishlist = wishlist.filter(p => p.product_id !== productId)
    localStorage.setItem("wishlist", JASON.stringify(newWishlist));
};

// controlla se un prodotto è nella wishlist
export const isInWishList = (productId) => {
    const wishlist = getwishlist();
    return wishlist.some(p => p.product_id === productId);
};