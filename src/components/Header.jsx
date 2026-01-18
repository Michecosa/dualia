import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Loghi_Dualia/logo_dualia_header.png";
import { useCart } from "../components/CartContext";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/products?q=${searchTerm.trim()}`);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  const { cartItems } = useCart();
  const cartCount = cartItems ? cartItems.length : 0;

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md shadow-sm">
          <div className="container-fluid">
            {/* logo */}
            <NavLink to="/">
              <img id="logo_header" src={Logo} alt="#" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* menù */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link nav_home"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/products"}>
                    Products
                  </NavLink>
                </li>
              </ul>
              <div className="header_icons d-flex align-items-center gap-3">
                {/* search input */}
                {showSearch && (
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                )}
                {/* search icon */}
                <button
                  className="search_button"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <a href="#" className="icon_link" aria-label="Search">
                    <i className="bi bi-search"></i>
                  </a>
                </button>
                {/* wishlist icon */}
                <Link
                  to="/wishlist"
                  className="icon_link"
                  aria-label="Heart Wishlist Page"
                >
                  <i className="bi bi-heart"></i>
                </Link>
                {/* cart icon */}
                <NavLink to="/cart" className="icon_link position-relative" aria-label="Cart">
                  <i className="bi bi-bag"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark" style={{ backgroundColor: "#e3be85" }}>
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
