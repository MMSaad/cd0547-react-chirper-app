
import { receiveEmployees, receiveImages, receiveUhf } from "./users";
import { receiveBle } from "./ble";
// import setAuthUser from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// const AUTH_USER_ID = "tylermcginnis";

const handleReceiveData = (result) => {
  return (dispatch) => {
    dispatch(showLoading());
    console.log(result.images);
     dispatch(receiveUhf(result.uhf));
    dispatch(receiveBle(result.ble));
    dispatch(receiveImages(result.pilgrims));
      dispatch(receiveEmployees(result.employees));
     dispatch(hideLoading());
  };
};

export default handleReceiveData;
