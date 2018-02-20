const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  crlfDelay: Infinity
});

var n;
var k;
var averagePrices;

//retrieves data from txt file
function getData() {
  let counter = 0;
  rl.on('line', (line) => {
    counter += 1;
    if (counter === 1){
      n = line[0];
      k = line[2];
    } else {
      averagePrices = line;
    }

    if(n && k && averagePrices){
      parseData();
    }
    rl.close();
  });
}


function parseData(){
  console.log(n);
  console.log(k);
  averagePrices = averagePrices.split(' ').map(Number);
  console.log(averagePrices);

}

getData();
