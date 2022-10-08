class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} thank you feed back`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start support session ${time}`);
    }
    startQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop feature ${feature}`);
    }
    release(version) {
        console.log(`please release the version ${version}`);
    }
}

const Sumaiya = new Developer('Sumaiya', 'Rampura, Dhaka', 'Node JS');
console.log(Sumaiya);
Sumaiya.provideFeedBack();
