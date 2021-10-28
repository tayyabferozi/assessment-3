import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import { imagesHost } from "../constants";

const Product = ({ id, imgs, name, price }) => {
  const clrClickHandler = (e) => {
    let $this = $(e.target);
    let imgSrc = $this.attr("data-img");

    $this
      .parents(".product-card")
      .find("img")
      .attr("src", imagesHost + imgSrc);
  };

  return (
    <div className="col-12 col-sm-6 col-md-3 py-3">
      <div className="product-card">
        <Link to={"/product/" + id}>
          <div className="img">
            <img src={imagesHost + imgs[0].src} alt={name} />
          </div>
        </Link>
        <div className="body">
          <div className="palette">
            {imgs.map((el) => {
              return (
                <div
                  key={el._id}
                  className="item"
                  data-img={el.src}
                  onClick={clrClickHandler}
                  style={{ backgroundColor: el.hex }}
                ></div>
              );
            })}
          </div>
          <h5 className="name">
            <Link to={"/product/" + id}>{name} </Link>
          </h5>
          <h6 className="price">${price}</h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
