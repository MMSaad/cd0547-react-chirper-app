export const RECEIVE_UHF = "RECEIVE_UHF";

export const receiveUhf = (uhf) => {
  return {
    type: RECEIVE_UHF,
    uhf,
  };
};