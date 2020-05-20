import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../store/homePage/selectors.js";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const state = useSelector(selectState);
  const [petType, setPetType] = useState("bird");
  const filterPet = state.filter((pet) => pet.type === petType);
  const types = state.map((pet) => pet.type);
  const uniqueTypes = [...new Set(types)];
  const [filterByPrice, setFilterByPrice] = useState([]);

  const result = filterByPrice.length ? filterByPrice : state;

  const handleFilterByPrice = () => {
    const animalsByPrice = state.sort(function (a, b) {
      return a.price - b.price;
    });

    setFilterByPrice(animalsByPrice);
  };

  const basket = (
    <button onClick={() => props.setAmountInBasket(props.amountInBasket + 1)}>
      add to cart
    </button>
  );

  const list = result.map((pet) => (
    <div key={pet.id}>
      <div className="animalItself">
        {" "}
        {pet.animal} ${pet.price} Type:{pet.type} <br></br>
        <Link key={state.id} to={`/PetPage/${state.id}`}>
          <p>details</p>
        </Link>
        {basket}
        <br></br>
      </div>
    </div>
  ));

  return (
    <div className="entireHome">
      <h1>Find a perfect pet!</h1>

      <h2>
        Filter by type:
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          {uniqueTypes.map((type, index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </h2>
      <>
        {filterPet.map((pet) => {
          return (
            <div key={pet.id}>
              <div className="animalItself">
                {pet.animal} ${pet.price} Type: {pet.type}
                <br></br>
                <Link key={state.id} to={`/PetPage/${state.id}`}>
                  <p>details</p>
                </Link>
                {basket}
              </div>
            </div>
          );
        })}
      </>
      <br></br>
      <h2>All pets in our shop:</h2>
      <div className="listByPrice">{list}</div>
      <button onClick={handleFilterByPrice}>filter by price</button>
    </div>
  );
}
