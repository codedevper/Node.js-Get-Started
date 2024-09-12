var fs = require('fs');

fs.unlink('./files/mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
