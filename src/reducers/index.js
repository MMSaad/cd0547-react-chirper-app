import { combineReducers } from "redux";
import users from "./users";
import tweets from "./tweets";
import authUser from "./authUser";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authUser,
  tweets,
  users,
  loadingBar: loadingBarReducer,
});
