import { abbreviation, capital, population } from "./0b-object-destructuring";

test("country variables have correct values", () => {
  expect(abbreviation).toBe("UK");
  expect(capital).toBe("London");
  expect(population).toBe(67000000);
});
