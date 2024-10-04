import React from 'react';
import './Cart.scss';

const Cart = ({ cartItems, cartDetails, removeFromCart }) => {
  return (
    <div className="cart-dropdown">
      {cartItems === 0 ? (
        <p>سلتك فارغة.</p>
      ) : (
        <ul>
          {cartDetails.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} 
              <button onClick={() => removeFromCart(item.name)}>إزالة</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
