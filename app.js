var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')


var index = require('./routes/index');
var users = require('./routes/users');
var folders = require('./routes/folders');

var app = express();

app.use(cors())

//set up mongoose connection
//mongo atlas pwd: SQPoCtXV2sVmjAQV
var mongoose = require('mongoose');
var mongoDB = "mongodb://ogalaemmanuel:SQPoCtXV2sVmjAQV@music-shard-00-00-yxb1b.mongodb.net:27017,music-shard-00-01-yxb1b.mongodb.net:27017,music-shard-00-02-yxb1b.mongodb.net:27017/locallibrary?ssl=true&replicaSet=Music-shard-0&authSource=admin";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error;'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/folders', folders);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
