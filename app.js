
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var menu = require('./routes/menu');
var newEntry = require('./routes/newEntry');
var setting = require('./routes/setting');
var question = require('./routes/question');
var login = require('./routes/login');
var chat = require('./routes/chat');
var pastEntry1 = require('./routes/pastEntry1');
var pastEntry2 = require('./routes/pastEntry2');
var information = require('./routes/information');



//  route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/index', index.view);
app.get('/menu', menu.view);
app.get('/newEntry', newEntry.view);
app.get('/settings', setting.view);
app.get('/question', question.view);
app.get('/login', login.view);
app.get('/chat', chat.addChat);
app.get('/pastEntry1', pastEntry1.view);
app.get('/pastEntry2', pastEntry2.view);
app.get('/information', information.view);

app.post('/addMessage', newEntry.addMessage);
app.post('/addQuestion', newEntry.addQuestion);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
