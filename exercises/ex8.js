/*
The input data for this exercise will be two dimensional array (an array of arrays), where each 
sub-array will have two numeric values. For example:
[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat
 that value.

Instruction
Create a function named repeatNumbers that will return a string with each of the given values 
repeated the appropriate number of times, if there are multiple sets of values each set should be 
separated by a comma. If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function(data) {

  let result = "";

  for(i= 0; i < data.length; i++)
  {
    let data2 = data[i];

    for(let j=1; j<= data2[1]; j++){
       result += ""+ data2[0];
      //console.log(data2[1]);
    }

    if (result !== "")
    {result += ", "}
  }
  return result;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292


