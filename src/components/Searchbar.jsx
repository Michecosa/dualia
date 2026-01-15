import { useState } from "react";
import SliderPrice from "./SliderPrice";

export default function Searchbar({ onSearch }) {
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    sale: "",
    order: "",
    minPrice: "",
    maxPrice: "",
  });

  const updateFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    const empty = {
      category: "",
      color: "",
      sale: "",
      order: "",
      minPrice: "",
      maxPrice: "",
    };
    setFilters(empty);
    onSearch(empty);
  };

  return (
    <div className="sidebar-filters">
      <h5 className="mb-4 mt-2 fw-bold">Filtri Ricerca</h5>

      <div className="filter-group">
        <label className="filter-label">Categoria</label>
        <select
          className="form-select shadow-none"
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
        >
          <option value="">Tutte le categorie</option>
          <option value="Decorations">Decorations</option>
          <option value="Lighting">Lighting</option>
          <option value="Candles and Scents">Candles and Scents</option>
          <option value="Clocks and Frames">Clocks and Frames</option>
          <option value="Furniture">Furniture</option>
          <option value="Zen Garden">Zen Garden</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Colore</label>
        <select
          className="form-select shadow-none"
          value={filters.color}
          onChange={(e) => updateFilter("color", e.target.value)}
        >
          <option value="">Tutti i colori</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* SALE */}
      <div className="filter-group">
        <label className="filter-label">In Offerta</label>
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
            Tutti
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
            Sì
          </label>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Ordina per</label>
        <select
          className="form-select shadow-none"
          value={filters.order}
          onChange={(e) => updateFilter("order", e.target.value)}
        >
          <option value="">Nessun ordine</option>
          <option value="price_asc">Prezzo: Crescente</option>
          <option value="price_desc">Prezzo: Decrescente</option>
          <option value="name_asc">Nome: A-Z</option>
          <option value="name_desc">Nome: Z-A</option>
        </select>
      </div>

      <hr className="my-4" />

      {/* PREZZO */}
      <div className="filter-group">
        <label className="filter-label">Range di Prezzo</label>
        <SliderPrice
          onChange={(min, max) =>
            setFilters({ ...filters, minPrice: min, maxPrice: max })
          }
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="d-grid gap-2 mt-5">
        <button className="btn btn-dark py-2" onClick={() => onSearch(filters)}>
          Applica Filtri
        </button>
        <button
          className="btn btn-link btn-sm text-decoration-none text-muted"
          onClick={handleReset}
        >
          Reset filtri
        </button>
      </div>
    </div>
  );
}
