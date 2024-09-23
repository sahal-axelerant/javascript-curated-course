
let a = 'green';
let b = 'red';

// Log before swapping.
console.log("Before swapping");
console.log("a = " + a);
console.log("b = " + b);

// Swap the variables using a temp variable.
let c = a;
a = b;
b = c;

// Log after swapping.
console.log("After swapping");
console.log("a = " + a);
console.log("b = " + b);