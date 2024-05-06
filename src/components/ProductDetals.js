import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const { ProductId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${api_url}/${ProductId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, [ProductId]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <Product product={product} showBtn={false} />
                </div>
            </div>
        </div>
    );
}
