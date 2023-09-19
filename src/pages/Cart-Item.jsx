import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import "./Home.css";

export const CartItem = (props) => {
  const { id, AnimeName, price, Poster } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount
  } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={Poster} alt="" />
      <div className="description">
        <p>
          <b>{AnimeName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
