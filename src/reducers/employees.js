import { RECEIVE_EMPLOYEES } from "../actions/users";

const employees = (
  state = [],
  action
) => {
  
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      console.log(action, action.employees);
      var employees = action.employees;
      var result = {
        ...state,
        ...employees,
      };
      console.log(result);
      return action.employees;
    default:
      return state;
  }
};
export default employees;
