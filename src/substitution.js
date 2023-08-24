// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

 const abc = "abcdefghijklmnopqrstuvwxyz";
  
  function convert(char, alphabet, encode = true) {
    const input = char.toLowerCase();
    if (input === ' ') return input;
    
    let output;
    if (encode) {
     output = alphabet[abc.indexOf(input)];
    } else {
      output = abc[alphabet.indexOf(input)];
    }
    
    if (!output) output = input;
    return output;
    
  }
  function distinct(arr) {
    let outputArray = arr.filter((v, i, self) => {
        return i == self.indexOf(v);
    });
 
    return outputArray;
}
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    if(alphabet.length !== distinct(alphabet.split("")).length) return false
    let output = input.split("").reduce((output, character) => output + convert(character, alphabet, encode), "");
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
