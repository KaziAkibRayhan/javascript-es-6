const greetings = () => console.log('Hello');
// greetings();

const add1 = num => num * 2;
const add2 = () => console.log('hello');
const add3 = (num1, num2) => num1 * num2;
const add4 = (num1, num2, num3) => {
    const first = num2 * num1;
    const second = num3 * num2;
    return first + second;
};

console.log(add1(5));
console.log(add3(5, 6));
console.log(add4(5, 6, 7));

