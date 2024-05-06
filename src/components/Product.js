import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
    const { product, showBtn } = props;
    return (
        <div className="card">
            <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ backgroundColor: "#f0f0f0", borderRadius: "8px", marginBottom: "10px" }}
            />
            <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
                <h5 className="card-title" style={{ color: "#333333", fontWeight: "bold", marginBottom: "5px" }}>{product.title}</h5>
                <p className="card-text" style={{ color: "#555555", marginBottom: "10px" }}>{product.description}</p>
                <p style={{ color: "#333333", fontWeight: "bold", marginBottom: "10px" }}>Price: ${product.price}</p>
                {showBtn &&
                    <Link to={`/product/${product.id}`} className="btn btn-primary" style={{ backgroundColor: "#007bff", borderColor: "#007bff", borderRadius: "5px" }}>
                        Details
                    </Link>
                }
            </div>
        </div>
    );
}
