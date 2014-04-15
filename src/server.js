var vertx = require('vertx')

var container = require('vertx/container');

vertx.createHttpServer().requestHandler(function(req) {
  req.response.headers['Content-Type'] = "text/plain";
  req.response.end("Hola mundo desde vertx");
}).listen(parseInt(container.env.get('PORT'));
