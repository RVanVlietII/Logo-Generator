// const fs = require('fs');
// const path = require('path');

// function writeSVGToFile(folderPath, fileName, svgString) {

//     const folderPath = path.join('./new/');
//     if (!fs.existsSync(folderPath)) {
//         fs.mkdirSync(folderPath, { recursive: true });
//     }

//     const filePath = path.join(folderPath, fileName);

//     fs.writeFile(filePath, svgString, (err) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log('Generated', filePath);
//         }
//     })
// }

// module.exports = writeSVGToFile;


const fs = require('fs');
const path = require('path');

function writeSVGToFile(folderPath, fileName, svgString) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, svgString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated', filePath);
    }
  });
}

module.exports = { writeSVGToFile };