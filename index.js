const { getUserInput } = require('./user/userinput');
const { writeSVGToFile } = require('./user/svgWriter');

async function main() {
  try {
    const userAnswers = await getUserInput();
    const svgFileName = userAnswers.filename + '.svg';
    const svgString = generateSVGString(userAnswers);
    writeSVGToFile('./new/', svgFileName, svgString);
  } catch (error) {
    console.error('Error:', error);
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

main();





