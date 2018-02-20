const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  crlfDelay: Infinity
});

let n, k;
let averagePrices;

rl.on('line', (line) => {
  
  console.log(`Line from file: ${line}`);
});
