import React, { useState } from 'react';
import './Product.scss'; 
import productImage from '../assets/Frame 53.png';
import { FaHeart, FaShareSquare, FaPlus } from 'react-icons/fa';

function Product({ name, rating, originalPrice, salePrice, description, image, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-image">
          <img src={image || productImage} alt={name} />
        </div>
        <div className="product-details">
          <h2>{name}</h2>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < rating ? 'filled' : 'empty'}>
                ★
              </span>
            ))}
          </div>
          <div className="prices">
            <span className="original-price"><s>{originalPrice} EGP</s></span>
            <span className="sale-price">{salePrice} EGP</span>
          </div>
          <p>{description}</p>
          <div className="actions">
            <div className="quantity-container">
              <button className="quantity-btn" onClick={decrement}>-</button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="quantity-input"
              />
              <button className="quantity-btn" onClick={increment}>+</button>
            </div>
            <button className="buy-btn" onClick={() => addToCart(name, quantity, salePrice)}>Buy now</button>
          </div>
          <div className="social-actions">
            <button className="share-btn">
              <FaShareSquare /> Share
            </button>
            <button className="heart-btn">
              <FaHeart /> 
            </button>
            <button className="add-to-btn">
              <FaPlus /> Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
