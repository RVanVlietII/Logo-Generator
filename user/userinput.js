const inquirer = require('inquirer');
const shapeChoices = ['circle, triangle, square'];

function getUserInput() {
    const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (max: 3 characters)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter keyword for color',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Pick a shape you would like for your logo:',
        choices: shapeChoices,
    },
  ]
  .then((answers) => {
    console.log('Chosen shape:', answers.logoShape);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


    const answers = inquirer.prompt(Questions);
    return answers;
};

module.exports = getUserInput;