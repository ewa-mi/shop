import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../pages/Cart.js";
import "./NavBar.css";

export default function NavBar(props) {
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
        <Cart amountInBasket={props.amountInBasket} />
      </nav>
      <hr />
    </div>
  );
}
