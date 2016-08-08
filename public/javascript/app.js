
//Chat feature created with firebase
var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");
//Chat box values
var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat')


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
var rssoutput="<b>Latest CNN World News:</b><br /><ul>"

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

$(document).ready(function(){

$.backstretch('images/usabridge.jpg');



})


// test prep to be put in MongoDB ----------------------------------------------------------------------

var questions = [{
  question: "What is the supreme law of the land?",
  answers: ["Supreme Court", "Bill of Rights", "Declaration of Independence", "Constitution"],
  correctAnswer: "Constitution"
}, {
  question: "Name one branch or part of the government.",
  answers: ["Congress", "Dictator", "Prime Minister", "Prisons"],
  correctAnswer: "Congress"
}, {
  question: "What stops one branch of government from becoming too powerful?",
  answers: ["Bill of Rights", "Checks and balances", "Speration of powers", "Checks balances and seperation of powers"],
  correctAnswer: "Checks balances and seperation of powers"
}, {
  question: "Who is in charge of the executive branch?",
  answers: ["Congress", "The House of Representatives", "The Senate", "The President"],
  correctAnswer: "The President"
}, {
  question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
  answers: ["Citizens 18 and older can vote", "Anyone with a drivers license can vote", "Everyone must register to vote", "None of the above"],
  correctAnswer: "Citizens 18 and older can vote"
}, {
  question: "What is one reason the colonist came to America?",
  answers: ["Political liberty ", "Religious freedom", "Economic opportunity", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "What territory did the United States buy from France in 1803?",
  answers: ["New Mexico Territory", "Louisiana Territory", "Arizona Territory", "Nevada Territory"],
  correctAnswer: "Louisiana Territory"
}, {
  question: "Name one war fought by the United States in the 1900s.",
  answers: ["French and Indian War", "Civil War", "World War I", "All of the above"],
  correctAnswer: "Civil War"
}, {
  question: "Name one of the two longest rivers in the United States.",
  answers: ["Sacramento River", "Ohio River", "Missouri River", "Hudson River"],
  correctAnswer: "Missouri River"
}, {
  question: "Why does the flag have 13 stripes?",
  answers: ["For the first 13 presidents", "Because there were 13 original Colonies", "Because America has fought 13 wars", "For 13 of the top US generals"],
  correctAnswer: "Because there were 13 original Colonies"
}, {
  question: "What does the Constitution do?",
  answers: ["Sets up the government", "Defines the government", "Protects basic rights of Americans", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "Who makes Federal laws?",
  answers: ["Congress", "Senate and House(of Representatives)", "(U.S. or national) legislature ", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "What are the two parts of the U.S. Congress?",
  answers: ["The Courts", "The House of Representatives", "The Senate", "Both the House of Representatives and the Senate"],
  correctAnswer: "Both the House of Representatives and the Senate"
}, {
  question: "How many U.S. Senators are there?",
  answers: ["50", "100", "200", "435"],
  correctAnswer: "100"
}, {
  question: "What is one responsibility that is only for United States citizens?",
  answers: ["Pay federal taxes", "Pay state taxes", "Serve on a jury", "Obtain a drivers liscence"],
  correctAnswer:  "Serve on a jury"
}, {
  question: "Who lived in America before the Europeans arrived?",
  answers: ["Native Americans", "Latinos", "Cowboys", "All of the above"],
  correctAnswer: "Native Americans"
}, {
  question:  "Name one war fought by the United States in the 1800s",
  answers: ["World War I", "American Revolution", "French and Indian War", "Mexican-American War"],
  correctAnswer: "Mexican-American War"
}, {
  question: "Who was President during World War I?",
  answers: ["John F Kennedy", "Theodore Roosevelt", "Woodrow Wilson", "Herbert Hoover"],
  correctAnswer: "Woodrow Wilson"
}, {
  question: "What ocean is on the West Coast of the United States?",
  answers: ["Indian", "Atlantic", "Arctic", "Pacific"],
  correctAnswer: "Pacific"
}, {
  question: "We elect a U.S. Senator for how many years?",
  answers: ["2", "4", "6", "10"],
  correctAnswer: "6"
}, {
  question: "The idea of self-government is in the first three words of the Constitution. What are those words?",
  answers: ["We the government", "The President is", "We the people", "The Founding Fathers"],
  correctAnswer: "We the people"
}, {
  question: "The House of Representatives has how many voting memebers?",
  answers: ["50", "100", "200", "435"],
  correctAnswer: "435"
}, {
  question: "We elect a U.S Representative for how many years?",
  answers: ["2", "4", "6", "10"],
  correctAnswer: "2"
}, {
  question:  "Who does a U.S. Senator represent?",
  answers: ["All of the people from thier state", "All of the people of the state in thier party", "The northern or southern half of a state ", "All of the people in America "],
  correctAnswer: "All of the people from thier state"
}, {
  question: "Name one right only for United States citizens",
  answers: ["Run for federal office", "Own a home", "Applying for federal grants", "None of the above"],
  correctAnswer: "Run for federal office"
}, {
  question: "What group of people were taken to America and sold as slaves?",
  answers: ["Chinese", "Latinos", "Africans", "Indians"],
  correctAnswer: "Africans"
}, {
  question: "Name the U.S. war between the North and the South.",
  answers: ["The Civil War", "The Union war", "The Confederacy War", "None of the above"],
  correctAnswer: "The Civil War"
}, {
  question: "Who was President during the Great Depression and World War II?",
  answers: ["Theodore Roosevelt", "Franklin Roosevelt", "Herbert Hoover", "John F Kennedy"],
  correctAnswer: "Franklin Roosevelt"
}, {
  question:  "What ocean is on the East Coast of the United States?",
  answers: ["Indian", "Atlantic", "Arctic", "Pacific"],
  correctAnswer: "Atlantic"
}, {
  question: "Why do some states have more Representatives than other states?",
  answers: ["Because some states are considered better", "Because some states have more people", "Because states can pick how many representatives they want to send to the House", "None of the above"],
  correctAnswer: "Because some states have more people"
}, {
  question: "What is an Ammendment?",
  answers: ["A change(to the Constitution)", "An addition(to the Constitution", "Both a change(to the Constitution) and an addition(to the Constitution", "None of the above"],
  correctAnswer: "Both a change(to the Constitution) and an addition(to the Constitution"
}, {
  question: "We elect a President for how many years?",
  answers: ["2", "4", "6", "10"],
  correctAnswer: "6"
}, {
  question: "In what month do we vote for President?",
  answers: ["January", "March", "September", "November"],
  correctAnswer: "November"
}, {
  question: "What is the name of the President of the United States now?",
  answers: ["Barack Obama", "George W Bush", "Hillary Clinton", "Bill Clinton"],
  correctAnswer: "Barack Obama"
}, {
  question: "What are two rights of everyone living in the United States?",
  answers: ["Freedom of speech", "Freedom to bear arms", "Both freedom of speech and freedom to bear arms", "None of the above"],
  correctAnswer: "Both freedom of speech and freedom to bear arms"
}, {
  question: "Why did the colonists fight the British?",
  answers: ["Because of high taxes(taxation without representation)", "Because the British army had stayed in thier homes(boarding, quartering)", "Because they wnanted to have self government", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "Name one problem that led to the Civil War.",
  answers: ["Slavery", "Oppresion", "Language diffrences", "All of the above"],
  correctAnswer: "Slavery"
}, {
  question: "Who did the United States fight in World War II?",
  answers: ["Germany only", "Italy only", "Japan only", "Germany, Italy and Japan"],
  correctAnswer:  "Germany, Italy and Japan"
}, {
  question: "The last of the 50 stats was given statehood on August 21 1959. Name the state. ",
  answers: ["Oregon", "Alaska", "Idaho", "Hawaii"],
  correctAnswer: "Hawaii"
}, {
  question: "Name one U.S. territory.",
  answers: ["Puerto Rico", "The Caribbean", "The Canary Islands", "Cuba"],
  correctAnswer: "Puerto Rico"
}, {
  question: "Name one state that borders Canada",
  answers: ["California", "South Dakota", "New York", "Maryland"],
  correctAnswer: "New York"
}, {
  question: "What do we call the first ten ammendments to the Constitution?",
  answers: ["The Bill of Rights", "The Ten Commandments", "The Bill of Laws", "The Preamble to the Constitution"],
  correctAnswer: "The Bill of Rights"
}, {
  question: "What is the name of the Vice President of the United States now?",
  answers: ["Hillary Clinton", "Mitt Romney", "Joe Biden", "Dick Chaney"],
  correctAnswer: "Joe Biden"
}, {
  question:  "If the President can no longer serve, who becomes President?",
  answers: ["The Speaker of the House", "The Secretary of State", "The Vice President", "A member of Congress"],
  correctAnswer: "The Vice President"
}, {
  question: "If the President and Vice President can no longer serve, who becomes President?",
  answers: ["The Secretary of Agriculture", "The Secretary of State", "The Speaker of the House", "A member of Congress"],
  correctAnswer: "The Speaker of the House"
}, {
  question: "What do we show loyalty to when we say the Pledge of Allegiance",
  answers: ["The flag", "The President", "The Capitol", "The Founding Fathers"],
  correctAnswer: "The flag"
}, {
  question: "Who wrote the Declaration of Independence?",
  answers: ["George Washington", "James Madison", "John Adams", "Thomas Jefferson"],
  correctAnswer: "Thomas Jefferson"
}, {
  question: "What was one important thing that Abraham Lincoln did?",
  answers: ["Freed the slaves(Emancipation Proclamation)", "Saved(or preserved) the Union", " Led the United States during the Civil War", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "Before he was President, Eisenhower was a general. What war was he in?",
  answers: ["World War I", "World War II", "Vietnam War", "Korean War"],
  correctAnswer: "Vietnam War"
}, {
  question: "Name one state that borders Mexico?",
  answers: ["California", "South Dakota", "New York", "Florida"],
  correctAnswer: "California"
 }, {
  question: "Who is the Commander in Chief of the military?",
  answers: ["The General", "The Vice President", "The Speaker of the House", "The President"],
  correctAnswer: "The President"
}, {
  question: "What is one right or freedom from the First Ammendment?",
  answers: ["Happiness", "Speech", "Income", "Marriage"],
  correctAnswer: "Speech"
}, {
  question: "Who signs bills to become laws?",
  answers: ["Member of Congress", "The President", "Supreme Court Justices", "All of the above"],
  correctAnswer: "The President"
}, {
  question: "Who vetoes bills?",
  answers: ["Member of Congress", "The President", "Supreme Court Justices", "All of the above"],
  correctAnswer: "The President"
}, {
  question: "What does the President's cabinet do?",
  answers: ["Advises the President", "Provides administrative support for the President", "Hires White House employees", "Writes laws"],
  correctAnswer: "Advises the President"
}, {
  question: "What is one promise you make when you become a United States citizen?",
  answers: ["To always recite the Pledge of Allegiance", "To obey the laws of the United States", "To vote in every presidential election", "To engage in activism"],
  correctAnswer: "To obey the laws of the United States"
}, {
  question: "When was the Declaration of Independence adopted?",
  answers: ["July 2nd 1776", "July 4th 1776", "July 4th 1789", "July 8th 1776"],
  correctAnswer: "July 4th 1776"
}, {
  question: "What did the Emancipation Proclamation do?",
  answers: ["Freed the slaves", "Declared war on the South", "Proclaimed the Union's independence from the Confederacy", "All of the above"],
  correctAnswer: "Freed the slaves"
}, {
  question: "What document did the U.S Constitution replace?",
  answers: ["The Federalist Papers", "The Bill of Rights", "The Articles of Confederation", "The Declaration of Independence"],
  correctAnswer: "The Articles of Confederation"
}, {
  question: "During the Cold War, what was the main concern of the United States?",
  answers: ["Slavery", "Socialism", "Communism", "Civil Rights"],
  correctAnswer: "Communism"
},{
  question: "What is the capital of the United States?",
  answers: ["Washington DC", "Philadelphia", "New York", "Los Angeles"],
  correctAnswer:  "Washington DC"
}, {
  question: "Name two national U.S. holidays",
  answers: ["Independence Day and Martin Luther King Jr Day", "Caesar Chavez Day and Easter", "Mother and Father's Day", "Civil Rights and Declaration of Independence Day"],
  correctAnswer: "Independence Day and Martin Luther King Jr Day"
}, {
  question:  "How many ammendments does the Constitution have?",
  answers: ["10", "5", "102", "27"],
  correctAnswer: "27"
}, {
  question: "What office requires the candidate to be a natural-born citizen?",
  answers: ["Speaker of the House", "President and Vice President", "Senator", "Chief Justice of the Supreme Court"],
  correctAnswer: "President and Vice President"
}, {
  question: "What does the judicial branch do?",
  answers: ["Writes laws", "Only reviews laws", "Only explains laws", "Reviews and explains laws, resolves disputes and decides if a law goes agaianst the Constitution"],
  correctAnswer: "Reviews and explains laws, resolves disputes and decides if a law goes agaianst the Constitution"
}, {
  question: "What is the highest court in the United States?",
  answers: ["The Court of Appeals", "The District Court", "The Supreme Court", "The Federal Court"],
  correctAnswer: "The Supreme Court"
}, {
  question: "How old do citizens have to be to vote for President?",
  answers: ["16", "17", "18", "21"],
  correctAnswer: "18"
}, {
  question: "There were 13 original states. Name three.",
  answers: ["Louisiana, Texas, New Mexico", "California, Nebraska, Nevada", "Michigan, Illinois, Ohio", "Massachusetts, New York, Virginia"],
  correctAnswer: "Massachusetts, New York, Virginia" 
}, {
  question: "What did Susan B Anthony do?",
  answers: ["Was first woman to serve in office", "Fought for women's rights", "Fought for slave's rights", "Fought in the Battle of Monmouth"],
  correctAnswer: "Fought for women's rights"
}, {
  question: "What movement tried to end racial discrimination?",
  answers: ["The anti-communist movement", "The Civil Rights movement", "The LGBT movement", "The feminist movement"],
  correctAnswer: "The Civil Rights movement"
}, {
  question: "Where is the Statue of Liberty?",
  answers: ["Washington DC", "Philadelphia", "New York", "Los Angeles"],
  correctAnswer:  "New York"
}, {
  question: "How many justices are on the Supreme Court?",
  answers: ["5", "7", "9", "11"],
  correctAnswer: "9"
}, {
  question: "What did the Declaration of Independence do?",
  answers: ["Announced our Independence(from Great Britain)", "Announced our Independence(from Great Britain)", "Said that the United States is free(from Great Britain)", "All of the above"],
  correctAnswer: "All of the above"
}, {
  question: "Who is the Chief Justic of the United States now?",
  answers: ["John Roberts", "Samuel Alito", "Anthony Kennedy", "Ruth Bader Ginsburg"],
  correctAnswer: "John Roberts"
}, {
  question: "Under our Constitution, some powers belong to the Federal government. What is one power of the Federal government?",
  answers: ["To incarcerate", "To declare war", "To print money", "Both to declare war and to print money"],
  correctAnswer: "Both to declare war and to print money"
}, {
  question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
  answers: ["Provide schooling and education", "Provide jobs", "Provide transportation", "Provide medical care"],
  correctAnswer: "Provide schooling and education"
}, {
  question: "What are two ways that Americans can participate in thier democracy?",
  answers: ["Vote", "Help with a campain", "Open a business", "Both vote and help with a campain"],
  correctAnswer: "Both vote and help with a campain"
}, {
  question: "What happend at the Constitutional Convention?",
  answers: ["The first President was elected", "The Constitution was written", "The Constitution was destroyed", "The Declaration of Independence was signed"],
  correctAnswer: "The Constitution was written"
}, {
  question: "When was the Constitution written?",
  answers: ["1776", "1777", "1778", "1787"],
  correctAnswer: "1787"
}, {
  question: "What did Martin Luther King, Jr. do?",
  answers: ["Fought for civil rights", "Became the first black President", "Opened a university", "All of the above"],
  correctAnswer: "Fought for civil rights"
}, {
  question: "What are two rights in the Declaration of Independence?",
  answers: ["Life", "Voting", "Liberty", "Both life and liberty"],
  correctAnswer: "Both life and liberty"
}, {
  question: "What is freedom of religion?",
  answers: ["Religion has power over the government", "You can force anyone to participate in your religion", "You can practice any religion, or not practice a religion", "Religion should not exist, and all citizens should be free from it"],
  correctAnswer: "You can practice any religion, or not practice a religion"
}, {
  question: "What is the economic system in the United States?",
  answers: ["Capitalist economy", "Political economy", "Socialist economy", "Communist economy"],
  correctAnswer: "Capitalist economy"
}, {
  question: "What are the two major political parties in the United States?",
  answers: ["Democratic and Republican", "Independent and Republican", "Tea party and Libertarian", "Democratic and Republican"],
  correctAnswer: "Democratic and Republican"
}, {
  question: "What is the political party of the President now?",
  answers: ["Democratic", "Republican", "Independent", "Libertarian"],
  correctAnswer: "Democratic"
}, {
  question: "What is the name of the Speaker of the House of Representatives now?",
  answers: ["Paul Ryan", "John McCain", "John Boehner", "John Edwards"],
  correctAnswer: "Paul Ryan"
}, {
  question: "When is the last day you can send in federal income tax forms?",
  answers: ["March 15th", "April 15th", "May 15th", "June 15th"],
  correctAnswer: "April 15th"
}, {
  question: "The Federalist Papers supported the passage of the U.S Constitution. Name one of the writers.",
  answers: ["James Madison", "Thomas Jefferson", "George Washington", "All of the above"],
  correctAnswer: "James Madison"
}, {
  question: "What is one thing Benjamin Franklin is famous for?",
  answers: ["Declaring war on the South", "Having started the first three libraries", "Being a President", "Inventing the dollar"],
  correctAnswer: "Having started the first three libraries"
}, {
  question: "What major event happened on September11,2001 in the United States?",
  answers: ["The U.S. declared war on Syria", "The U.S. was attacked by terrorists", "Both the U.S. declared war on Syria and the U.S. was attacked by terrorists", "None of the above"],
  correctAnswer: "The U.S. was attacked by terrorists"
}, {
  question: "What is the Rule of Law",
  answers: ["Everyone must follow the law, except the leaders", "Everyone must follow the law, except the government", "Only Congress is above the law", "Everyone must follow the law, leaders and government must obey the law, and no one is above the law"],
  correctAnswer: "Everyone must follow the law, leaders and government must obey the law, and no one is above the law"
}, {
  question: "What day do we thank people for thier service in the military?",
  answers: ["Columbus Day", "Labor Day", "Veterans Day", "Memorial Day"],
  correctAnswer: "Veterans Day"
}, {
  question: "Who wrote the Star Spangled Banner?",
  answers: ["Benjamin Franklin", "Francis Scott Key", "Woody Guthrie", "Frank Sinatra"],
  correctAnswer: "Francis Scott Key"
}, {
  question: "Name one American Indian tribe in the United States.",
  answers: ["Maasai", "The Village People", "Cherokee", "Mayans"],
  correctAnswer: "Cherokee"
}, {
  question: "What U.S. aganecy is responsible for space exploration?",
  answers: ["Center for Space Exploration", "Kennedy Space Center", "Center for Disease Control", "NASA"],
  correctAnswer: "NASA"
}, {
  question: "What is the Sufferage Act?",
  answers: ["19th amendment allowing women the right to vote", "Fight agaisnt Communism", "Ban on Socialism", "Job relief for unemployed workers during the Depression era"],
  correctAnswer: "19th amendment allowing women the right to vote"
}, {
  question: "What is the name of the national anthem?",
  answers: ["Born in the USA", "America", "The Star-Spangled Banner", "Oh Freedom"],
  correctAnswer: "The Star-Spangled Banner"
}, {
  question: "Who is the Father of our Country?",
  answers: ["John Q Adams", "Alexander Hamilton", "George Washington", "James Madison"],
  correctAnswer: "George Washington"
}, {
  question: "What was one of the 13 original states?",
  answers: ["Michigan", "New Jersey", "California", "Texas"],
  correctAnswer: "New Jersey"
}, {
  question: "When was the U.S Constitution written?",
  answers: ["September 17, 1787", "December 25, 1777", "The June 21, 1788", "July 4, 1776"],
  correctAnswer: "September 17, 1787"
 }];


// Global variables

var questionNumber = 0;
var correct = 0;
var incorrect = 0;
// start function

function start(){
	
	randomNum();
	display();

}

start();

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
	$("#questionDiv").html("<h2>" + questions[questionNumber].question + "</h2>");
      for (var i = 0; i<questions[this.questionNumber].answers.length; i++){
      $("#panel").append("<a class='answer-button waves-effect waves-light btn-large' id='button'" + "data-name='" + questions[this.questionNumber].answers[i] + "''>" + questions[this.questionNumber].answers[i]+ "</a>");

    	}
}


//$("#panel").append("Correct answers: " + correct + "<br>" + "Incorrect answers: " + incorrect ); - why?????

//on click function, display answer, comparison function, increment score totals, new question

$(document).on("click", ".answer-button", function(e) {
	
	if ($(e.target).data("name") === questions[questionNumber].correctAnswer){
    	$("#resultDiv").html("<div class='card-panel teal white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-light btn'>next</a>");
    	correct++;
    } else {
   	    $("#resultDiv").html("<div class='card-panel teal white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-light btn'>next</a>");
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
      $("#dropdown1").append("<button class='answer-button1 red darken-4 ' id='button' value=" + languages[i].value + " data-name=" 
        + languages[i].language + "''>"  + languages[i].language + "</button>");
    }

// translations

$(document).on("click", '.answer-button1', function(e) {

	
	$("#panel").empty();

  var queryUrl = 'https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].question +  '&lang=' + $(event.target).attr("value");

	$.ajax({url: queryUrl, method : 'GET'})
		.done(function(response){
			var result = response.text[0];
			
				 $("#questionDiv").html("<h2>" + result + "</h2>");
		
				
			
		
		// console.log(JSON.stringify(response));
		console.log(response);
//console.log($(event.target).attr("value"));
  
});

var queryUrl2 = 'https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[0] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl2, method : 'GET'})
		.done(function(response){
			console.log(response.text[0]);
			var result = response.text;

			$("#panel").append("<a id='button' class='answer-button2 waves-effect waves-light btn-large' data-name='" + questions[questionNumber].answers[0] + "' >" + response.text[0] + "</a>");
			
				 // $("#panel").append("<button class='answer-button' id='button'" + "data-name='" + questions[this.questionNumber].answers[i] + "''>" + result + "</button>");
				
			
		 
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl3 = 'https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[1] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl3, method : 'GET'})
		.done(function(response){
			var result = response.text;
			// console.log(response.text[0]);
				$("#panel").append("<a id='button' class='answer-button2 waves-effect waves-light btn-large' data-name='" + questions[questionNumber].answers[1] + "' >" + response.text[0] + "</a>");
				
			console.log(questions[questionNumber].answers[1]);
		
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl4= 'https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[2] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl4, method : 'GET'})
		.done(function(response){
			var result = response.text;
			
				 $("#panel").append("<a id='button' class='answer-button2 waves-effect waves-light btn-large' data-name='" + questions[questionNumber].answers[2] + "' >" + response.text[0] + "</a>");
				
			
		
		// console.log(JSON.stringify(response));
		// console.log(response);


});

var queryUrl5 = 'https:translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' +  questions[questionNumber].answers[3] +  '&lang=' + $(event.target).attr("value");

		$.ajax({url: queryUrl5, method : 'GET'})
		.done(function(response){
			var result = response.text;
			
				 $("#panel").append("<a id='button' class='answer-button2 waves-effect waves-light btn-large' data-name='" + questions[questionNumber].answers[3] + "' >" + response.text[0] + "</a>");
				
			
		
		// console.log(JSON.stringify(response));
		// console.log(response);

		
});

$(document).on("click", ".answer-button2", function(e) {
	
	if ($(e.target).data("name") === questions[questionNumber].correctAnswer){
		
    	$("#resultDiv").html("<div class='card-panel teal white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-light btn'>next</a>");
    	correct++;
    } else {
   	    $("#resultDiv").html("<div class='card-panel teal white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-light btn'>next</a>");
     	incorrect++;
    }
  console.log(correct);
  console.log(incorrect);
});

});

