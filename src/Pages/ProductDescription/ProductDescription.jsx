import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/productData";
import { Container, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductDescription = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id == id);
  console.log(product);

  return (
    <Container>
      <Row className=" d-flex">
        <div>
          <div className=" p-3  ">
            <h1> Product Name : {product?.name}</h1>
            <h1> Product Price : {product?.price}</h1>
            <img className=" product-Img m-2 " src={product?.image} alt="" />
            <p className=" p-2 w-100">{product?.description}</p>
          </div>
        </div>

        <div className=" ">
          <div className="p-3">
            <Rating
              style={{ fontSize: "20px" }}
              className=" text-warning my-3"
              initialRating={product?.rating}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
              readonly
            />

            <h1>Quantity </h1>
            <select>
              {[...Array(product?.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
          <hr className="" />
          <div className=" p-3">
            <Button className="  mt-3" variant="success">
              Add To Cart
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ProductDescription;
