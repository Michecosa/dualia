import Card from "./Card";

export default function OurProducts() {
  return (
    <>
      <div className="container">
        <h1>Our Products</h1>
        <div className="row gap-1 justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="btn btn-dark">View all</button>
      </div>
    </>
  );
}
