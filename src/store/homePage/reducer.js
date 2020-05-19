const initialState = {
  parrot: {
    id: 1,
    animal: parrot,
    price: "$10",
    type: "bird",
  },
  ferret: {
    id: 2,
    animal: ferret,
    price: "$40",
    type: "rodent",
  },
  gecko: {
    id: 3,
    animal: gecko,
    price: "$55",
    type: "lizard",
  },
  rabbit: {
    id: 4,
    animal: rabbit,
    price: "$38",
    type: "rodent",
  },
};

export default function reducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_TO_CART": {
      newState.adding = action.payload;
      break;
    }
  }
}
