var http = require('http');
var formidable = require('formidable');
var mv = require('mv');

http
  .createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(files.filetoupload[0].mimetype);
        mv(files.filetoupload[0].filepath, './uploads/' + files.filetoupload[0].originalFilename, function (err) {
          if (err) throw err;
          console.log('File Renamed!');
        });
        res.write('File uploaded and moved!');
        res.end();
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  })
  .listen(8080);
