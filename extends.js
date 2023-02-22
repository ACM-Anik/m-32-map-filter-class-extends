class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} think you for your feedback.`)
    }
}

class Instructor extends teamMember {
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create qui for module ${module}`)
    }
}


class Developer extends teamMember {
    designation = 'Website and app developer'
    team = 'Developer team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(time){
        console.log(`Start the support session at ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}


class jobPlacement extends teamMember {
    designation = 'Job Placement Commando'
    team = 'Job placement team'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    developFeature(time){
        console.log(`Start the support session at ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}

const alia = new Developer('Alia', 'Mumbai', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new jobPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha);