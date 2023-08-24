// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const lookUp = "abcdefghijklmnopqrstuvwxyz";
  
  function shifter(input, shift) {
    const inputString = input.toLowerCase();
    if(!lookUp.includes(inputString)) return inputString;
    let index = lookUp.indexOf(inputString);
    index = index + shift;
    if(index > 25) index = index - 26;
    else if (index < 0) index = index + 26;
    
    return lookUp[index];
  }
  
  function encoder(input, shift) {
    if (shift === 0 || shift < -25 || shift > 25) return false
    console.log("input: ", input, shift)
    let output = input.split("").reduce((output, character) => {
      return output + shifter(character, shift)
    }, "")
    return output;
  }
  
  

  function caesar(input = "", shift = 0, encode = true) {
    if (encode) return encoder(input, shift);
    
    shift = shift * -1;
    return encoder(input, shift);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };