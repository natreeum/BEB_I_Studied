import React, { useState } from "react";
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import { initialState } from "./assets/state";

function App() {
  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const addCart = (id) => {
    let isExist = false;
    for (let item of cartItems) {
      if (item.itemId === id) {
        isExist = true;
      }
    }
    if (isExist) {
      setCartItems(
        cartItems.map((item) => {
          if (item.itemId === id) {
            return { itemId: id, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartItems([...cartItems, { itemId: id, quantity: 1 }]);
    }
  };

  const deleteCart = (id) => {
    setCartItems(cartItems.filter((item) => item.itemId !== id));
  };

  return (
    <Router>
      <Nav itemCount={cartItems.length} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} addCart={addCart} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart
            cartItems={cartItems}
            items={items}
            deleteCart={deleteCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
