import { combineReducers } from "redux";
import homePageSliceReducer from "./homePage/reducer";

const reducer = combineReducers({
  homePage: homePageSliceReducer,
  // etc.
});

export default reducer;
