const initialState = [
  {
    id: 1,
    animal: "parrot",
    price: 10,
    type: "bird",
  },
  {
    id: 2,
    animal: "ferret",
    price: 40,
    type: "rodent",
  },
  {
    id: 3,
    animal: "gecko",
    price: 55,
    type: "lizard",
  },
  {
    id: 4,
    animal: "rabbit",
    price: 38,
    type: "rodent",
  },
];

export default function homePageSliceReducer(state = initialState, action) {
  // const newState = { ...state };

  // switch (action.type) {
  //   case "ADD_TO_CART": {
  //     newState.adding = action.payload;
  //     break;
  //   }
  //   default: {
  //     // do nothing
  //   }
  // }

  // return newState;
  switch (action.type) {
    default: {
      return state;
    }
  }
}
