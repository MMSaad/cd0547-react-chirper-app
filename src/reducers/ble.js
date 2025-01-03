import { combineReducers } from "redux";
import uhf from "./uhf";
import ble from "./tweets";
import images from "./images";
import employees from "./employees";
import capacity from "./capacity";

export default combineReducers({
  uhf,
  ble,
  images,
  employees,
  capacity
});
