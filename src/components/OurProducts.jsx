import { Link } from "react-router-dom";
import Card from "./Card";
import img1 from "../assets/immagini_dualia/porta_incenso_black.jpeg";
import img2 from "../assets/immagini_dualia/luxury_ashtray_black.jpeg";
import img3 from "../assets/immagini_dualia/floor_lamp_black.jpeg";
import img4 from "../assets/immagini_dualia/giardino_zen_black.jpeg";

export default function OurProducts() {
  return (
    <>
      <div className="product-container my-5">
        <h1 className="mb-3">Our Products</h1>
        <div className="row">
          <Card
            img={img1}
            title="Incense Burner black"
            price="157.99"
            path="/products/incense-burner-black"
          />
          <Card
            img={img2}
            title="Ashtray Black"
            price="814.99"
            path="/products/ashtray-black"
          />
          <Card
            img={img3}
            title="Floor Lamp black"
            price="1119.99"
            path="/products/floor-lamp-black"
          />
          <Card
            img={img4}
            title="Zen Garden black"
            price="69.99"
            path="/products/zen-garden-black"
          />
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Link to="/products">
            <button className="btn btn-dualia-dark">View all</button>
          </Link>
        </div>
      </div>
    </>
  );
}
