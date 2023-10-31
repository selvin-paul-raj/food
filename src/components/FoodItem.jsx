import React from 'react';

function FoodItem({ data, addToCart }) {
  const { _id, Name, price, format, url } = data;

  return (
    <div className="food-item">
      <br />
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Christmas-pie-2ed9223.jpg?quality=90&webp=true&resize=300,272" alt={Name} className="food-image" />
      <h3>{Name}</h3>
      <p>Price: ${price}</p>
      <p>Format: {format}</p>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
      
    </div>
  );
}

export default FoodItem;
