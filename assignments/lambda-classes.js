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
  adjustGrade(student) {
    student.grade = Math.floor(
      student.grade + (Math.random() * (7 - -17) + -17)
    );
    return `${student.name} now has a grade of ${
      student.grade
    } for this class.`;
  }
}

class Student extends Person {
  constructor(studentObj) {
    super(studentObj);
    this.previousBackground = studentObj.previousBackground;
    this.className = studentObj.className;
    this.listsSubjects = studentObj.listsSubjects;
    this.grade = studentObj.grade;
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
  graduate() {
    if (this.grade < 70) {
      return `Get better grades, ${this.name}. This go 'round you only made a ${
        this.grade
      }. 👎`;
    } else {
      return `Congratulations ${this.name},since your grade is ${
        this.grade
      } you can graduate! ✨`;
    }
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
  listsSubjects: ["CSS", "HTML", "JS", "React"],
  grade: 95
});

const bobby = new Student({
  name: "Bobby",
  age: 26,
  location: "Slidell, LA",
  gender: "M",
  previousBackground: "Synthpunk Frontman",
  className: "WEB20",
  listsSubjects: ["CSS", "HTML", "JS", "React", "Vue"],
  grade: 92
});

const bertrand = new Student({
  name: "Bertrand",
  age: 87,
  location: "Miami, FL",
  gender: "they/their",
  previousBackground: "Burlesque Dancer",
  className: "WEB20",
  listsSubjects: ["CSS", "HTML", "JS", "React", "Angular"],
  grade: 99
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
  catchPhrase: "I'm gonna kick your ass (not really)",
  gradClassName: "WEB18",
  favInstructor: "Dan Levy"
});

const log = console.log;

log(annie.name); // Annie
log(charlotte.gender); // F
log(charlie.standUp("WEB20_AH")); // Charlie announces to WEB20_AH, @channel standy times!​​​​​
log(bertrand.age); // 87
log(bobby.speak()); // Hello my name is Bobby, I am from Slidell, LA.
log(bobby.previousBackground); // Synthpunk Frontman
log(charlotte.debugsCode(bobby, "preprocessing")); // Charlotte debugs Bobby's code on preprocessing
log(betty.PRAssignment("React debugging")); // Betty has submitted a PR for React debugging
log(charlie.grade(charlotte, "Javascript 3")); // Charlotte receives a perfect score on Javascript 3
log(annie.favLanguage); // Ubbi Dubbi
log(charlotte.catchPhrase); // I'm gonna kick your ass (not really)
log(bertrand.listsSubjects);

log(annie.adjustGrade(betty)); // The following adjusts grades enough for grades to rise and fall substantially
log(arthur.adjustGrade(bobby));
log(charlie.adjustGrade(bertrand));
log(charlotte.adjustGrade(betty));
log(annie.adjustGrade(bobby));
log(arthur.adjustGrade(bertrand));
log(charlie.adjustGrade(betty));
log(charlotte.adjustGrade(bobby));
log(annie.adjustGrade(bertrand));
log(arthur.adjustGrade(betty));
log(charlie.adjustGrade(bobby));
log(charlotte.adjustGrade(bertrand));

log(betty.graduate()); // Prints whether or not the student can graduate
log(bobby.graduate());
log(bertrand.graduate());
