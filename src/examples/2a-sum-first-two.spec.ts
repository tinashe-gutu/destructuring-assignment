import sumFirstTwo from "./2a-sum-first-two";

describe("sumFirstTwo adds together only the first two numbers in an array", () => {
  expect(sumFirstTwo([3, 9, 2])).toBe(12);
  expect(sumFirstTwo([3, 2, 9])).toBe(5);
  expect(sumFirstTwo([1, 1, 100, 100])).toBe(2);
  expect(sumFirstTwo([1, 1])).toBe(2);
});
