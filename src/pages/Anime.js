import React, { useContext } from "react";
import { animes } from "../animes";
import "./Home.css";
import { ShopContext } from "../shop-context";
import { Link } from "react-router-dom";

export const Anime = (props) => {
  const { id, AnimeName, price, Poster } = props.data;
  const { animeDescript, addToCart, cartItems } = useContext(ShopContext);
  const amount = cartItems[id];

  return (
    <div className="anime">
      {
        <div>
          <button className="descript" onClick={() => animeDescript(id)}>
            <Link to={"/Detail/" + id}>
              <img src={Poster} alt="" />
            </Link>
          </button>
        </div>
      }
      <div className="description">
        <p>
          <b>{AnimeName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addtocart" onClick={() => addToCart(id)}>
        Add to Cart {amount > 0 && <>({amount})</>}
      </button>
      <hr />
    </div>
  );
};
