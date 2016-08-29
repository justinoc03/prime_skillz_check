// 1 - Add the value 32 to the end of
// the following array.
var arr = [3, 4, 6, 0];

arr.push(32);
console.log('push: ', arr);

// 2 - Remove the values 4 & 6 from
// arr using the splice method.
arr.splice(1,2);
console.log('splice: ', arr);

// 3 - Use the sort method to order
// each array value from smallest
// to largest.
arr.sort();
console.log('sort: ', arr);

// 4 - Use the map method to
// halve the value of each
// value in the array. Assign the result to
// a new array called newArr. Console.log
// the new array.

var newArr = arr.map(function(n) {
  return n/2;
});

console.log('newArr: ', newArr);
