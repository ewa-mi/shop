import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart.js";
import "./NavBar.css";
import { useSelector } from "react-redux";

export default function NavBar(props) {
  const cartUpdateCounter = useSelector((reduxState) => reduxState.cart);
  console.log("cartUpdateCounter:", cartUpdateCounter.cart.length);

  // After we push the cart to the redux store, we need to pull it down using the useSelector

  return (
    <div>
      <nav className="menu">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
          exact
          to="/"
        >
          Awesome Pet Shop
        </NavLink>
        <Cart amountInBasket={cartUpdateCounter.cart.length} />
      </nav>
      <hr />
    </div>
  );
}
