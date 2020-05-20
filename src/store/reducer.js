import { combineReducers } from "redux";
import homePageSliceReducer from "./homePage/reducer";
import cartSliceReducer from "./homePage/reducer2";

const reducer = combineReducers({
  homePage: homePageSliceReducer,
  cart: cartSliceReducer,
  // etc.
});

export default reducer;
