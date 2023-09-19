import React, { useContext } from "react";
import { animes } from "../animes";
import { ShopContext } from "../shop-context";
import { DetailItem } from "./DetailItem";
import "./Detail.css";

export const Detail = () => {
  const { Itemdescript } = useContext(ShopContext);
  return (
    <div className="Detail">
      <div>
        <h1>Plot</h1>
      </div>
      <div className="DetailItem">
        {animes.map((product) => {
          if (Itemdescript[product.id] !== 0) {
            return <DetailItem data={product} />;
          }
          return <div></div>;
        })}
      </div>
    </div>
  );
};
