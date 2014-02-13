var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');

exports.index = function(req, res){
  res.sendfile('public/index.html');
};
