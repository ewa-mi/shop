import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSettingPets } from "../store/homePage/selectors.js";
import { selectPetType } from "../store/homePage/selectors.js";

export default function HomePage() {
  const settingPets = useSelector(selectSettingPets);
  // console.log("What is settingPets?", settingPets);
  const filterSelectPetType = useSelector(selectPetType);

  const [petType, setPetType] = useState("bird");
  console.log("what is petType?", petType);

  const filterPet = settingPets.homePage.filter(
    (pet) =>
      // console.log("What to filter?", pet.id);
      pet.type === petType
  );
  // console.log("What is filterPet?", filterPet);

  return (
    <div>
      <h1>Hello!</h1>
      <h2>
        Filer by:
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          {filterSelectPetType.map((type) => {
            // console.log("What are the types?", type.type);
            return (
              <option key={type.id} value={type.type}>
                {type.type}
              </option>
            );
          })}
        </select>
      </h2>
      <>
        {filterPet.map((pet) => {
          // console.log("Check pet:", pet.animal);
          return (
            <div key={pet.id}>
              <div>
                {pet.animal} {pet.price} Type: {pet.type}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}
