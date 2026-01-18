import Searchbar from "./Searchbar";

export default function SearchButton({ onSearch }) {
  return (
    <section className="p-0">
      <div className="p-3 d-lg-none">
        <button
          className="btn btn-dark w-100 rounded-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarFilters"
        >
          Search filters
        </button>
      </div>

      <div className="collapse d-lg-block" id="sidebarFilters">
        <div className="border-0 shadow-none">
          <Searchbar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}
