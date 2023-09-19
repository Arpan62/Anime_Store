import React, { useContext } from "react";
import { animes } from "../animes";
import { ShopContext } from "../shop-context";
import { CartItem } from "./Cart-Item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {animes.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return <div></div>;
        })}
      </div>
      <form>
        <label>Shipping Address</label>
        <br />
        <br />
        <input className="ship" type="text" id="lname" name="lname" size="50" />
        <br />
        <br />
        <label>Payment Details</label>
        <br />
        <br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">UPI</label>
        <br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Debit Card</label>
        <br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Credit Card</label>
        <br />
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Net Banking</label>
        <br />
      </form>
      <div className="checkout">
        <p className="total">Sub Total ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout </button>
      </div>
    </div>
  );
};
