import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { addToWishlist, removeFromWishlist, isInWishlist } from "../wishlistUtils";


export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setFavorite(isInWishlist(res.data.product_id));
                setLoading(false);
            })
            .catch(() => {
                setProduct(null);
                setLoading(false);
            });
    }, [id]);

    const toggleWishlist = () => {
        if (favorite) {
            removeFromWishlist(product.product_id)
            setFavorite(false);
        } else {
            addToWishlist(product);
            setFavorite(true);
        }
    };

    const handleAddToCart = () => {
        // Prendi il carrello dal localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Cerca se il prodotto esiste già
        const existingItem = cart.find(item => item.product_id === product.product_id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                product_id: product.product_id,
                name: product.name,
                price: product.price,
                url_image: product.url_image,
                quantity: quantity
            });
        }

        // Salva nel localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${quantity} x ${product.name} added to cart!`);
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    if (loading) {
        return (
            <div className="container my-5">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container my-5">
                <h2>Product not found</h2>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img
                        src={product.url_image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ width: "100%", objectFit: "cover" }} />
                </div>
                <div className="col-lg-6">
                    <h1 className="mb-3">{product.name}</h1>
                    {/* <h3 className="text-muted mb-4">€{product.price}</h3> */}
                    <h3 className="text-muted mb-4">
                        {product.price < product.full_price
                            ? (<><strong id="scontato">{product.price}€</strong><s className="ms-3">{product.full_price}€</s></>)
                            : product.price + "€"
                        }
                    </h3>
                    <p className="lead mb-4">{product.description}</p>

                    <p className="mb-4">
                        <strong>Dimensions:</strong> {product.dimensions}</p>

                    <div className="mb-4 d-flex align-items-center">
                        <strong className="me-3">Quantity:</strong>

                        <button
                            className="btn btn-plus"
                            onClick={decrementQuantity}
                            disabled={quantity === 1}
                            style={{ border: "none", fontSize: "1.2rem" }}> − </button>

                        <span className="mx-3 fs-5 fw-bold">{quantity}</span>

                        <button
                            className="btn btn-plus"
                            onClick={incrementQuantity}
                            style={{ border: "none", fontSize: "1.2rem" }}> + </button>
                    </div>

                    <button className="btn btn-dualia-dark rounded-1 me-2" onClick={handleAddToCart}>
                        <i className="bi bi-bag me-2"></i>
                        Add to Cart
                    </button>

                    <button className="btn btn-outline-dark btn_wishlist py-2"
                        onClick={toggleWishlist}>
                        <i className={`bi ${favorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
