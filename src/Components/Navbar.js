import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import logo from '../assets/logo.png';
import smallImage from '../assets/small-image.png';

const Navbar = ({ cartItems, cartDetails, removeFromCart, isDropdownVisible, toggleDropdown }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={smallImage} alt="Small Icon" className="small-icon" />
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Products</a></li>
        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">New Arrival</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <div className="cart-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
        </div>
        {isDropdownVisible && (
          <>
            <div className="cart-dropdown-overlay" onClick={toggleDropdown} />
            <div className="cart-dropdown">
              {cartItems === 0 ? (
                <p>Empty</p>
              ) : (
                <>
                  <ul>
                    {cartDetails.map((item, index) => (
                      <li key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <span className="cart-item-name">{item.name} x {item.quantity}</span>
                          <span className="cart-item-price">{item.price * item.quantity} EGP</span>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="total">Sub total: {cartDetails.reduce((total, item) => total + (item.price * item.quantity), 0)} EGP</p>
                  <button className="checkout-btn">Go to cart</button>
                </>
              )}
            </div>
          </>
        )}
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
