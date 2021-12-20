function solve(input) {
  let lowGradeInput = Number(input[0]);
  let nameOfExercise = input[1];
  let grade = Number(input[2]);
  let index = 3;

  let lowGrades = 0;
  let averegeScore = 0;
  let lastProblem = 0;
  let totalGrades = 0;

  while (nameOfExercise !== "Enough") {
    let curentGrade = Number(grade);
    if (curentGrade <= 4) {
      lowGrades++;
      if (lowGrades === lowGradeInput) {
        console.log(`You need a break, ${lowGrades} poor grades.`);
        break;
      }
    }

    totalGrades++;
    averegeScore += curentGrade;
    lastProblem = nameOfExercise;

    nameOfExercise = input[index];
    index++;
    grade = Number(input[index]);
    index++;
  }
  if (nameOfExercise === "Enough") {
    console.log(`Average score: ${(averegeScore / totalGrades).toFixed(2)}`);
    console.log(`Number of problems: ${totalGrades}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
