import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Loghi_Dualia/logo_dualia_header.png";

export default function Header() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        {/* logo */}
                        <img id="logo_header" src={Logo} alt="#" />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* menù */}
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link nav_home" aria-current="page" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                                </li>
                            </ul>
                            <div className="header_icons d-flex align-items-center gap-3">

                                {/* search input */}
                                {showSearch && (
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search..."
                                    />
                                )}
                                {/* search icon */}
                                <button
                                    className="search_button"
                                    onClick={() => setShowSearch(!showSearch)}>
                                    <a href="#" className="icon_link" aria-label="Search">
                                        <i className="bi bi-search"></i>
                                    </a>
                                </button>
                                {/* account icon */}
                                <a href="#" className="icon_link" aria-label="Person">
                                    <i className="bi bi-person"></i>
                                </a>
                                {/* cart icon */}
                                <a href="#" className="icon_link" aria-label="Cart">
                                    <i className="bi bi-bag"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
