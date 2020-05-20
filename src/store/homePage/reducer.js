const initialState = [
  {
    id: 1,
    animal: "parrot",
    price: 10,
    type: "bird",
    details: {
      color: "green",
      weight: "400 g",
      age: "5 months",
      personality: "cheerful",
    },
  },
  {
    id: 2,
    animal: "ferret",
    price: 40,
    type: "rodent",
    details: {
      color: "gray",
      weight: "1 kg",
      age: "8 months",
      personality: "full of energy",
    },
  },
  {
    id: 3,
    animal: "gecko",
    price: 55,
    type: "lizard",
    details: {
      color: "green",
      weight: "800 g",
      age: "11 months",
      personality: "calm",
    },
  },
  {
    id: 4,
    animal: "rabbit",
    price: 38,
    type: "rodent",
    details: {
      color: "black",
      weight: "500 g",
      age: "12 months",
      personality: "cheerful",
    },
  },
  {
    id: 5,
    animal: "guinea pig",
    price: 25,
    type: "rodent",
    details: {
      color: "brown",
      weight: "1 kg",
      age: "7 months",
      personality: "calm",
    },
  },
];

export default function homePageSliceReducer(state = initialState, action) {
  //   let newState = [...state];

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
