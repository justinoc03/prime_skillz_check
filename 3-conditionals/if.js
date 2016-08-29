// 1 - Write a statement that
// console logs "Hello" if
// the two variables are equal
var first = 3;
var second = 5;

if (first == second) {
  console.log('Hello');
} else {
  false;
}

//the variables are not equal so they return false (although false was not needed in the assignment)

// -------------------------------//

// 2 - Expand your answer above to
// console log "Goodbye" if
// the variables are not equal
var first = 3;
var second = 5;

if (first == second) {
  console.log('Hello');
} else { 
  console.log('Goodbye'); //first and second are not equal, console.log prints goodbye
}


// 3 - Write a statement that assigns the value of the addition of the first & second variables to a new variable called third IF first is greater than second.
// If second is greater than first assign the difference of the first & second variables to third.
var first = 3;
var second = 5;

if (first > second) {
  var third = first + second;
} else {
  var third = second - first;
}
console.log(third); //second is greater than first, so the difference is 2
