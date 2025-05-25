function add(a, b) { return a + b; }
console.log(add(parseInt(process.argv[2]) || 0, parseInt(process.argv[3]) || 0));