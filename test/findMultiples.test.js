const findMultiples = require("../src/findMultiples");

test("return list of multiples", () => {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
  });
// write test cases to ensure findMultiples() works as expected
