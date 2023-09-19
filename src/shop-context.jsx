import { createContext, useState } from "react";
import { animes } from "./animes";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < animes.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [Itemdescript, setitemdescript] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = animes.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const animeDescript = (itemId) => {
    for (let i = 1; i < animes.length + 1; i++) {
      Itemdescript[i] = 0;
    }
    setitemdescript((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const Descrip = () => {
    const navigate = useNavigate();
    navigate("./pages/description");
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    Itemdescript,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    Descrip,
    checkout,
    animeDescript
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
