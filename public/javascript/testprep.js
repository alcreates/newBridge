// Test Prep 

test();

// Gobal Variable -------------------------------------------------------------------------------------------

var questions = null;
var questionNumber = 0;
var correct = 0;
var incorrect = 0;
var currentURL = window.location.origin;

//Functions --------------------------------------------------------------------------------------------------
function start() {
	
	randomNum();
    display();
}

function randomNum() {
	questionNumber = Math.floor((Math.random() * 99) + 1);
}

function display() {

    $("#resultDiv").empty();
    $("#panel").empty();
    $("#questionDiv").html("<h4>" + questions[questionNumber].question + "</h4>");
    	
    	for (var i = 0; i < questions[this.questionNumber].answers.length; i++) {
        	$("#panel").append("<a  style='display:block;width:100%'class='answer-button btn-large brown lighten-3 ' id='button'" + "data-name='" + questions[this.questionNumber].answers[i] + "''>" + questions[this.questionNumber].answers[i] + "</a>");

    	}
}

// populates questions variable with questions from mongodb. 
function test(){
$.get(currentURL + '/questions', function(data) {
    console.log(data);
    questions = null;
    questions = data;
    start();

});
}
