import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Product = ({ item }) => {
  return (
    <>
      <li>
        <Link to={`/product/${item.id}`} className="card">
          <img src={item.image} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h3 className="card__title">{item.name}</h3>
              </div>
            </div>

            <Rating
              style={{ fontSize: "20px", marginLeft: "30px" }}
              className=" text-warning  my-1"
              initialRating={item?.rating}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
              readonly
            />
            <p className="card__description">Price : {item?.price}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Product;
