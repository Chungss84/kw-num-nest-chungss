const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(3) should be true", () => {
    expect(lib.prime(3)).toBe(true);
});
test("prime(4) should be false", () => {
    expect(lib.prime(4)).toBe(false);
});

test("factorial(5) should return 120", () => {
    expect(lib.factorial(5)).toBe(120);
});
test("factorial(15) should return 1307674368000", () => {
    expect(lib.factorial(15)).toBe(1307674368000);
});
test("factorial(-1) should return -1 for negative input", () => {
    expect(lib.factorial(-1)).toBe(-1);
});
test("factorial(16) should return -1 for greater than 15 input", () => {
    expect(lib.factorial(16)).toBe(-1);
});
