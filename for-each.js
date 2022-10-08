const products = [
    { id: 1, name: 'Laptop', price: 23000 },
    { id: 2, name: 'iPhone', price: 21000 },
    { id: 3, name: 'iPad', price: 24000 },
    { id: 4, name: 'MacBook', price: 25000 }
];

const items  = products.map(pd => pd.name);
items.forEach(item => console.log(item))