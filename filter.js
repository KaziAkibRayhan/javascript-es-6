const numbers = [34, 56, 90, 23, 54, 22, 12, 18, 15, 67, 98];
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumber);
const largeNumbers = numbers.filter(num => num > 20);
// console.log(largeNumbers);
const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('even number is: ', evenNumbers);



const products = [
    { id: 1, name: 'Laptop', price: 23000 },
    { id: 2, name: 'iPhone', price: 21000 },
    { id: 3, name: 'iPad', price: 24000 },
    { id: 4, name: 'MacBook', price: 25000 },
    { id: 5, name: 'MacBook Pro', price: 12000 },
];

const lowestProducts = products.filter(pd => pd.price < 22000 );
console.log(lowestProducts);
const highestProducts = products.filter(pd => pd.price > 22000 );
console.log(highestProducts);