#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1); // +1 added value after multiplication

const guess = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess any number between 1-6:",
  },
]);

if (guess.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you gussed a correct number");
} else {
  console.log("You guessed a wrong number");
}


