// 1. Convert to an arrow function.
// function greet() {
//     return "Hello, world!";
// }
  
const greet = () => {
  return "Hello, World"
} 
// 2. Convert to an arrow function.
// function double(number) {
//     return number * 2;
// }
  
const double = (number) => {
  return number * 2 
}
// 3. Convert to an arrow function.
// function multiply(a, b) {
//     return a * b;
// }

const multiply = (a, b) => {
  return a * b
}

console.log(greet())  // should print "Hello, world!"
console.log(double(3)) // should print 6
console.log(multiply(3, 7)) // should print 21
  
  
