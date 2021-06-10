import calculateFraction from "./2b-calculate-fraction";

test("calculateFraction divides the numerator by a denominator", () => {
  expect(calculateFraction({ numerator: 6, denominator: 1 })).toBe(6);
  expect(calculateFraction({ numerator: 6, denominator: 2 })).toBe(3);
  expect(calculateFraction({ numerator: 6, denominator: 6 })).toBe(1);
  expect(calculateFraction({ numerator: 6, denominator: 12 })).toBe(0.5);
});
