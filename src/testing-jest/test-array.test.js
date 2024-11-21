import { checkArray } from "./test-array";

describe("checkArray", () => {
  it("should return null if the input is null", () => {
    const result = checkArray(null);
    expect(result).toBeNull();
  });
  it("should return an array with all items less than 100", () => {
    const result = checkArray([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
  it("should return an array with all items equal to 100", () => {
    const result = checkArray([100, 200, 300]);
    expect(result).toEqual([100, 100, 100]);
  });
});
