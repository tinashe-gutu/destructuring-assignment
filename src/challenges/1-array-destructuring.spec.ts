import { firstMeal, secondMeal, thirdMeal } from "./1-array-destructuring";

test("meal variables have correct values", () => {
  expect(firstMeal).toBe("Breakfast");
  expect(secondMeal).toBe("Lunch");
  expect(thirdMeal).toBe("Dinner");
});
