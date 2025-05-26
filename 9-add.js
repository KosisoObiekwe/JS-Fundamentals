function add(a, b) {
  a = isNaN(a) ? 0 : a;
  b = isNaN(b) ? 0 : b;
  return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
console.log(add(num1, num2));