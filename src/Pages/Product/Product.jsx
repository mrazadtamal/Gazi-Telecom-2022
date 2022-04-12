import React from "react";

const Product = ({ item }) => {
  return (
    <>
      <li>
        <a href="/" className="card">
          <img src={item.image} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h3 className="card__title">{item.name}</h3>
              </div>
            </div>
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </li>
    </>
  );
};

export default Product;
