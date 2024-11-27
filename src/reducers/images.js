import { RECEIVE_IMAGES } from "../actions/users";

const images = (
  state = [],
  action
) => {
  
  switch (action.type) {
    case RECEIVE_IMAGES:
      console.log(action, action.images);
      var images = action.images;
      var result = {
        ...state,
        ...images,
      };
      console.log(result);
      return action.images;
    default:
      return state;
  }
};
export default images;
