import { combineReducers } from "redux";
import uhf from "./uhf";
import { loadingBarReducer } from "react-redux-loading-bar";
import ble from "./tweets";
import images from "./images";

export default combineReducers({
  uhf,
  ble,
  images,
  loadingBar: loadingBarReducer,
});
