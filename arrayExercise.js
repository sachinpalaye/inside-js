const students = [
    {
      name: "Alice",
      gender: "F",
      classes: ["Math", "Science", "English"],
      age: 18,
      grade: "A"
    },
    {
      name: "Bob",
      gender: "M",
      classes: ["Math", "History", "Physics"],
      age: 17,
      grade: "B"
    },
    {
      name: "Charlie",
      gender: "M",
      classes: ["Math", "Chemistry", "English"],
      age: 16,
      grade: "B"
    },
    {
      name: "David",
      gender: "M",
      classes: ["Math", "Science", "Geography"],
      age: 18,
      grade: "A"
    },
    {
      name: "Emily",
      gender: "F",
      classes: ["Math", "Biology", "English"],
      age: 17,
      grade: "B"
    },
    {
      name: "Frank",
      gender: "M",
      classes: ["Math", "Physics", "History"],
      age: 16,
      grade: "C"
    },
    {
      name: "Grace",
      gender: "F",
      classes: ["Math", "Chemistry", "English"],
      age: 18,
      grade: "A"
    },
    {
      name: "Henry",
      gender: "M",
      classes: ["Math", "Science", "Geography"],
      age: 17,
      grade: "B"
    },
    {
      name: "Isabella",
      gender: "F",
      classes: ["Math", "Biology", "English"],
      age: 16,
      grade: "B"
    },
    {
      name: "Jack",
      gender: "M",
      classes: ["Math", "Physics", "History"],
      age: 18,
      grade: "C"
    },
    {
      name: "Katherine",
      gender: "F",
      classes: ["Math", "Chemistry", "English"],
      age: 17,
      grade: "A"
    },
    {
      name: "Leo",
      gender: "M",
      classes: ["Math", "Science", "Geography"],
      age: 16,
      grade: "B"
    },
    {
      name: "Mia",
      gender: "F",
      classes: ["Math", "Biology", "English"],
      age: 18,
      grade: "A"
    },
    {
      name: "Nathan",
      gender: "M",
      classes: ["Math", "Physics", "History"],
      age: 17,
      grade: "B"
    },
    {
      name: "Olivia",
      gender: "F",
      classes: ["Math", "Chemistry", "English"],
      age: 16,
      grade: "B"
    },
    {
      name: "Patrick",
      gender: "M",
      classes: ["Math", "Science", "Geography"],
      age: 18,
      grade: "A"
    },
    {
      name: "Quinn",
      gender: "F",
      classes: ["Math", "Biology", "English"],
      age: 17,
      grade: "B"
    },
    {
      name: "Ryan",
      gender: "M",
      classes: ["Math", "Physics", "History"],
      age: 16,
      grade: "C"
    },
    {
      name: "Sophia",
      gender: "F",
      classes: ["Math", "Chemistry", "English"],
      age: 18,
      grade: "A"
    },
    {
      name: "Tyler",
      gender: "M",
      classes: ["Math", "Science", "Geography"],
      age: 17,
      grade: "B"
    }
  ];
  
function addSublings (students) {
 let orgStudentsLen = students.length;
 for (let i = 0; i <= orgStudentsLen; i++) {

  let naam = students[i].name.toLowerCase().split('').reverse();

    naam[0] = naam[0].toUpperCase();
//    console.log(naam);

students.push (
    {
       name: naam.join(''),
        gender: students[i].gender === 'M' ? 'F': 'M',
        age: students[i].age - 1,
        classes: students[i].classes,
        grade: students[i].grade
    }
)
 }
 return students;
}
addSublings(students);
console.log(students);