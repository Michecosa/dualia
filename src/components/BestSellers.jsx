import Card from "./Card";
import img1 from "../assets/immagini_dualia/clessidra_white.jpeg";
import img2 from "../assets/immagini_dualia/lanterna_black.jpeg";
import img3 from "../assets/immagini_dualia/diffusore_black.jpeg";
import img4 from "../assets/immagini_dualia/orologio_black.jpeg";
import img5 from "../assets/immagini_dualia/luxury_ashtray_white.jpeg";
import img6 from "../assets/immagini_dualia/lampada_white.jpeg";

export default function BestSellers() {
  return (
    <>
      <div className="product-container my-5">
        <h1 className="mb-3">Best Sellers</h1>
        <div className="row">
          <Card
            img={img1}
            title="Hourglass white"
            price="324.99"
            path="/products/hourglass-white"
            bestSellers="dualia-card-20"
          />
          <Card
            img={img2}
            title="Lantern black"
            price="304.99"
            path="/products/lantern-black"
            bestSellers="dualia-card-20"
          />
          <Card
            img={img3}
            title="Diffuser black"
            price="72.99"
            path="/products/diffuser-black"
            bestSellers="dualia-card-20"
          />
          <Card
            img={img4}
            title="Clock black"
            price="439.99"
            path="/products/clock-black"
            bestSellers="dualia-card-20"
          />
          <Card
            img={img5}
            title="Ashtray white"
            price="814.99"
            path="/products/ashtray-white"
            bestSellers="dualia-card-20"
          />
          <Card
            img={img6}
            title="Lamp White"
            price="409.99"
            path="/products/lamp-white"
            bestSellers="dualia-card-20"
          />
        </div>
      </div>
    </>
  );
}
