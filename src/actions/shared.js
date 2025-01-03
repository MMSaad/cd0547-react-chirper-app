
import { receiveCapacity, receiveEmployees, receiveImages, receiveUhf } from "./users";
import { receiveBle } from "./ble";


// const AUTH_USER_ID = "tylermcginnis";

const handleReceiveData = (result) => {
  return (dispatch) => {
     dispatch(receiveUhf(result.uhf));
    dispatch(receiveBle(result.ble));
    dispatch(receiveImages(result.pilgrims));
    dispatch(receiveEmployees(result.employees));
    dispatch(receiveCapacity(result.capacity));
  };
};

export default handleReceiveData;
