function solve(input) {
  let steps = 0;
  let gh = input[input.length - 2];
  let stepsGoal = 10000;

  if (gh === "Going home") {
    for (let i = 0; i < input.length - 2; i++) {
      steps += Number(input[i]);
    }
    steps += Number(input[input.length - 1]);
  } else {
    for (let i = 0; i < input.length; i++) {
      steps += Number(input[i]);
    }
  }

  if (steps >= stepsGoal) {
    console.log("Goal reached! Good job!");
    console.log(`${steps - stepsGoal} steps over the goal!`);
  } else {
    console.log(`${stepsGoal - steps} more steps to reach goal.`);
  }
}
solve(["125",
"250",
"4000",
"30",
"2678",
"4682"])
;
