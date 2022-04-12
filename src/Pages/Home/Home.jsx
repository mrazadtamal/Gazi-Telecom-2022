import React from "react";
import product from "../../data/productData";
import Product from "../Product/Product";
import "./home.css";

const Home = () => {
  return (
    <>
      <ul className="cards">
        {product.map((item) => {
          return <Product item={item} />;
        })}
      </ul>
    </>
  );
};

export default Home;
