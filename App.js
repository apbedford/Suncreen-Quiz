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

		correct: "10 am to 2pm"

	},

	{

		question: "Which of the following is true about Ultra Violet light?",

		answer1: "There is one type of ultra violet light that harms your skin.",

		answer2: "There are two types of ultra violet light that harms your skin.",

		answer3: "People with dark skin color are naturally 100% protected from UV light.",

		answer4: "UV form a tanning bed is safe because it’s a controlled amount.",

		correct: "There are two types of ultra violet light that harms your skin."

	},

		{
		question: "SPF is an abbreviation for...",

		answer1: "Sun Protection Fighter",

		answer2: "Sun Photon Filter",

		answer3: "Sun Protection Factor",

		answer4: "Solar Photon Factor",

		correct: "Sun Protection Factor"

	},

		{

		question: "How often should you apply sunscreen when you're out in the sun?",

		answer1: "Every hour.",

		answer2: "Every two-hours",

		answer3: "Once before going outside",

		answer4: "Every five hours",

		correct: "Every two-hours"
	},


	{

		question:"How much sunscreen should you apply?",

		answer1: "a bottle per application.",

		answer2: "About a shot glass per application.",

		answer3: "A dab will do.",

		answer4: "About a teasoon per application.",

		correct: "About a shot glass per application."
	}

];


function initQuestion() {
// Example code. 
$(".questions").text(questions[currentQuestion].question);
$("#a1").val(questions[currentQuestion].answer1); 
$("#a2").val(questions[currentQuestion].answer2); 
$("#a3").val(questions[currentQuestion].answer3);
$("#a4").val(questions[currentQuestion].answer4); 
}

// Code to see if what the user chose was correct. 
function checkAnswer() {
if (value == questions[5]) {
$("#feedback").html('CORRECT!');


// Increment answeredCorrect if the user gets the question right
answeredCorrect++;
} else {
alert("Please select an answer!");
}

// Increment currentQuestion
nextQuestion();
}

function nextQuestion(){
// Check if user is at last question if not init next question. 
if(questionCounter > questions.length - 1) {
finishGame();
} else {
initQuestion();
}
}

function finishGame() {
// After the last question has been answered.
}

// Submit code which will check the answer. 
$("#submit").click(function(e){
e.preventDefault();
checkAnswer();
currentQuestion++
});

var value = $("input[type='radio']:checked").val();
initQuestion(); // When the page first loads call initQuestion() to start the quiz

});