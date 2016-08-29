// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function test(){
  return 4;
}

test();

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
function test2(a, b) {
  return a*b;
}

test2(2,3);

// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var test3 = function(argumentA) {
  argumentA = "I am smart";

  console.log(argumentA);
};

test3();

// 4 - Write a function declaration
// that takes a number and divides it
// by two.
function test4(number){
  number /= 2;

  return number;
}

test4(10);

// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.

function test2(a, b) {
  return a*b;
}

function test4(number){
  number /= 2;

  return number;
}

console.log(test4(test2(10,20))); //answer is 100
