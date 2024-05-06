import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container-fluid">
                {/* Changed color of "Your Brand" and removed the text */}
                <Link className="navbar-brand text-dark" to="/">
                    Your Brand
                </Link>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active text-dark"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
