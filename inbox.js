const getUserInput = require('./user/userinput.js');

function main() {
    const userInput = getUserInput();
    console.log('User input:', userInput);
}

main();