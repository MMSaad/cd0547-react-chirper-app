import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import setAuthUser from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTH_USER_ID = "tylermcginnis";

const handleReceiveData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_USER_ID));
      dispatch(hideLoading());
    });
  };
};

export default handleReceiveData;
