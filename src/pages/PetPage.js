import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectState } from "../store/homePage/selectors.js";
import "./PetPage.css";

export default function PetPage() {
  const { id } = useParams();
  const state = useSelector(selectState);

  const specificPet = state.filter((element) => element.id === parseInt(id));

  const pet = specificPet[0];
  console.log("state here", state);

  return (
    <div className="entirePet">
      <h4>
        Hi, this is our awesome <span className="name">{pet.animal}</span>
      </h4>
      <p>Price: ${pet.price}</p>
      <p>Type: {pet.type}</p>
      <br></br>
      <p className="details">Details:</p>
      <p>Color: {pet.details.color}</p>
      <p>Weight: {pet.details.weight}</p>
      <p>Age: {pet.details.age}</p>
      <p>Personality: {pet.details.personality}</p>
    </div>
  );
}
