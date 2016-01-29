var express = require('express');
var app = express();

var port = 3000;
var dirName = './';

if (process.argv.length > 2) {
  console.log('devserver.js: ' + process.argv.length + ' arguments provided.');
  console.log(process.argv);

  // 0 = 'node', 1 = 'www.js', 2 = dirName
  dirName += process.argv[2];

  app.use('/', require(dirName));
}//end if
else {
  app.use('/', express.static(__dirname));
}//end else

app.listen(port, function() {
  console.log('devserver.js: Listening on localhost:' + port);
});
