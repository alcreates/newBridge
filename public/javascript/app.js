//images using backstretch 
$.backstretch("https://s-media-cache-ak0.pinimg.com/736x/17/0d/9c/170d9cdcb5432859db545ac625ac2e87.jpg");
$("#hero").backstretch("./images/hero.jpg");
//--------------------------------------------------------------------------------------------------------------------------




// Eventlistner nextbutton 
$(document).on("click", ".answer-button3", function(e) {
		start();
});

// Eventlistner checks if answer is correct
$(document).on("click", ".answer-button", function(e) {

    if ($(e.target).data("name") === questions[questionNumber].correctAnswer) {
        $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'>Correct!!!!</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
        correct++;
    } else {
        $("#resultDiv").html("<div class='card-panel brown darken-4 white-text'> The correct answer is " + questions[questionNumber].correctAnswer + "</div><a class='answer-button3 waves-effect waves-red btn brown'>next</a>");
        incorrect++;
    }
    
});


