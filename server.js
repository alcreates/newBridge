var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static('public'));

var PORT = process.env.PORT || 8080;





//Database configuration
mongoose.connect('mongodb://alcreates:Vapor121@ds145385.mlab.com:45385/bridges');
var db = mongoose.connection;

db.on('error', function (err) {
console.log('Mongoose Error: ', err);
});
db.once('open', function () {
console.log('Mongoose connection successful.');
});
// random number function used to select random question from mongodb
function randomNum(){

	 return questionNumber = Math.floor((Math.random() * 99) + 1);
}

//Require Schemas

var Question = require('./models/questions.js');

app.get('/questions', function(req, res){
	
	//console.log(randomQNum);
	Question.find({}, function(err, docs) {
    if (!err){ 
        res.json(docs);
        process.exit();
    } else {throw err;}
});
});


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

