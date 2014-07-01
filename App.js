$(document).ready(function(){
var currentQuestion = 0;
var answeredCorrect = 0;
var	questionCounter = 0;
//store questions & answers in array//
var questions = [
	{

		question: "When are peak times we should generally avoid the sun?",

		answer1: "10am to 2pm",

		answer2: "3pm to 6pm",

		answer3: "10am to 2pm (Except for the winter and overcast days)",

		answer4: "3pm to 6pm (Except for the winter and overcast days)",

		correct: "10 am to 2pm",

		fact: " Avoid peak sun hours between 10 a.m. and 4 p.m., when the sun's UV rays are most intense, even when it's overcast."

	},

	{

		question: "Which of the following is true about Ultra Violet light?",

		answer1: "There is one type of ultra violet light that harms your skin.",

		answer2: "There are two types of ultra violet light that harms your skin.",

		answer3: "People with dark skin color are naturally 100% protected from UV light.",

		answer4: "UV from a tanning bed is safe because it's a controlled amount.",

		correct: "There are two types of ultra violet light that harms your skin.",

		fact: "Both UVA (longwave) and UVB (shortwave) rays are harmful, you need protection from both kinds of rays."

	},

		{
		question: "SPF is an abbreviation for...",

		answer1: "Sun Protection Fighter",

		answer2: "Sun Photon Filter",

		answer3: "Sun Protection Factor",

		answer4: "Solar Photon Factor",

		correct: "Sun Protection Factor",

		fact: "SPF or Sun Protection Factor is a measure of a sunscreen's ability to prevent UVB from damaging the skin. Using an SPF 15 sunscreen theoretically prevents reddening 15 times longer - about five hours."

	},

		{

		question: "How often should you apply sunscreen when out in the sun?",

		answer1: "Every hour.",

		answer2: "Every two-hours",

		answer3: "Once before going outside",

		answer4: "Every five hours",

		correct: "Every two-hours",

		fact: "Re-apply sunscreen approximately every two hours or after swimming or sweating heavily according to the directions on the bottle."
	},


	{

		question:"How much sunscreen should you apply?",

		answer1: "A bottle per application.",

		answer2: "About a shot glass per application.",

		answer3: "A dab will do yah.",

		answer4: "About a teasoon per application.",

		correct: "About a shot glass per application.",

		fact: "Follow the guideline of “one ounce, enough to fill a shot glass”, which dermatologists consider the amount needed to cover the exposed areas of the body. Adjust the amount of sunscreen applied depending on your body size."
	}

];


function initQuestion() {
//Ask the user the current question//
$(".questions").text(questions[currentQuestion].question);
$("#a1").html(questions[currentQuestion].answer1); 
$("#a2").html(questions[currentQuestion].answer2); 
$("#a3").html(questions[currentQuestion].answer3);
$("#a4").html(questions[currentQuestion].answer4);
}

// Code to see if what the user chose was correct//
function checkAnswer() {
if (value == questions[currentQuestion].correct) {
$("#feedback").text('CORRECT!');
currentQuestion++;
//Count questions asked and add them to counter on page//
questionCounter++;
$("#questionsAsked").append(questionCounter);
// Increment answeredCorrect if the user gets the question right//
answeredCorrect++;

} else {
		questionCounter++;
		currentQuestion++;
		$("#questionsAsked").text(questionCounter);
		$("#feedback").text('INCORRECT');
		$("#sun-tally").append('<li>' + '<img src="../Suncreen%20Quiz/sun-icon.png">' + '</li>');
}

// Increment currentQuestion//
nextQuestion();
initQuestion(questions[questionCounter]);
displayFact();
}

function nextQuestion(){
// Check if user is at last question if not initial next question. 
if(questionCounter > questions.length - 1) {
finishGame();
} else {
initQuestion();
}
}

function finishGame() {
// After the last question has been answered.
	$('#submit').html("Try again?");
    currentQuestion = 0;
    answeredCorrect = 0;
    questionCounter = 0;

}

// Submit code which will check the answer. 
$("#submit").click(function(e){
e.preventDefault();
checkAnswer();
if (value !== "" || value !== undefined || value.length == 0) {
	return false;
	$('#feedback').text("Please Select");
  }
});

var value = $("input[type='radio']:checked").val();
initQuestion(); // When the page first loads call initQuestion() to start the quiz


function displayFact () {
	$("#fact").text(questions[currentQuestion - 1].fact);
	if (questionCounter > questions.length - 1) {
	$("#fact").text(questions[currentQuestion].fact);
};
}


});