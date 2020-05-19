import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSettingPets } from "../store/homePage/selectors.js";
import { selectPetType } from "../store/homePage/selectors.js";

export default function HomePage() {
  const settingPets = useSelector(selectSettingPets);
  const filterSelectPetType = useSelector(selectPetType);
  const [petPriceFilter, setPetPriceFilter] = useState(0);
  const [petType, setPetType] = useState("bird");

  const filterPet = settingPets.homePage.filter((pet) => pet.type === petType);
  const types = filterSelectPetType.map((pet) => pet.type);
  const uniqueTypes = [...new Set(types)];

  return (
    <div>
      <h1>Hello!</h1>
      <h2>
        Filer by:
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
              <div>
                {pet.animal} ${pet.price} Type: {pet.type}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}
