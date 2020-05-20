import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import PetPage from "./pages/PetPage";

export default function App() {
  const [amountInBasket, setAmountInBasket] = useState(0);

  return (
    <div>
      <NavBar amountInBasket={amountInBasket} />
      <Switch>
        <Route exact path="/">
          <HomePage
            setAmountInBasket={setAmountInBasket}
            amountInBasket={amountInBasket}
          />
        </Route>
        <Route path="/petpage/:id">
          <PetPage />
        </Route>
      </Switch>
    </div>
  );
}
