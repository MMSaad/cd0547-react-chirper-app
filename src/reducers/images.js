import {  RECEIVE_IMAGES } from "../actions/users";

const images = (
  state = [],
  action
) => {
  
  switch (action.type) {
    case RECEIVE_IMAGES:
  
      var images = action.images;
      var result = {
        ...state,
        ...images,
      };
  
      return action.images;
    default:
      return state;
  }
};
export default images;
