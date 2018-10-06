
const expect = require("expect");

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

describe('test for sum function', () => {
  it('should return 3 when pass 1 and 2', () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it('should return 10 when pass 5 and 5', () => {
    expect(sum(5, 5)).toEqual(10);
  });
});

describe("test for multiply func.", () => {
  it("should return 9 when pass 3 and 3", () => {
    expect(multiply(3, 3)).toEqual(9);
  });
  it("should return 3 when pass 3 and 1", () => {
    expect(multiply(3, 1)).toEqual(3);
  });
});




