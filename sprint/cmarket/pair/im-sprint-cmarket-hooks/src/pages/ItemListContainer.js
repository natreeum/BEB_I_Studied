import React from "react";
import Item from "../components/Item";

// function ItemListContainer({ items, setCartItems }) {
//   const handleClick = (e, id) => {
//     console.log(e);
//     console.log(id);
//     setCartItems("123");
//   };

function ItemListContainer({ items, addCart }) {
  const handleClick = (e, id) => {
    addCart(id);
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
