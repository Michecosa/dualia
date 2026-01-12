import { useParams } from "react-router-dom";
import { useState } from 'react'
import img1 from "../assets/immagini_dualia/porta_incenso_black.jpeg";
import img2 from "../assets/immagini_dualia/luxury_ashtray_black.jpeg";
import img3 from "../assets/immagini_dualia/floor_lamp_black.jpeg";
import img4 from "../assets/immagini_dualia/giardino_zen_black.jpeg";

const products = [
    {
        id: "cascading-incense-holder",
        title: "Cascading incense holder",
        price: "€59,99",
        image: img1,
        description: "A minimalist cascading incense holder that creates a mesmerizing waterfall effect. Handcrafted with precision for a balanced meditation experience.",
        dimensions: "15cm x 10cm x 8cm"
    },
    {
        id: "luxury-ashtray",
        title: "Luxury ashtray",
        price: "€999,99",
        image: img2,
        description: "An exclusive luxury ashtray combining elegant design with functionality. Perfect for those who appreciate refined aesthetics.",
        dimensions: "20cm x 20cm x 5cm"
    },
    {
        id: "floor-lamp",
        title: "Floor lamp",
        price: "€199,99",
        image: img3,
        description: "Contemporary floor lamp that brings warmth and style to any space. Adjustable brightness for the perfect ambiance.",
        dimensions: "150cm height"
    },
    {
        id: "zen-garden",
        title: "Zen garden",
        price: "€19,99",
        image: img4,
        description: "A desktop zen garden for moments of tranquility. Perfect for meditation and stress relief.",
        dimensions: "25cm x 18cm x 5cm"
    }
];

export default function ProductDetail() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const product = products.find(p => p.id === id);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return (
            <div className="container my-5">
                <h2>Product not found</h2>
            </div>
        );
    }

    const [favorite, setFavorite] = useState(false)

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="mb-3">{product.title}</h1>
                    <h3 className="text-muted mb-4">{product.price}</h3>
                    <p className="lead mb-4">{product.description}</p>

                    <p className="mb-4">
                        <strong>Dimensions:</strong> {product.dimensions}
                    </p>

                    <div className="mb-4 d-flex align-items-center">
                        <strong className="me-3">Quantity:</strong>
                        <button
                            className="btn"
                            onClick={decrementQuantity}
                            disabled={quantity === 1}
                            style={{ border: 'none', fontSize: '1.2rem' }}
                        >
                            −
                        </button>
                        <span className="mx-3 fs-5 fw-bold">{quantity}</span>
                        <button
                            className="btn"
                            onClick={incrementQuantity}
                            style={{ border: 'none', fontSize: '1.2rem' }}
                        >
                            +
                        </button>
                    </div>

                    <button className="btn btn-dualia-dark rounded-1 me-2">Add to Cart</button>
                    <button className="btn btn-outline-dark py-2"
                        onClick={() => setFavorite(!favorite)}>
                        <i className={`bi ${favorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                    </button>

                </div>
            </div>
        </div>
    );
}
