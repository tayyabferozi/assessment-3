import axios from "axios";
import { toast } from "react-toastify";

import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setProductsState(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something's not right");
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {productsState.map((el) => {
          return (
            <Product
              key={el._id}
              id={el._id}
              name={el.name}
              price={el.price}
              imgs={el.imgs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
