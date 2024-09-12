var fs = require('fs');

fs.appendFile('./files/mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
