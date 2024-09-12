var fs = require('fs');

fs.writeFile('./files/mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
