const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution test for project", () => {
it("should encode input text correctly", () => {
  const expected = "elp xhm x omxpjucpw nmhdlf";
  const actual = substitution.substitution("You are a beautiful person", "xoyqmcgrukswaflnthdjpzibev");
  expect(actual).to.equal(expected);
});


  it("should decode input text correctly", () => {
  const expected = "you are an excellent spy";
  const actual = substitution.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
  expect(actual).to.equal(expected);
});


 it("should encode input text correctly with custom alphabet", () => {
  const expected = "ngx qkt q wtqxzoyxs htklgf";
  const actual = substitution.substitution("You are a beautiful person", "qwertyuiopasdfghjklzxcvbnm");
  expect(actual).to.equal(expected);
});


  it("should return false if alphabet is missing", () => {
    const actual = substitution.substitution("Hello World", "");
    expect(actual).to.equal(false);
  });

  it("should return false if alphabet is not 26 characters long", () => {
    const actual = substitution.substitution("Hello World", "abc");
    expect(actual).to.equal(false);
  });

  it("should return false if alphabet contains duplicate characters", () => {
    const actual = substitution.substitution("Hello World", "abcdefghiabcdefghi");
    expect(actual).to.equal(false);
  });

  // Add more test cases as needed
});
