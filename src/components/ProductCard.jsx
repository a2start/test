import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
      <div className="card h-100 text-center p-4">
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">{product.title}</h5>
            <p className="card-text lead fw-bold">${product.price}</p>
          </div>
        </Link>
        <button
          className="btn btn-outline-dark"
          onClick={() => addProduct(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
