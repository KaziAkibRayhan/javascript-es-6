const user = [{ name: 'Akib Rayhan', age: 22, salary: 20000, adddress: 'Dhaka' }]
// console.log(user[0].name);

const data = {
    count: 500,
    data: [
        { id: 1, name: 'Salam', position: 'leader' },
        { id: 2, name: 'Alam', position: 'leader' }
    ]
}
// console.log(data.data[0].position);

const employee = {
    id: 1,
    name: 'Salam',
    adddress:{
        street: {
            first: '45/A Rampura',
            second: 'second floor',
            third: 'left side'
        },
        postOffice: 'Rampura Model City'
    }
}
const employeeStreet = employee.adddress.streets?.second; // Optional Chaining
console.log(employeeStreet);