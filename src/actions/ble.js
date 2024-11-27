

export const RECEIVE_BLE = "RECEIVE_BLE";


export const receiveBle = (ble) => {
  return {
    type: RECEIVE_BLE,
    ble,
  };
};
