const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((previous, number) => previous + number, 0);
const total = numbers.reduce((previous, number) =>{
    console.log(previous, number);
    return previous + number;
}, 0);
console.log(total);