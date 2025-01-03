import { RECEIVE_CAPACITY } from "../actions/users";

const capacity = (
  state = [],
  action
) => {
  
  switch (action.type) {
    case RECEIVE_CAPACITY:
      var capacity = action.capacity;
      var result = {
        ...state,
        ...capacity,
      };
      return action.capacity;
    default:
      return state;
  }
};
export default capacity;
