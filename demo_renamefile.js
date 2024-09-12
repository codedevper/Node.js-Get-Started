var fs = require('fs');

fs.rename('./files/mynewfile1.txt', './files/myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
