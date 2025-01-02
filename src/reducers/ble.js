import { combineReducers } from "redux";
import uhf from "./uhf";
import { loadingBarReducer } from "react-redux-loading-bar";
import ble from "./tweets";
import images from "./images";
import employees from "./employees";

export default combineReducers({
  uhf,
  ble,
  images,
  employees,
  loadingBar: loadingBarReducer,
});
