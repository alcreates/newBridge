$.backstretch("https://s-media-cache-ak0.pinimg.com/736x/17/0d/9c/170d9cdcb5432859db545ac625ac2e87.jpg");


$("#hero").backstretch("./images/hero.jpg");
//Chat feature created with firebase
var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");
//Chat box values
var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat')
var currentURL = window.location.origin;

//Actions after the user enters message
messageField.keydown(function (e) {
   
	if (e.keyCode == 13){
		
		$("#chatTextInput").focus();
		var username = nameField.val();
		var message = messageField.val();

		messagesRef.push({name: username, text: message});
		messageField.val('');

	}

});
//event listener that populates chat box
messagesRef.limitToLast(10).on('child_added',function(snapshot){

	var data = snapshot.val();
	var username = data.name || "anonymous";
	var message = data.text; 

	var messageElement = $("<div class='well well-sm'></div>");
	var nameElement = $("<strong class='chatContent'></strong>");
	nameElement.text(username + ": ");
	messageElement.text(message).prepend(nameElement);

	messageList.append(messageElement);

	messageList[0].scrollTop = messageList[0].scrollHeight;

});




//News Feed --------------------------------------------------------------------
var feedcontainer= document.getElementById("newsFeed")
var feedurl="http://rss.cnn.com/rss/edition_world.rss"
var feedlimit=5
var rssoutput="<b>World News:</b><br /><ul>"

function rssfeedsetup(){
var feedpointer = new google.feeds.Feed(feedurl) //Google Feed API method
feedpointer.setNumEntries(feedlimit) //Google Feed API method
feedpointer.load(displayfeed) //Google Feed API method
}

function displayfeed(result){
if (!result.error){
var thefeeds = result.feed.entries
for (var i=0; i<thefeeds.length; i++)
rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
rssoutput+="</ul>"
feedcontainer.innerHTML=rssoutput
}
else
alert("Error fetching feeds!")
}

window.onload=function(){
rssfeedsetup()
}


// test prep to be put in MongoDB ----------------------------------------------------------------------

var questions = null;


// Global variables

var questionNumber = 0;
var correct = 0;
var incorrect = 0;
// start function
$.get(currentURL + '/questions', function( data ) {
  console.log(data);
  questions = null;
  questions = data;
  start();
  
});

function start(){
	
	randomNum();
	display();

}



$(document).on("click", ".answer-button3", function(e){
	
	start();
});


//Generate random number

function randomNum(){

	questionNumber = Math.floor((Math.random() * 99) + 1);
}



//Display questions and options

function display(){
 
  $("#resultDiv").empty();
	$("#panel").empty();
	$("#questionDiv").html("<h4>" + questions[questionNumber].question + "</h4>");
      for (var i = 0; i < questions[this.questionNumber].answers.length; i++){
      $("#panel").append("<a  style='display:block;width:100%'class='answer-button btn-large brown lighten-3 ' id='button'" + "data-name='" + questions[this.questionNumber].answers[i] + "''>" + questions[this.questionNumber].answers[i]+ "</a>");

    	}
}


//$("#panel").append("Correct answers: " + correct + "<br>" + "Incorrect answers: " + incorrect ); - why?????

//on click function, display answer, comparison function, increment score totals, new question

$(document).on("click", ".answer-button", function(e) {
	
	if ($(e.target).data("name") === questions[questionNumber].correctAnswer){
    	$("#resultDiv").html("<div class='card-panel brown darken-4 white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
    	correct++;
    } else {
   	    $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
     	incorrect++;
    }
  console.log(correct);
  console.log(incorrect);
});


var languages = [{//1
  language: "Espanol",
  value: "en-es"
}, {//2
  language: "Francais",
  value: "en-fr"
}, {//3
  language: "Deutsche",
  value: "en-de"
}, {//4
  language: "Pyccknn",
  value: "en-ru"
}, {//5
  language: "Italiano",
  value: "en-it"
}];

//Language buttons populate panel 
for (var i = 0; i<languages.length; i++) {
      $("#dropdown1").append("<button style='display:block; width:100%;' class='answer-button1 red darken-4 ' id='button' value=" + languages[i].value + " data-name=" 
        + languages[i].language + "''>"  + languages[i].language + "</button>");
    }

// translations

$(document).on("click", '.answer-button1', function(e) {

	
	$("#panel").empty();

  var queryUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].question +  '&lang=' + $(event.target).attr("value");

	$.ajax({url: queryUrl, method : 'GET'})
		.done(function(response){
			var result = response.text[0];
			
				 $("#questionDiv").html("<h4 >" + result + "</h4>");
		
				
			
		
		// console.log(JSON.stringify(response));
		console.log(response);
//console.log($(event.target).attr("value"));
  
});

var queryUrl2 = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[0] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl2, method : 'GET'})
		.done(function(response){
			console.log(response.text[0]);
			var result = response.text;

			$("#panel").append("<a id='button' style='display:block; width:100%;'  class='answer-button2 waves-effect waves-light btn brown lighten-3' data-name='" + questions[questionNumber].answers[0] + "' >" + response.text[0] + "</a>");
			
				 // $("#panel").append("<button class='answer-button' id='button'" + "data-name='" + questions[this.questionNumber].answers[i] + "''>" + result + "</button>");
				
			
		 
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl3 = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[1] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl3, method : 'GET'})
		.done(function(response){
			var result = response.text;
			// console.log(response.text[0]);
				$("#panel").append("<a id='button' style='display:block; width:100%;' class='answer-button2 waves-effect waves-light btn brown lighten-3' data-name='" + questions[questionNumber].answers[1] + "' >" + response.text[0] + "</a>");
				
			console.log(questions[questionNumber].answers[1]);
		
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl4= 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[2] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl4, method : 'GET'})
		.done(function(response){
			var result = response.text;
			
				 $("#panel").append("<a id='button' style='display:block; width:100%;' class='answer-button2 waves-effect waves-light btn brown lighten-3' data-name='" + questions[questionNumber].answers[2] + "' >" + response.text[0] + "</a>");
				
			
		
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl5 = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[3] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl5, method : 'GET'})
		.done(function(response){
			var result = response.text;
			
				 $("#panel").append("<a id='button' style='display:block; width:100%;' class='answer-button2 waves-effect waves-light btn brown lighten-3' data-name='" + questions[questionNumber].answers[3] + "' >" + response.text[0] + "</a>");
				
			
		
		// console.log(JSON.stringify(response));
		// console.log(response);

		
});

$(document).on("click", ".answer-button2", function(e) {
	
	if ($(e.target).data("name") === questions[questionNumber].correctAnswer){
		
    	$("#resultDiv").html("<div class='card-panel brown darken-4 white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
    	correct++;
    } else {
   	    $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
     	incorrect++;
    }
  console.log(correct);
  console.log(incorrect);
});

});

