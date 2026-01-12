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
        features: ["Handcrafted ceramic", "Creates waterfall effect", "Includes 20 incense cones", "Easy to clean"],
        dimensions: "15cm x 10cm x 8cm"
    },
    {
        id: "luxury-ashtray",
        title: "Luxury ashtray",
        price: "€999,99",
        image: img2,
        description: "An exclusive luxury ashtray combining elegant design with functionality. Perfect for those who appreciate refined aesthetics.Lorem10kdfhds;fdsj;gfahf;asdkhgaghsdsdo;ighDSF ;FOIHEWI FHSE;E EHSOI;FH owi;fhoesifh so;dFH;sdfh;so HFS;odhf sdhF;OIS ALGADJLA/G FVE;ITHV;EOT HERIOT;HREIO THA;EOHT;EROTH AER;OITHA;EROITH ;REOTHRE;O THER;OTIHREOGTHAE;ROHT",
        features: ["Premium materials", "Modern design", "Easy maintenance", "Gift box included"],
        dimensions: "20cm x 20cm x 5cm"
    },
    {
        id: "floor-lamp",
        title: "Floor lamp",
        price: "€199,99",
        image: img3,
        description: "Contemporary floor lamp that brings warmth and style to any space. Adjustable brightness for the perfect ambiance.",
        features: ["Adjustable brightness", "Energy efficient LED", "Minimalist design", "Stable base"],
        dimensions: "150cm height"
    },
    {
        id: "zen-garden",
        title: "Zen garden",
        price: "€19,99",
        image: img4,
        description: "A desktop zen garden for moments of tranquility. Perfect for meditation and stress relief.",
        features: ["Natural sand", "Wooden rake included", "Decorative stones", "Compact size"],
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

                    <h5 className="mb-3">Features:</h5>
                    <ul className="mb-4">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <p className="mb-4">
                        <strong>Dimensions:</strong> {product.dimensions}
                    </p>

                    <div className="mb-4">
                        <h5 className="mb-3">Quantity:</h5>
                        <div className="d-flex align-items-center">
                            <button
                                className="btn"
                                onClick={decrementQuantity}
                                disabled={quantity === 1}
                                style={{ border: 'none', fontSize: '1.5rem' }}
                            >
                                −
                            </button>
                            <span className="mx-4 fs-4 fw-bold">{quantity}</span>
                            <button
                                className="btn"
                                onClick={incrementQuantity}
                                style={{ border: 'none', fontSize: '1.5rem' }}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button className="btn btn-dualia-dark btn-lg me-3">Add to Cart</button>
                    <button className="btn btn-outline-dark btn-lg">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
}
