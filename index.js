// import getUserInput from './user/userinput.js';

// import inquirer from 'inquirer';

// const fs = require('fs');

// function main() {
//     const userInput = getUserInput();
//     console.log('User input:', userInput);
// }

// main();

const getUserInput = require('./user/userinput.js');

async function main() {
  try {
    const inquirer = await require('inquirer');
    const userInput = await getUserInput(inquirer.default); // Pass inquirer as an argument
    console.log('User input:', userInput);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();






