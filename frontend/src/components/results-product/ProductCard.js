import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

export const ProductCard = ({
  id,
  title,
  price: { amount, decimals },
  picture,
  condition,
  free_shipping,
}) => {
  return (
    <Link className="link-productDetails" to={`/items/${id}`}>
      <div className="card">
        <div className="card-first-col">
          <img className="product_img" src={picture} alt="imagen" />
        </div>
        <div className="card-second-col">
          <ul className="ul-second-col">
            <li className="price">
              <span>$ </span>
              <span>
                {
                  // parse the price amount to local currency
                  amount.toLocaleString("ARS", { minimumFractionDigits: 0 })
                }
                ,{decimals}
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
          <span className="condition">{condition}</span>
        </div>
      </div>
    </Link>
  );
};
