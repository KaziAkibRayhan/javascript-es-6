const numbers = [34, 56, 90, 23, 54, 22, 12, 18, 15, 67, 98];
const six = numbers.find(number => number % 6 === 0);
const sixAll = numbers.filter(num => num % 6 === 0);
console.log(six);
console.log(sixAll);
