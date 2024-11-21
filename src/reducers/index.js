import { combineReducers } from "redux";
import uhf from "./uhf";
import tweets from "./tweets";
import authUser from "./authUser";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  uhf,
  loadingBar: loadingBarReducer,
});
