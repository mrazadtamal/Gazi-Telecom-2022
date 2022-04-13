import React from "react";
import products from "../../data/productData";
import Product from "../Product/Product";
import "./home.css";

const Home = () => {
  return (
    <>
      <ul className="cards">
        {products.map((item) => {
          return <Product item={item} />;
        })}
      </ul>
    </>
  );
};

export default Home;
