import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectState } from "../store/homePage/selectors.js";
import { setPets } from "../store/homePage/actions.js";
import "./HomePage.css";

export default function HomePage() {
  const state = useSelector(selectState);
  const [petType, setPetType] = useState("bird");
  const filterPet = state.filter((pet) => pet.type === petType);
  const types = state.map((pet) => pet.type);
  const uniqueTypes = [...new Set(types)];
  const dispatch = useDispatch();

  const list = state.map((pet) => (
    <div key={pet.id}>
      <div className="animalItself">
        {" "}
        {pet.animal} ${pet.price} Type:{pet.type}{" "}
      </div>
    </div>
  ));

  const filterByPrice = () => {
    const animalsByPrice = state.sort(function (a, b) {
      return a.price - b.price;
    });

    dispatch(setPets(animalsByPrice));
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
      <button onClick={filterByPrice}>filter by price</button>
    </div>
  );
}
