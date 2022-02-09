import React from "react";
import "../styles/cards.css";

export const ProductCard = ({
  id,
  title,
  price: { currency, amount, decimals },
  picture,
  condition,
  free_shipping,
}) => {
  console.log(free_shipping);
  return (
    <div className="card">
      <div className="card-first-col">
        <img className="product_img" src={picture} alt="imagen" />
      </div>
      <div className="card-second-col">
        <ul className="ul-second-col">
          <li className="price">
            <span>$</span>
            <span>
              {amount}
              {free_shipping && (
                <img
                  className="shipping-img"
                  src="/assets/ic_shipping@2x.png.png"
                  alt=""
                />
              )}
            </span>
          </li>
          <li className="title">
            <span>{title}</span>
          </li>
        </ul>
      </div>
      <div className="card-third-col">
        <h2>{condition}</h2>
      </div>
    </div>
  );
};
