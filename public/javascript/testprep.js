// Test Prep -------------------------------------------------------------------------------------------------



var languageList = null

// Gobal Variable -------------------------------------------------------------------------------------------

var questions = null;
var questionNumber = 0;
var correct = 0;
var incorrect = 0;
var currentURL = window.location.origin;

//Functions --------------------------------------------------------------------------------------------------
function start() {
    test();
}

function randomNum() {
    questionNumber = Math.floor((Math.random() * 99) + 1);
    console.log(" this is the quetion number" + questionNumber);
    display();
}

function display() {
    console.log(questions[questionNumber].question);
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
   
    questions = data;
    randomNum();
    languages()

});
}


function languages(){
    $.get(currentURL + '/transcode', function(data) {
       
       languageList = data;
        
    });
}

//translation input
var translationInput = $("#translation");

//funtion to format string. 
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function codeFinder(lan){
    for (var i = 0; i < languageList.length; i++) {
        if (languageList[i].language == lan){
            return languageList[i].code
        }
    }
}

//User messages 
translationInput.keydown(function(e) {
   
     if (e.keyCode == 13) {
       event.preventDefault()
         $("#panel").empty();
        $("#translation").focus();
        var language = toTitleCase($("#translation").val());
        var lancode = codeFinder(language);
        
         var queryUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' + questions[questionNumber].question + '&lang=' +'en-'+lancode;

                    $.ajax({ url: queryUrl, method: 'GET' })
                        .done(function(response) {
                            var result = response.text[0];

                            $("#questionDiv").html("<h4 >" + result + "</h4>");
                            translationInput.val('');
                        });
        }

        for (var i = 0; i < 4 ; i++) {
                
                 var queryUrl2 = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160317T225805Z.24fe4d3e49b00f5f.6bcc824a7ac0b4ec0da91a97f022d7045d9b121c&text=' + questions[questionNumber].answers[i] + '&lang=' + 'en-'+lancode;

                    $.ajax({ url: queryUrl2, method: 'GET' })
                        .done(function(response) {
                            console.log(response.text[0]);
                            var result = response.text;

                            $("#panel").append("<a id='button' style='display:block; width:100%;'  class='answer-button2 waves-effect waves-light btn brown lighten-3' data-name='" + questions[questionNumber].answers[i] + "' >" + response.text[0] + "</a>");

                    });

        }

});






 $(document).on("click", ".answer-button2", function(e) {

                            if ($(e.target).data("name") === questions[questionNumber].correctAnswer) {

                                $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
                                correct++;
                            } else {
                                $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
                                incorrect++;
                            }
                            console.log(correct);
                            console.log(incorrect);
 });

start();


