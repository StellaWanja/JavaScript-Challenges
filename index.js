// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number. 
// eg '(123) 456-7890'
function createPhoneNumber(number) {
    return `(${number.slice(0, 3).join('')}) ${number.slice(3, 6).join('')}-${number.slice(6).join('')}`;
}

// Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
function findOdd(A) {
    //store info about how many times each integer appears
    let numOfCounts = {};  
    
    //count number of times integer appears in array
    for(let i=0; i<A.length;i++){
      let num = A[i];
      numOfCounts[num] = numOfCounts[num] ? numOfCounts[num]+1:1;
    }
    let n;
    let countInt;
    
    for(n in numOfCounts){
      if(numOfCounts[n] % 2 !== 0){
        countInt = numOfCounts[n];
      }
    }
    let valInString = Object.keys(numOfCounts).find(key => numOfCounts[key] === countInt);
    
    return parseInt(valInString);
  }