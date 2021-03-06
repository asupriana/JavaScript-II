// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHi() { // begin closure
  let name = "Doe";  // local scope
  
  return function () { // begin closure II
    console.log(`Hi: ${name}`);
  };                  // end closure II
}                   // end closure
let name = "Jane";  // global scope
let work = sayHi(); // global scope
work();


// ==== Challenge 2: Create a counter function ====
let count = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return ++count;

};

// console.log(counter());
// console.log(counter());
// console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = {
  count: 0,
  increment: () => { return ++count },
  decrement: () => { return --count },
  
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
