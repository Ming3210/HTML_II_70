import React, { useEffect, useState } from "react";
import { Food } from "../models/product";
import { useDispatch, useSelector } from "react-redux";
import { actionUpdate } from "../actions";

export default function YourCart() {
  const [cart, setCart] = useState<Food[]>([]);
  const [cartUnupdate, setCartUnupdate] = useState<Food[]>([]);
  const state = useSelector((state: any) => state);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, [state.productReducer]);

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], [name]: value };
    setCartUnupdate(updatedCart);
    localStorage.setItem("cartUnupdate", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const dispatch = useDispatch();
  const update = (id: number) => {
    let index = cartUnupdate.findIndex((v) => v.id === id);
    localStorage.setItem("id", JSON.stringify(cartUnupdate[index].quantity));

    dispatch(actionUpdate("UPDATE_CART", id));
    console.log(state.cartReducer, 22222);
  };

  const del = (id: number) => {
    dispatch(actionUpdate("DELETE", id));
  };
  return (
    <div className="panel-body">
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {cart.map((item: Food, index: number) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  onChange={(e) => handleChanges(e, index)}
                  name="quantity"
                  type="number"
                  value={item.quantity}
                />
              </td>
              <td>
                <a
                  onClick={() => {
                    update(item.id);
                  }}
                  className="label label-info update-cart-item"
                >
                  Update
                </a>
                <a
                  className="label label-danger delete-cart-item"
                  onClick={() => del(item.id)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot id="my-cart-footer">
          <tr>
            <td colSpan={4}>
              There are <b>{cart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {cart.reduce((acc, item) => acc + parseFloat(item.price), 0)} USD
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
