import Card from "./Card";
import img1 from "../assets/immagini_dualia/porta_incenso_black.jpeg";
import img2 from "../assets/immagini_dualia/luxury_ashtray_black.jpeg";
import img3 from "../assets/immagini_dualia/floor_lamp_black.jpeg";
import img4 from "../assets/immagini_dualia/giardino_zen_black.jpeg";

export default function OurProducts() {
  return (
    <>
      <div className="product-container mt-5">
        <h1 className="mb-3">Our Products</h1>
        <div className="row">
          <Card img={img1} title="Cascading incense holder" price="€59,99" />
          <Card img={img2} title="Luxury ashtray" price="€999,99" />
          <Card img={img3} title="Floor lamp" price="€199,99" />
          <Card img={img4} title="Zen garden" price="€19,99" />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-dualia-dark">View all</button>
        </div>
      </div>
    </>
  );
}
