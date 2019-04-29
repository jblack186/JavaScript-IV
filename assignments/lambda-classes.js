// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak() {
        `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instrAttrs) {
        super(instrAttrs);
        this.specialty = instrAttrs.specialty;
        this.favLanguage = instrAttrs.favLanguage;
        this.catchPhrase = instrAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} reveives a perfect score on ${subject}`); 

    }
}

class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
    }
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++)
        console.log(this.favSubjects[i]);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}.`);
    }
}

class ProjectManagers extends Person {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);

    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const jamison = new Student({
    name: 'Jamison',
    previousBackground: 'Custodian',
    className: 'WEBPT6',
    favSubjects: ['JavaScript', 'CSS', 'Html']
});

const steve = new ProjectManagers({
    name: 'Steve',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});
