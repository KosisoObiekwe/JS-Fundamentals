#!/usr/bin/node
function add(a, b) {
  a = typeof a === 'number' ? a : 0;
  b = typeof b === 'number' ? b : 0;
  return a + b;
}

const num1 = process.argv[2] ? parseInt(process.argv[2]) : 0;
const num2 = process.argv[3] ? parseInt(process.argv[3]) : 0;
console.log(add(num1, num2));