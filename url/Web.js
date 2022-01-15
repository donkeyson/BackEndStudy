var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query; //{ ID: 'HTML' }
  if(_url == '/') {
    _url = '/index.html';
  }
  if(_url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(queryData.id); //HTML

});
app.listen(3000);
