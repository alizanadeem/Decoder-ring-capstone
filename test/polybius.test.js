// const expect = require("chai").expect;
// const polybius = require("../src/polybius");

// describe("polybius test for project", () => {
  
//   it("should decode input text correctly", () => {
//     const expected = "message"; // This is the correct expected value
//     const actual = polybius.polybius("23513434112251", false);
//     expect(actual).to.equal(expected);
//   });

//   it("should decode input text correctly with (i/j)", () => {
//     const expected = "(i/j)(i/j)"; // This is the corrected expected value
//     const actual = polybius.polybius("4242", false);
//     expect(actual).to.equal(expected);
//   });

//   it("should return false if decoding input with odd number of characters", () => {
//     const input = '235134341122511';
//     const expected = false;
//     const actual = polybius.polybius(input);
//     expect(actual).to.equal(expected);
//   });

//   it("should encode input text correctly with (i/j)", () => {
//     const expected = "4242";
//     const actual = polybius.polybius("ij");
//     expect(actual).to.equal(expected);
//   });

//   // Add more test cases as needed
// });

// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("function polybius()", () => {
  it("checks for polybius function()", () => {
    expect(polybius).to.be.a("function");
  });
  it("translates letter i and j to 42 when encoding", () => {
    const message = "ij";

    const expected = "4242";
    const actual = polybius(message);

    expect(actual).to.equal(expected);
  });
  it("translates 42 to both 'i' and 'j' when decoding", () => {
    const message = "4242";

    const actual = polybius(message, false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it(" should ignore capital letters", () => {
    const message = "A Message";

    const expected = "11 23513434112251";
    const actual = polybius(message);

    expect(actual).to.equal(expected);
  });
  it(" should maintain spaces in message before or decoding", () => {
    const message = "Water in a Jug";

    const expected = "2511445124 4233 11 425422";
    const actual = polybius(message);

    expect(actual).to.equal(expected);
  });
});
  
