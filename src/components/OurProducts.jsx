import Card from "./Card";

export default function OurProducts() {
  return (
    <>
      <div className="product-container">
        <h1>Our Products</h1>
        <div className="row">
          <Card
            img="https://picsum.photos/400"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://picsum.photos/400"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://picsum.photos/400"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://picsum.photos/400"
            title="Incenso chill vibes"
            price="€19,99"
          />
        </div>
        <div className="d-flex justify-content-center my-4">
          <button className="btn btn-dark">View all</button>
        </div>
      </div>
    </>
  );
}
