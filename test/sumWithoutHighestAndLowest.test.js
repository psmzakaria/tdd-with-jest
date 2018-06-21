const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

test("return sum of numbers in an array excluding the lowest and highest values", () => {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toBe(16);
});
// test cases
