var chalk = require('chalk');
var express=require('express');
var mongoose=require('mongoose');
var db=require('./models/db.js');

var routes=require('./routes/route.js');
var user=require('./routes/user.js');
var bodyParser=require('body-parser');

var session=require('express-session');


var app=express();

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var session=require('express-session');

//Random secret value to hash the session
app.use(session({secret:"qrtetrydfgfgfght",resave: true, saveUninitialized: true}));


app.get('/',routes.index);

app.get('/register',routes.register); 

app.post('/newUser',user.doCreate); 

app.get('/registrationSuccessful',user.registrationSuccessful); 

app.get('/login',routes.login); 

app.post('/authenticate',user.login); 

app.get('/techStack',routes.techStack);

app.get('/logout',user.logout);

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log(chalk.green("Catch the action at http://localhost:"+port));
});
