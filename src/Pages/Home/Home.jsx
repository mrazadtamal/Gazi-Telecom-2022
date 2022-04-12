import React from "react";
import product from "../../data/productData";
import "./home.css";

const Home = () => {
  return (
    <>
      <ul class="cards">
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </>

    // <div>
    //   <div className="row  justify-content-center">
    //     {product.map((item) => {
    //       return (
    //         <div className="col-md-3 m-5 ">
    //           <h4>{item.name}</h4>
    //           <img src={item.image} className=" img-fluid" alt="" />
    //           <h1> rating : {item.rating} </h1>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Home;
