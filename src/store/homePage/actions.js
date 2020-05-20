export const addToCart = (pet) => (dispatch) => {
  dispatch({ type: "ADD_TO_CART", payload: pet });
};

//Step 1. We create the action of type "ADD_TO_CART" and payload is the thing we receive from the click which is all the pet
//Step 2. Dispatch this action to the store. The above is the thunk function which we use to dispatch the action to the store
//Remember when we dispatch, we have to call the reducer function
