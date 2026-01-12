import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("API offline or broke");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="container">
      <div className="row gap-3 justify-content-center">
        {products.map((p) => (
          <Card
            key={p.product_id}
            title={p.name}
            img={p.url_image}
            price={p.price + "€"}
            path={`/products/${p.product_id}`}
          />
        ))}
      </div>
    </div>
  );
}
