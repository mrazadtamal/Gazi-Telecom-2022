import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/productData";

const ProductDescription = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id == id);
  console.log(product);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className=" m-2 p-3">
            <h1> Product Name : {product?.name}</h1>
            <h1> Product Price : {product?.price}</h1>
            <img className=" product-Img m-3 " src={product?.image} alt="" />
            <p>{product?.description}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className=" m-2 p-3">
            <h1> Product Name : {product?.name}</h1>
            <img className=" product-Img m-3 " src={product?.image} alt="" />
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
