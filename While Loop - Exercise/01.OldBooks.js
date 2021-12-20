function solve(input) {
  let favouriteBook = input[0];
  let i = 1;
  let bookIsFound = false;
  let nextBookName = input[i];

  while (nextBookName !== "No More Books") {
    if (nextBookName === favouriteBook) {
      bookIsFound = true;
      break;
    }
    i++;
    nextBookName = input[i];
  }
  if (bookIsFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${i - 1} books.`);
  } else {
    console.log(`You checked ${i - 1} books and found it.`);
  }
}
solve([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
