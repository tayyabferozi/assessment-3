import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { imagesHost } from "../constants";

const EditProduct = () => {
  const [productState, setProductState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isBeingSubmitted, setIsBeingSubmitted] = useState(false);
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

  const inputChangeHandler = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "description") {
      value = e.target.innerHTML;
    }

    setProductState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setIsBeingSubmitted(true);

    axios
      .post("/" + id, productState)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something's not right");
      })
      .finally(() => {
        setIsBeingSubmitted(false);
      });
  };

  return (
    <div id="edit-product" className="container-fluid">
      <div className="row">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <div className="col-12">
              <div className="img d-block mx-auto">
                <Link to={"/product/" + id}>
                  <img
                    src={imagesHost + productState.imgs[0].src}
                    alt="product"
                  />
                </Link>
              </div>
            </div>
            <form onSubmit={formSubmitHandler} className="form mt-5">
              <div className="row my-3">
                <div className="col-md-4">
                  <label htmlFor="controlInput1">
                    <h4>Name:</h4>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="controlInput1"
                    placeholder="Lorem"
                    value={productState.name}
                    name="name"
                    onChange={inputChangeHandler}
                  ></input>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-4">
                  <label htmlFor="controlInput2">
                    <h4>Price:</h4>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control"
                    id="controlInput2"
                    placeholder="00"
                    value={productState.price}
                    name="price"
                    onChange={inputChangeHandler}
                  ></input>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-4">
                  <label htmlFor="controlInput3">
                    <h4>Description:</h4>
                  </label>
                </div>
                <div className="col-md-8">
                  <textarea
                    rows={5}
                    id="controlInput3"
                    className="form-control"
                    name="description"
                    onChange={inputChangeHandler}
                    value={productState.description}
                  />
                </div>
              </div>

              <button
                disabled={isBeingSubmitted}
                className="btn d-block mx-auto coolBeans"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
