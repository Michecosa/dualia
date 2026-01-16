import { useState, useEffect } from "react";
import SliderPrice from "./SliderPrice";
import { useSearchParams, Link } from "react-router-dom";

export default function Searchbar({ onSearch }) {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    color: searchParams.get("color") || "",
    sale: searchParams.get("sale") || "",
    order: searchParams.get("order") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  });

  useEffect(() => {
    setFilters({
      category: searchParams.get("category") || "",
      color: searchParams.get("color") || "",
      sale: searchParams.get("sale") || "",
      order: searchParams.get("order") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    });
  }, [searchParams]);

  const updateFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    const cleanFilters = { ...filters };
    onSearch(cleanFilters);
  };

  const handleReset = () => {
    setFilters({
      category: "",
      color: "",
      sale: "",
      order: "",
      minPrice: "",
      maxPrice: "",
    });
    onSearch({});
  };

  return (
    <div className="sidebar-filters">
      <h5 className="mb-3 mt-2 fw-bold">Search Filters</h5>

      <div className="filter-group">
        <label className="filter-label mb-1">Category</label>
        <select
          className="form-select shadow-none"
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
        >
          <option value="">All categories</option>
          <option value="Decorations">Decorations</option>
          <option value="Lighting">Lighting</option>
          <option value="Candles and Scents">Candles and Scents</option>
          <option value="Clocks and Frames">Clocks and Frames</option>
          <option value="Furniture">Furniture</option>
          <option value="Zen Garden">Zen Garden</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label mb-1 mt-3">Color</label>
        <select
          className="form-select shadow-none"
          value={filters.color}
          onChange={(e) => updateFilter("color", e.target.value)}
        >
          <option value="">All colors</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* SALE */}
      <div className="filter-group">
        <label className="filter-label mb-1 mt-3">Show</label>

        <div className="btn-group w-100" role="group">
          <input
            type="radio"
            className="btn-check"
            name="sale"
            id="saleAll"
            checked={filters.sale === ""}
            onChange={() => updateFilter("sale", "")}
          />
          <label className="btn btn-outline-secondary btn-sm" htmlFor="saleAll">
            All
          </label>

          <input
            type="radio"
            className="btn-check"
            name="sale"
            id="saleYes"
            checked={filters.sale === "yes"}
            onChange={() => updateFilter("sale", "yes")}
          />

          <label className="btn btn-outline-secondary btn-sm" htmlFor="saleYes">
            On Sale
          </label>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label mb-1 mt-3">Order by</label>

        <select
          className="form-select shadow-none"
          value={filters.order}
          onChange={(e) => updateFilter("order", e.target.value)}
        >
          <option value="">No order</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A-Z</option>
          <option value="name_desc">Name: Z-A</option>
        </select>
      </div>

      <hr className="my-4" />

      {/* PREZZO */}
      <div className="filter-group">
        <label className="filter-label mb-1">Price Range</label>

        <SliderPrice
          initialMin={filters.minPrice}
          initialMax={filters.maxPrice}
          onChange={({ min, max }) =>
            setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }))
          }
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="d-grid gap-2 mt-5">
        <button
          className="btn btn-filter-searchbar p-1 rounded-1"
          onClick={handleApply}
        >
          Apply Filters
        </button>

        <Link
          to="/products"
          className="btn btn-reset-searchbar btn-sm text-decoration-none"
          onClick={handleReset}
        >
          Reset filters
        </Link>
      </div>
    </div>
  );
}
