import React from 'react';
import './Slider.scss';
import { FaHeart } from 'react-icons/fa';

function Slider({ products, addToCart }) {
  return (
    <div className="slider">
      {products.map((product, index) => (
        <div className="slider-item" key={index}>
          <div className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="prices">
                <span className="sale-price">{product.salePrice} EGP</span>
                <span className="original-price"><s>{product.originalPrice} EGP</s></span>
              </div>
              <div className="actions">
                <button className="buy-btn" onClick={() => addToCart(product.name, 1, product.salePrice)}>
                  Add to cart
                </button>
                <button className="heart-btn">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
