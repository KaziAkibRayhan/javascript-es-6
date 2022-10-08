class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start support session ${time}`);
    }
    startQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
}

const Ajmol = new Instructor('Ajmol', 'Dhaka');
console.log(Ajmol);
// Ajmol.startSupportSession(9.00);