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

  function generateRandomNumber(minRange, maxRange) {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * (maxRange + 1));
  while (randomNumber < minRange) {
randomNumber = Math.floor(Math.random() * (maxRange + 1));
  }
  return randomNumber;
}

function getClassSchedule() {
  let dayNum = generateRandomNumber(1,5);
  switch(dayNum) {
  case 1:
  return "Monday"
  break;

  case 2:
  return "Tuesday"
  break;

  case 3:
  return "Wednesday"
  break;

  case 4:
  return "Thursday"
  break;

  case 5:
  return "Friday"
  break;
  }
}

function getGradeByScore (Score) {
    const scoreByGrades = [
        {
        minScore: 0,
        maxScore: 50,
        Grade: "F",
        },
        {
        minScore: 51,
        maxScore: 60,
        Grade: "E",
        },
        {
        minScore: 61,
        maxScore: 70,
        Grade: "D",
        },
        {
        minScore: 71,
        maxScore: 80,
        Grade: "C",
        },
        {
        minScore: 81,
        maxScore: 90,
        Grade: "B",
        },
        {
        minScore: 91,
        maxScore: 100,
        Grade: "A",
        }
        ];

        for (let i = 0; i < scoreByGrades.length; i++) {
            if (Score >= scoreByGrades[i].minScore && Score <= scoreByGrades[i].maxScore) {
             return scoreByGrades[i].Grade;   
            }
        }
}

function updateClasses(students) {
  for (let i = 0; i < students.length; i++) {
let orgClasses = students[i].classes;

const clsDetails = Array();
    for(let x = 0; x < orgClasses.length; x++) {
    let Score = generateRandomNumber(1,100);
    let classSchedule = getClassSchedule();
   clsDetails.push (
    {
        Name: orgClasses[x],
        Grade: getGradeByScore(Score),
        Score: Score,
        Schedule: classSchedule
    }
    ) 
  }
     students[i].classes = clsDetails;
}
}
updateClasses(students);
console.log(students);
