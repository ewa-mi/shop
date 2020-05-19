import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectState } from "../store/homePage/selectors.js";
import "./HomePage.css";

export default function HomePage() {
  const state = useSelector(selectState);
  const [petType, setPetType] = useState("bird");
  const filterPet = state.filter((pet) => pet.type === petType);
  const types = state.map((pet) => pet.type);
  const uniqueTypes = [...new Set(types)];
  const [filterByPrice, setFilterByPrice] = useState([]);

  const result = filterByPrice.length ? filterByPrice : state;

  const list = result.map((pet) => (
    <div key={pet.id}>
      <div className="animalItself">
        {" "}
        {pet.animal} ${pet.price} Type:{pet.type}{" "}
      </div>
    </div>
  ));

  const handleFilterByPrice = () => {
    const animalsByPrice = state.sort(function (a, b) {
      return a.price - b.price;
    });

    setFilterByPrice(animalsByPrice);
  };

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
