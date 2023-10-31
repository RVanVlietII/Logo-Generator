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
      message: 'Enter keyword for text color',
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Pick a shape you would like for your logo:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter keyword for shape color',
    },
    {
      type: 'input',
      name: 'filename',
      message: 'Enter the custom name of the file',
    }
  ];

  try {
    const answers = await inquirer.prompt(questions);
    console.log('Chosen shape:', answers.logoShape);
    return answers;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = { getUserInput };
