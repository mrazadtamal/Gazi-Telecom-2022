import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/productData";
import "./ProductDescription.css";

const ProductDescription = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id == id);
  console.log(product);

  return (
    <div id="container">
      <div className="product-image">
        <img src={product.image} alt="" />

        <div className="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Height : </strong>5 Ft{" "}
            </li>
            <li>
              <strong>Shade : </strong>Olive green
            </li>
            <li>
              <strong>Decoration: </strong>balls and bells
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>

      <div className="product-details">
        <h1>CHRISTMAS TREE</h1>

        <p className="information">
          " Let's spread the joy , here is Christmas , the most awaited day of
          the year.Christmas Tree is what one need the most. Here is the correct
          tree which will enhance your Christmas.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
