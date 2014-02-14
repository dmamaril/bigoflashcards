var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');

exports.users = function(req, res){
  res.writeHead(200);
  res.end();
  // console.log(req);]
};

exports.addUser = function(req, res){
  
};

exports.login = function(req, res){
  console.log(req.body);
  res.writeHead(200);
  res.end(JSON.stringify(req.body));
};

exports.signup = function(req, res){
  console.log(req.body);
  res.writeHead(200);
  res.end(JSON.stringify(req.body));
};
