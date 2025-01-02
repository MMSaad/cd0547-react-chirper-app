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

export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";

export const receiveEmployees = (employees) => {
  return {
    type: RECEIVE_EMPLOYEES,
    employees,
  };
};
