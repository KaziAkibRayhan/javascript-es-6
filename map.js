const numbers = [34, 56, 90, 23, 54, 22];
const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

const products = [
    { id: 1, name: 'Laptop', price: 23000 },
    { id: 2, name: 'iPhone', price: 21000 },
    { id: 3, name: 'iPad', price: 24000 },
    { id: 4, name: 'MacBook', price: 25000 }
];

/* const items = products.map(pd => console.log(pd.name));
console.log(items); */

const getProductsName = products.map(pd => pd.name);
const getProductsPrice = products.map(pd => pd.price);
console.log(getProductsName);
console.log(getProductsPrice);

