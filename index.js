//settings
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser')
var logger = require('express-logger');
app.use(logger({path: "./LoBusque/logfile.txt"}));

var fs = require('fs.extra');
var busboy = require('connect-busboy');

var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(bodyParser());
app.use(cookieParser('secret'));
app.use(session({
    secret: "ilovescotchscotchyscotchscotch",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(busboy());

//db connects
mongoose.connect('mongodb://cesaring541:Francy1108@ds043002.mongolab.com:43002/uptc-', 
				{ server: { auto_reconnect: true } }, function(err, db) {

console.log("DASDS" + err  + " ")

});
require('./config/passport')(passport); // pass passport for configuration

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('secretString'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/rtObject/routes.js')(app, passport);
require('./app/front/routes.js')(app, passport);

//run aplication
app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});