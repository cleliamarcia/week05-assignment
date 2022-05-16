/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert
 these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, 
and return the result.
*/

const camelCase = function(input) {
  // Your code here
  let newinput = "";
  for (let i = 0 ; i < input.length ; i++) {
    if (input[i] === " ") {
      i++;
      newinput += input[i].toUpperCase();
    } else {
      newinput += input[i];
    }
  }
  return newinput;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

