// console.log("abhiskh dekho ---->", skjfsdjfdksdjfsd);variables ---> const let var 
// data types ----> 
// array ----->
// object ---->
//   function --->



// const juiceMachine = {
//   name: "Tosiba",
//   price: 2000,
//   isBattery: true,
//   fruitsMix: (fruit1, fruit2) => {
//     const juiceContainer = fruit1 + fruit2;
//     console.log("tapai ko juice reay bhayo --->", juiceContainer);
//   }
// }

// const aaaa = juiceMachine.fruitsMix('lemon', 'water');















// Define an array of student objects
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 88 }
];

// Define a function to calculate the average grade
function calculateAverageGrade(students) {
  let totalGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade = totalGrade + students[i].grade;
  }

  const aaaa = students.length;
  console.log("----->", aaaa);
  return totalGrade / aaaa;
}

// Use the function
const averageGrade = calculateAverageGrade(students);
console.log(`The average grade is ${averageGrade}.`);