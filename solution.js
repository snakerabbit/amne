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

//[1, 2, 3, 4, 5, 6, 7]
// n = 6
// k = 1
// windows = n-k + 1


function parseData(){
  n = parseInt(n);
  k = parseInt(k);
  // console.log(n);
  // console.log(k);

  averagePrices = averagePrices.split(' ').map(Number);
  // console.log(averagePrices);
  numIncreasingSubranges(averagePrices);
}

function numIncreasingSubranges(array){
  // let numWindows = n-k+1;
  for(let i = 0; (k+i)<array.length + 1; i++){
    let subArray = averagePrices.slice(i, k+i);
    // console.log(thisThing(subArray));
  }
    // let subArray = averagePrices.slice(1, 4);
    // console.log(thisThing(subArray));
}

function thisThing(arr){
  let count = 0;
  for(let i=0; i<arr.length-1; i++){
    count += numIncreasing(arr.slice(i, arr.length));
  }
  return count;
}

function numIncreasing(arr){
  if (arr.length <= 1 ){
    return 0;
  }
  let count = 0;
  let previous = arr.slice(0, arr.length - 1);
  let previousNum = numIncreasing(previous);
  let previousLast = previous[previous.length - 1];
  if (previousLast < arr[arr.length - 1]){
    count = previousNum + 1;
  } else if (previousLast > arr[arr.length-1]){
    count = previousNum - 1;
  } else {
    count = previousNum;
  }

  return count;

}

getData();
