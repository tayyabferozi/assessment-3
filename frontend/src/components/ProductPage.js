import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { imagesHost } from "../constants";

const ProductPage = () => {
  const [productState, setProductState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/" + id)
      .then((res) => {
        setProductState(res.data.product);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something's not right");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div className="container-fluid">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row" id="product">
          <div className="col-md-6">
            <div className="img">
              <img
                src={imagesHost + productState.imgs[0].src}
                alt="product-img"
              />
            </div>
          </div>
          <div className="col-md-6 text">
            <h5 className="mt-5 mt-md-0">Name:</h5>
            <h1>{productState.name}</h1>
            <h5 className="mt-3">Price:</h5>
            <h3>${productState.price}</h3>
            <div className="rating">
              <h5>Ratings:</h5>
              <img src="/assets/img/star-fill.png" alt="star" />
              <img src="/assets/img/star-fill.png" alt="star" />
              <img src="/assets/img/star-fill.png" alt="star" />
              <img src="/assets/img/star-fill.png" alt="star" />
              <img src="/assets/img/star-no-fill.png" alt="star" />
            </div>
            <h5 className="mt-3">Description:</h5>
            <p className="desc">{productState.description}</p>

            <h5 className="mt-3">Colours available:</h5>
            <div className="palette">
              {productState.imgs.map((el) => {
                return (
                  <div
                    key={el._id}
                    className="item"
                    style={{ backgroundColor: el.hex }}
                  ></div>
                );
              })}
            </div>
            <button className="btn coolBeans">ORDER NOW</button>
            <Link to={"/edit-product/" + id} className="btn edit">
              EDIT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
