const inquirer = require('inquirer');
const writeSVGToFile = require('./svgWriter.js');

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
        message: 'Enter keyword for shape color'
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter the custom name of the file',
    }
  ]
 
  try {
    const { default: inquirer } = await import('inquirer');
    const answers = await inquirer.prompt(questions);
    const svgFileName = answers.filename + '.svg';

    const svgString = generateSVGString(answers);
    writeSVGToFile(svgFileName, svgString);

    console.log('Chosen shape:', answers.logoShape);
    return answers;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
  }



function generateSVGString(answers) {
  let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";

  if (answers.logoShape === "Triangle") {
    svgString += `<polygon points="150, 18 244, 183 56, 182" fill="${answers.shapeColor}" />`;
  } else if (answers.logoShape === "Square") {
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}" />`;
  } else if (answers.logoShape === "Circle") {
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}" />`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";
  svgString += "</svg>";

  return svgString;
}

module.exports = getUserInput; 
