// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number. 
// eg '(123) 456-7890'
function createPhoneNumber(number) {
    return `(${number.slice(0, 3).join('')}) ${number.slice(3, 6).join('')}-${number.slice(6).join('')}`;
}