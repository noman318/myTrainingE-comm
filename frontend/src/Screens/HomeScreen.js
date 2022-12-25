import React from "react";
import products from "../products";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  return (
  <>
        <h2>Featured products</h2>
          <div className='products'>
          {
            products.map(product =>(
              <div className='product' key={product._id}>
                <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
                </Link>
                <div className='product_info'>
                <Link to={`/product/${product._id}`}>
                <p>{product.name}</p>
                </Link>
                <p><strong>Rs. {product.price}</strong></p>
                <button>Add to Cart</button>
                </div>
                
              </div>
            ))
          }
          </div>
</>);
};
