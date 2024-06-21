import React, { useEffect, useState } from "react";
import { Food } from "../models/product";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const [productList, setProductList] = useState<Food[]>([]);
  const state = useSelector((state: any) => {
    return state;
  });

  const dispatch = useDispatch();
  const addProduct = (id: number) => {
    dispatch({ type: "ADD_PRODUCT", payload: { id } });
  };
  useEffect(() => {
    setProductList(JSON.parse(localStorage.getItem("productList") || "[]"));
  }, []);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          <ul>
            {state.productReducer.map((food: Food, index: number) => {
              return (
                <li key={index}>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img className="media-object" src={food.image} />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{food.name}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At dicta asperiores veniam repellat unde debitis
                        quisquam magnam magni ut deleniti!
                      </p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        value={food.quantity}
                      />
                      {food.status ? (
                        <a
                          onClick={() => addProduct(food.id)}
                          data-product={food.id}
                          className="price"
                        >
                          {food.price}{" "}
                        </a>
                      ) : (
                        <span className="price"> {food.price}</span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
