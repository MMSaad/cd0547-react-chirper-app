import { RECEIVE_EMPLOYEES } from "../actions/users";

const employees = (
  state = [],
  action
) => {
  
  switch (action.type) {
    case RECEIVE_EMPLOYEES:

      var employees = action.employees;
      var result = {
        ...state,
        ...employees,
      };

      return action.employees;
    default:
      return state;
  }
};
export default employees;
