export const RECEIVE_UHF = "RECEIVE_UHF";

export const receiveUhf = (uhf) => {
  return {
    type: RECEIVE_UHF,
    uhf,
  };
};


export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images,
  };
};
