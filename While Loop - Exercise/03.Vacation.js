function solve(input) {
  let moneyForVacantion = Number(input[0]);
  let startingMoney = Number(input[1]);
  let days = 0;
  let spendDays = 0;
  let i = 2;

  while (true) {
    let operation = input[i++];
    let amount = Number(input[i]);

    if (operation === "spend") {
      spendDays++;
      days++;
      if (amount > startingMoney) {
        startingMoney = 0;
      } else {
        startingMoney -= amount;
      }
    } else if (operation === "save") {
      days++;
      startingMoney += amount;
      spendDays = 0;
    }
    if (spendDays === 5) {
      console.log("You can't save the money.");
      console.log(`${days}`);
      break;
    }
    if (startingMoney >= moneyForVacantion) {
      console.log(`You saved the money for ${days} days.`);
      break;
    }
  }
}
solve(["2000", "1000", "spend", "1200", "save", "2000"]);
