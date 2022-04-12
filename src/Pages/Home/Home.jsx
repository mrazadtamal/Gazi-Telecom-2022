import React from "react";
import product from "../../data/productData";

const Home = () => {
  return (
    <div>
      <div className="row m-auto">
        {product.map((item) => {
          return (
            <div className="col-md-3 m-3 ">
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
