var static = require('node-static');

if (process.env['NODE_ENV'] == "production") {
  var port = 80;
  process.on('uncaughtException', function(err) {
    console.log("Uncaught exception!", err);
  });
} else {
  var port = 3000;
}

var fileServer = new static.Server('./public');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(port);
