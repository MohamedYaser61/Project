import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.css"; // Importing CSS file

export default function ProductList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    };

    const getProductsInCategory = (catname) => {
        fetch(`${api_url}/category/${catname}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center p-4">Our Products</h2>
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="product-card">
                                <Product product={product} showBtn={true} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
