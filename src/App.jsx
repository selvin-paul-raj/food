import React, { useState } from 'react';
import './App.css';
import FoodItem from './components/FoodItem';
import Cart from './components/Cart';

const foodData = [
  
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f91"
    },
    "Name": "Christmas Pie",
    "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
    "price": 12.99,
    "format": "Family Size"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f92"
    },
    "Name": "Simmer-&-Stir Christmas Cake",
    "url": "https://www.bbcgoodfood.com/recipes/1160/simmerandstir-christmas-cake",
    "price": 19.99,
    "format": "Large"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f93"
    },
    "Name": "Christmas Cupcakes",
    "url": "https://www.bbcgoodfood.com/recipes/72622/christmas-cupcakes",
    "price": 8.99,
    "format": "Dozen"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f94"
    },
    "Name": "Christmas Buns",
    "url": "https://www.bbcgoodfood.com/recipes/1803633/christmas-buns",
    "price": 6.99,
    "format": "Pack of 6"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f95"
    },
    "Name": "Christmas Cupcakes",
    "url": "https://www.bbcgoodfood.com/recipes/981634/christmas-cupcakes",
    "price": 9.99,
    "format": "Dozen"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f96"
    },
    "Name": "Christmas Slaw",
    "url": "https://www.bbcgoodfood.com/recipes/890635/christmas-slaw",
    "price": 5.99,
    "format": "Small"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f97"
    },
    "Name": "Christmas Mess",
    "url": "https://www.bbcgoodfood.com/recipes/2806664/christmas-mess",
    "price": 14.99,
    "format": "Large"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f98"
    },
    "Name": "Christmas Brownies",
    "url": "https://www.bbcgoodfood.com/recipes/christmas-brownies",
    "price": 7.99,
    "format": "Pack of 8"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f99"
    },
    "Name": "Christmas Cosmopolitan",
    "url": "https://www.bbcgoodfood.com/recipes/889643/christmas-cosmopolitan",
    "price": 9.99,
    "format": "Cocktail"
    },
    {
    "_id": {
    "$oid": "6540ab096e3f7caf7a4a2f9a"
    },
    "Name": "Christmas Pizza",
    "url": "https://www.bbcgoodfood.com/recipes/christmas-pizza",
    "price": 11.99,
    "format": "Large"
    }
    
  // Add more food items here
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id.$oid === item._id.$oid);

    if (existingItemIndex !== -1) {
      // Item already in the cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add the item to the cart with a quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item._id.$oid !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food App</h1>
      </header>
      <div className="content">
        <div className="food-list">
          {foodData.map((item) => (
            <FoodItem key={item._id.$oid} data={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
