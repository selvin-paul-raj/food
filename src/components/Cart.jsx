// import React from 'react';

function Cart({ cart, removeFromCart }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <br />
      <p>Total: ${getTotalPrice()}</p>
      <br />
      {cart.map((item) => (
        <div key={item._id.$oid} className="cart-item">
          <div>
            <h3>{item.Name}</h3>
            <p>Price: ${item.price}</p>
          </div>
          <div>
            <button onClick={() => removeFromCart(item._id.$oid)}>Remove</button>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
     
    </div>
  );
}

export default Cart;
