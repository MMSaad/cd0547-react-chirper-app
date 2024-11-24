import { combineReducers } from "redux";
import uhf from "./uhf";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  uhf,
  loadingBar: loadingBarReducer,
});
