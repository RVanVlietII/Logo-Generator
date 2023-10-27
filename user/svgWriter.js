const fs = require('fs');
const path = require('path');

function writeSVGToFile(fileName, svgString) {
    const filePath = path.join('./created', fileName);
    fs.writeFile(filePath, svgString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated', filePath);
        }
    })
}

module.exports = writeSVGToFile;