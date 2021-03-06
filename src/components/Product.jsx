import React from 'react';
import Gallery from "./Gallery";

export default ({ data, closeModal }) => {
  const { productName, productPrice, productDescription } = data;
  return (
    <>
      <div className={"back"} onClick={closeModal}>
        <span>{"BACK TO VIDEO"}</span>
      </div>
      <div className={"product"}>
        <Gallery />
        <div className={"product-description"}>
          <h4>{productName}</h4>
          <h4>{productPrice}</h4>
          <h4 className={"product-details"}>{productDescription}</h4>
          <a href={"buy-it"} className={"btn"}>
            {"BUY NOW"}
          </a>
        </div>
      </div>
    </>
  )
};
