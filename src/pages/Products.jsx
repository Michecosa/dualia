import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import SearchButton from "../components/SearchButton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProducts = (filters = {}) => {
    const cleanFilters = {};
    for (let key in filters) {
      if (filters[key] !== "" && filters[key] !== undefined) {
        cleanFilters[key] = filters[key];
      }
    }

    axios
      .get(`http://localhost:3000/api/products/search`, {
        params: cleanFilters,
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const paramsInUrl = {};
    searchParams.forEach((value, key) => {
      paramsInUrl[key] = value;
    });
    fetchProducts(paramsInUrl);
  }, [searchParams]);

  if (loading) return <p>loading...</p>;

  return (
    <div className="container mt-5">
      <div id="p_daddy" className="row mb-3">
        <div className="col-lg-3">
          <SearchButton
            onSearch={(newFilters) => {
              const currentParams = {};
              searchParams.forEach((value, key) => {
                currentParams[key] = value;
              });

              const mergedFilters = { ...currentParams, ...newFilters };

              setSearchParams(mergedFilters);
            }}
          />
        </div>
        <div className="col">
          <h2 className="mb-3">Products</h2>
          <div className="row gap-3">
            {products.length > 0 ? (
              products.map((p) => (
                <Card
                  key={p.product_id}
                  title={p.name}
                  img={p.url_image}
                  fullprice={p.full_price}
                  price={p.price}
                  path={`/products/${p.product_id}`}
                />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h3>No products found</h3>
                <p className="text-muted">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
