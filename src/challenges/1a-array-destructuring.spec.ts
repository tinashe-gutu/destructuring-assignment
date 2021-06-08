import { firstMeal, secondMeal, thirdMeal } from "./1a-array-destructuring";

test("meal variables have correct values", () => {
  expect(firstMeal).toBe("Breakfast");
  expect(secondMeal).toBe("Lunch");
  expect(thirdMeal).toBe("Dinner");
});
