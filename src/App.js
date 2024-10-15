import React from "react";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id : 1,
      name : 'Charger',
      price : 20
    },
    {
      id : 2,
      name : 'Iphone',
      price : 200
    },
    {
      id : 3,
      name : 'Mac book Pro',
      price : 400
    }
  ]

  const addToCart = (product) => {
    const item = cart.find((item) => item.id === product.id);

    if(item){
      setCart(cart.map((item) => item.id === product.id ? {...item, quantity : item.quantity + 1} : item));
    }else{
      setCart([...cart, {...product, quantity : 1}]);
    }
  }

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);

    if(item.quantity  == 1){
      setCart(cart.filter((item) => item.id !== id));
    }else{
      setCart(cart.map((item) => item.id === id ? {...item, quantity : item.quantity - 1} : item));
    }
  }

  return (
    <div className="App">
       <ProductList products = {products} addToCart = {addToCart} removeFromCart = {removeFromCart}/>
       <Cart cart = {cart}/>
    </div>
  );
}

export default App;
