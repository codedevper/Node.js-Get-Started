var fs = require('fs');

fs.appendFile('./files/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
