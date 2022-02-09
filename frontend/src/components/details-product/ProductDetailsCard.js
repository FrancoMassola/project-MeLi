import React from "react";

export const ProductDetailsCard = ({
  id,
  title,
  price: { currency, amount, decimals },
  picture,
  condition,
  free_shipping,
  sold_quantity,
  description
}) => {
  return (
    <>
      <div className="product-details-container">
          <div className="details-firstRow">
        <div className="product-container-image">
            <img className="product-detail-image" src={picture} alt="" />
        </div>
        <div className="product-info-container">
          <ul className="product-info">
            <li><span>{condition} - {sold_quantity} vendidos</span></li>
            <li>{title}</li>
            <li>$ {amount},{decimals} {currency}</li>
            <li>button comprar</li>
          </ul>
        </div>
          </div>
        <div className="product-description-container">
            <h3>Descripción del producto</h3>
            <span>{description}</span>
        </div>
      </div>
    </>
  );
};
