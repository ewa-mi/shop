import React from "react";
import { useSelector } from "react-redux";
import { selectSettingPets } from "../store/homePage/selectors.js";

export default function HomePage() {
  const settingPets = useSelector(selectSettingPets);
  // console.log("What is settingPets?", settingPets);

  return (
    <div>
      <h1>Hello!</h1>

      <>
        {settingPets.homePage.map((pet) => {
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
