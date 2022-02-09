import React from "react";

export const ProductDetailsCard = ({
  id,
  title,
  price: { currency, amount, decimals },
  picture,
  condition,
  free_shipping,
  sold_quantity,
  description,
}) => {
  //count the number of lines in the product description for text area
  const numberOfRows = description.split(/\r\n|\r|\n/).length;
  return (
    <>
      <div className="product-details-container">
        <div className="details-firstRow">
          <div className="product-container-image">
            <img className="product-detail-image" src={picture} alt="" />
          </div>
          <div className="product-info-container">
            <ul className="product-info">
              <li className="product-condition">
                <span>
                  {condition} - {sold_quantity} vendidos
                </span>
              </li>
              <li className="product-title">{title}</li>
              <li className="product-price">
                $ {amount},{decimals} {currency}
              </li>
              <li>
                <button className="button-detail">Comprar</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-description-container">
          <h3 className="title-description">Descripción del producto</h3>
          <textarea
            defaultValue={description}
            cols="30"
            rows={String(numberOfRows)}
            disabled
          ></textarea>
        </div>
      </div>
    </>
  );
};
