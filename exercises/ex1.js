/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
//console.log(data);
let a = 0;
let b = 0;

for (let i= 0; i< data.length; i++){
   if (data[i] > a){
      a = data[i];
   }
   
   for(let j = 0; j < data.length; j++){
    if(data[j] < a && data[j] > b){
        b = data[j];
    }
   }
}

//console.log(a)
//console.log(b)
return (a + b);

};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

