import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import Header from "./components/Header";
import { Food } from "./models/product";
import Cake from "./assets/images/Cake.jpg";
import Hamburger from "./assets/images/Hamburger.jpg";
import Bread from "./assets/images/bread.jpg";
import Pizza from "./assets/images/pizza.jpg";
import ProductList from "./components/ListProduct";
import YourCart from "./components/YourCart";
import { useSelector } from "react-redux";

export default function App() {
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");
  console.log(productList);

  // let food: Food[] = [
  //   {
  //     id: Math.floor(Math.random() * 999999999),
  //     name: "Pizza",
  //     price: "15 USD",
  //     status: false,
  //     image: Pizza,
  //     quantity: 0,
  //   },
  //   {
  //     id: Math.floor(Math.random() * 999999999),
  //     name: "Hamburger",
  //     price: "15 USD",
  //     status: true,
  //     image: Hamburger,
  //     quantity: 15,
  //   },
  //   {
  //     id: Math.floor(Math.random() * 999999999),
  //     name: "Bread",
  //     price: "20 USD",
  //     status: true,
  //     image: Bread,
  //     quantity: 15,
  //   },
  //   {
  //     id: Math.floor(Math.random() * 999999999),
  //     name: "Cake",
  //     price: "19 USD",
  //     status: true,
  //     image: Cake,
  //     quantity: 15,
  //   },
  // ];
  // localStorage.setItem("productList", JSON.stringify(food));

  return (
    <div>
      <div className="container">
        <Header></Header>
        <div className="row">
          <div>
            <ProductList></ProductList>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <YourCart></YourCart>
              </div>
              <div
                className="alert alert-success"
                role="alert"
                id="mnotification"
              >
                Add to cart successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
