const initialState = { cart: [] };

export default function cartSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default: {
      return state;
    }
  }
}

//AS we have define as the action, we decide how the state will change.
//Add action.payloa to whatever inside the cart
//Take the click and add to the redux store
