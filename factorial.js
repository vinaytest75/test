// factorial
var num = 5;

// using for loop
// var fact = 1;
// for (var i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// using Recursion
function factorial(n) {
  if (n == 0) {
    return 1;
  } else return n * factorial(n - 1);
}
console.log(factorial(num));
