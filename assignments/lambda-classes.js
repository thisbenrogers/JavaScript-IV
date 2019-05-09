// CODE here for your Lambda Classes
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorObj) {
    super(instructorObj);
    this.specialty = instructorObj.specialty;
    this.favLanguage = instructorObj.favLanguage;
    this.catchPhrase = instructorObj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentObj) {
    super(studentObj);
    this.previousBackground = studentObj.perviousBackground;
    this.className = studentObj.className;
    this.listsSubjects = studentObj.listsSubjects;
  }
  listsSubjects() {
    this.listsSubjects.forEach(function(value) {
      return value;
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const annie = new Instructor({
  name: "Annie",
  age: 29,
  location: "Gloucester, MA",
  gender: "F",
  specialty: "Lecturing",
  favLanguage: "Ubbi Dubbi",
  catchPhrase: "That's just how it be sometime."
});

const arthur = new Instructor({
  name: "Arthur",
  age: 32,
  location: "Dutch Harbor, AK",
  gender: "M",
  specialty: "Taking names",
  favLanguage: "Typescript",
  catchPhrase: "Well I never!"
});

const betty = new Student({
  name: "Betty",
  age: 24,
  location: "Publo, CO",
  gender: "F",
  previousBackground: "Welder",
  className: "WEB20",
  listsSubjects: ["CSS", "HTML", "JS", "React"]
});

const bobby = new Student({
  name: "Bobby",
  age: 26,
  location: "Slidell, LA",
  gender: "M",
  previousBackground: "Synthpunk Frontman",
  className: "WEB20",
  listsSubjects: ["CSS", "HTML", "JS", "React", "Vue"]
});

const bertrand = new Student({
  name: "Bertrand",
  age: 87,
  location: "Miami, FL",
  gender: "they/their",
  previousBackground: "Burlesque Dancer",
  className: "WEB20",
  listsSubjects: ["CSS", "HTML", "JS", "React", "Angular"]
});

const charlie = new ProjectManager({
  name: "Charlie",
  age: 33,
  location: "Duluth, MN",
  gender: "M",
  specialty: "Driving Backwards",
  favLanguage: "Bash",
  catchPhrase: "Scheiße Minnelli",
  gradClassName: "WEB17",
  favInstructor: "Dan Levy"
});

const charlotte = new ProjectManager({
  name: "Charlotte",
  age: 25,
  location: "remote",
  gender: "F",
  specialty: "Kicking Ass",
  favLanguage: "JavaScript",
  catchPhrase: "I'm gonna kick your ass",
  gradClassName: "WEB18",
  favInstructor: "Dan Levy"
});

const log = console.log;

log(annie.name);
log(charlotte.gender);
log(charlie.standUp("WEB20_AH"));
log(bertrand.age);
log(bobby.speak());
log(charlotte.debugsCode(bobby, "preprocessing"));
log(betty.PRAssignment("React debugging"));
log(charlie.grade(charlotte, "Javascript 3"));
