import { RECEIVE_BLE } from "../actions/ble";

function ble(
  state = {
    totalToday: 0,
    twoTimesToday: 0,
    threeTimesToday: 0,
    moreThanThreeTimesToday: 0,
    scaned: 0,
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case RECEIVE_BLE:
      return {
        ...state,
        ...action.ble,
      };
    default:
      return state;
  }
}

export default ble;
