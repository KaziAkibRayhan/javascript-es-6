const student = {
    name: 'Akib Rayhan',
    age: 23,
    grade: 'A',
    Roll: 937621
}

const { name, age, grade, Roll } = student;
console.log(name, age, grade, Roll);

const numbers = [34, 56, 90, 23, 54];
const [first, second, third, forth, fifth] = numbers;
console.log(second, third, forth, fifth, first);