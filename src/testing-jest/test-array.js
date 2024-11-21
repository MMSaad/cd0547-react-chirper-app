export const checkArray = (arr) => {
  if (arr === null) {
    return null;
  }
  return arr.map((item) => (item < 100 ? item : 100));
};
