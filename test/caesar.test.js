// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar test for project", () => {
  it("should return false if the shift amount is 0", () => {
    const expected = false;
    const actual = caesar.caesar("input text", 0, true);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift amount is < -25", () => {
    const expected = false;
    const actual = caesar.caesar("input text", -30, true);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift amount is > 25", () => {
    const expected = false;
    const actual = caesar.caesar("input text", 30, true);
    expect(actual).to.equal(expected);
  });

  it("should correctly encode input text with positive shift", () => {
    const expected = "uryyb";
    const actual = caesar.caesar("hello", 13, true);
    expect(actual).to.equal(expected);
  });

  it("should correctly decode input text with negative shift", () => {
    const expected = "hello";
    const actual = caesar.caesar("uryyb", 13, false);
    expect(actual).to.equal(expected);
  });

  // Add more test cases as needed
});