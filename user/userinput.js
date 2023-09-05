const inquirer = require('inquirer');

const shapeChoices = ['Circle', 'Triangle', 'Square'];

async function getUserInput() {
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
  // .then((answers) => {
  //   console.log('Chosen shape:', answers.logoShape);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  try {
    const { default: inquirer } = await import('inquirer');

    const answers = await inquirer.prompt(questions);
    console.log('Chosen shape:', answers.logoShape);
    return answers;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
  }

  // try {
  //   const answers = await inquirer.prompt(questions);
  //   console.log('Chosen shape:', answers.logoShape);
  //   return answers;
  // } catch (error) {
  //   console.error('Error:', error);
  //   throw error;
  // }

    // return inquirer.prompt(questions);

// module.exports = getUserInput;

module.exports = getUserInput; 
