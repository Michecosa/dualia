import Card from "./Card";

export default function OurProducts() {
  return (
    <>
      <div className="container">
        <h1>Our Products</h1>
        <div className="row gap-1 justify-content-center">
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
        <button className="btn btn-dark">View all</button>
      </div>
    </>
  );
}
