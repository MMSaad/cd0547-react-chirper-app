
import { receiveUhf } from "./users";
import { receiveTweets } from "./tweets";
// import setAuthUser from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// const AUTH_USER_ID = "tylermcginnis";

const handleReceiveData = (result) => {
  return (dispatch) => {
    dispatch(showLoading());
    //console.log(result.uhf);
     dispatch(receiveUhf(result.uhf));
    //  dispatch(receiveTweets(result.ble));
     dispatch(hideLoading());
  };
};

export default handleReceiveData;
