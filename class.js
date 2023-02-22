// syntactic sugar


class Instructor {
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create qui for module ${module}`)
    }
}
const bigB = new Instructor('bigB', 'Mumbai');
console.log(bigB);
bigB.startSupportSession('9.00 pm');
bigB.createQuiz(60);

const salmon = new Instructor('Salmon fish', 'mumbai');
console.log(salmon);