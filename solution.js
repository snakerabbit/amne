const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  crlfDelay: Infinity
});

var n, k, averagePrices;

//retrieves data from txt file
function getData() {
  let counter = 0;
  rl.on('line', (line) => {
    counter += 1;
    if (counter === 1){
      let lineArray = line.split(' ');
      n = lineArray[0];
      k = lineArray[1];
    } else {
      averagePrices = line;
    }

    if(n && k && averagePrices){
      parseData();
    }
    rl.close();
  });

}

//parses n and k into integers, and averagesPrices into array of integers
function parseData(){
  n = parseInt(n);
  k = parseInt(k);
  averagePrices = averagePrices.split(' ').map(Number);

  numIncreasingSubranges(averagePrices);

}

//separates array into subsets of k length, and finds number of increasing ranges
function numIncreasingSubranges(array){
  for(let i = 0; (k+i)<array.length + 1; i++){
    let subArray = averagePrices.slice(i, k+i);
    console.log(numIncreasing(subArray));
  }

}

//finds number of increasing ranges within subset
function numIncreasing(array){
  let count = 0;
  for(let i=0; i< array.length; i++){
    count += num(array.slice(i, array.length));
  }
  return count;
}
//recursive function to find all ranges within a range
function num(array){
  if (array.length <= 1){
    return 0;
  }

  let count = num(array.slice(0, array.length - 1));
  if(isIncreasing(array)){
    count += 1;
  } else if (isDecreasing(array)){
    count -= 1;
  }
  return count;
}


//determines if entire array is increasing
function isIncreasing(array){
  for(let i =0; i<array.length - 1; i++){
    if(array[i + 1] < array[i]){
      return false;
    }
  }

  return true;
}

//determines if entire array is decreasing
function isDecreasing(array){
  for(let i =0; i < array.length - 1; i++){
    if(array[i] < array[i + 1]){
      return false;
    }
  }
  return true;
}

//calls function
getData();
