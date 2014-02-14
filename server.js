var express = require('express');
var http = require('http');
var path = require('path');
var _ = require('underscore');
var routes = require('./server/routes/index');

// initialize express

var app = express();

//
// environment configuration
//

app.set('port', process.env.PORT || 1337);
// app.set('views', __dirname + '../');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//
// development only - error checking
//

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

//
// routes
//

// var appBase = path.resolve(__dirname, './');

// keep app from being browsable @ /public
// app.get('/public', function (req, res) {
//   res.redirect('/');
// });
// app.get('/public/index.html', function (req, res) {
//   res.redirect('/');
// });

// app.get('/', routes.index);
// // serve everything
// app.use('/', express.static(appBase));

// // serve /public @ /
// app.use('/', express.static(path.join(appBase, 'public')));

app.get('lol', function(req, res){
  res.send('lol');
});

//
// create and launch server
//

http.createServer(app).listen(app.get('port'), function(){
  console.log('this ya boi EXPRESS.COM we outchea on ' + app.get('port'));
});
