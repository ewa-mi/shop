import React from "react";
import { BrowserRouter as Switch, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <br />
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
      </nav>
      <br />
      <hr />
    </div>
  );
}
