// CODE here for your Lambda Classes
class Person {
    constructor(name) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak() {
        `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(name) {
        super(name);
        this.specialty = 'redux';
        this.favLanguage = ['JavaScript', 'Python', 'Elm'];
        this.catchPhrase = `Don't forget the homies`;
    }
    
}