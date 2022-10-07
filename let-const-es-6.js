let myMoney = 100;
myMoney = 200; // let is reassignable allow
// console.log(myMoney);

const myName = 'Akib Rayhan ';
// myName = 'Kuddus';  // const is not reassignable
// console.log(myName);
const year = myName + 20 + ' years old'; // const is useable but not reassignable
// console.log(year);

const numbers = [23, 56, 89, 23, 89, 45];
// numbers = [23, 56, 44, 22, 12, 67]; // const numbers array not reassignable...
numbers.push(54); // push aviable
numbers[2]= 233;
// console.log(numbers);

const employee = {
    name: 'Motin',
    year: 23,
    salary: 20000
}

/* employee = {
    name: 'Mike', // not reassignable Object
    year: 23,
    salary: 20000
} */
// console.log(employee);

employee.name = 'Mike';
// console.log(employee);
