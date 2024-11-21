import { RECEIVE_UHF } from "../actions/users";

const uhf = (
  state = {
    totalToday: 0,
    twoTimesToday: 0,
    threeTimesToday: 0,
    moreThanThreeTimesToday: 0,
    scaned: 0,
  },
  action
) => {
  //console.log(action,action.uhf);
  switch (action.type) {
    case RECEIVE_UHF:
      return {
        ...state,
        ...action.uhf,
      };
    default:
      return state;
  }
};
export default uhf;
