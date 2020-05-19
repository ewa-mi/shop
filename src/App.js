import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
