$(document).ready(function(){
	//Global variables//
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

		correct: "10am to 2pm",

		fact: " Avoid peak sun hours between 10 a.m. and 2 p.m., when the sun's UV rays are most intense, even when it's overcast."

	},

	{

		question: "Which of the following is true about Ultra Violet light?",

		answer1: "There is one type of ultra violet light that harms your skin.",

		answer2: "There are two types of ultra violet light that harms your skin.",

		answer3: "Darker skin tones don't need sunscreen and are protected from UV light.",

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

		fact: "Follow the guideline of 'one ounce, enough to fill a shot glass', which dermatologists consider the amount needed to cover the exposed areas of the body. Adjust the amount of sunscreen applied depending on your body size."
	},

		{

		question: "The sun is the best way to get which vitamin?.",

		answer1: "Vitimin A",

		answer2: "Vitimin C",

		answer3: "Vitimin D",

		answer4: "None of the above",

		correct: "None of the above",

		fact: "Our bodies can produce some vitamin D following exposure to the sun's ultraviolet B (UVB) radiation. However, after a limited amount of sun exposure (approximately five minutes daily for a Caucasian in New York at 12 PM in summer), vitamin D production reaches its maximum. "

	},

];

//Set the user questions to take the quiz//
function initQuestion() {
	$(".questions").text(questions[currentQuestion].question);
	$("#a1").html(questions[currentQuestion].answer1); 
	$("#a2").html(questions[currentQuestion].answer2); 
	$("#a3").html(questions[currentQuestion].answer3);
	$("#a4").html(questions[currentQuestion].answer4);
	$(".radio1").val(questions[currentQuestion].answer1); 
	$(".radio2").val(questions[currentQuestion].answer2); 
	$(".radio3").val(questions[currentQuestion].answer3);
	$(".radio4").val(questions[currentQuestion].answer4);
	$("#restart").hide();
}

// Code to see if what the user chose was correct//
function checkAnswer(userAnswer) {
	console.log(userAnswer.val());
	if (userAnswer.val() == questions[currentQuestion].correct) {
		$("#feedback").text('CORRECT!');
		currentQuestion++;
		//Count questions asked and add them to counter on page//
		questionCounter++;
		$("#questionsAsked").html(questionCounter);
		// Increment answeredCorrect if the user gets the question right//
		answeredCorrect++;
		$("#answeredCorrect").html(answeredCorrect);
		//User has selected an incorrect answer and adds a count to sum of all questions asked//
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
	// Check if user is at last question if not initial next question//
	if(questionCounter > questions.length - 1) {
	finishGame();
	} else {
	initQuestion();
	}
}

// After the last question has been answered//
function finishGame() {
$('.answers').remove();
	if (answeredCorrect < 3) {
		$(".questions").text("Ouch! Try again, you don't want to get burned this summer!");
	}

	else if (answeredCorrect <5) {
		$(".questions").text("Not Bad, but please try again.");
	}

	else if (answeredCorrect <=5) {
		$(".questions").text("Nice you're almost summer ready!");	
	}

	else {
		$(".questions").text("Perfect! You really know your stuff!");
	}
		$("#restart").show();
		$('#submit').hide();
}

// Submit code which will check the answer. 
$("#submit").click(function(e){
	e.preventDefault();
	var chosenAnswer = $("input[type='radio']:checked");
	if (chosenAnswer.length > 0){
		checkAnswer(chosenAnswer);
//checks if property is there and makes it false
		$("input[type='radio']:checked").prop('checked', false);
	} else {
		$('#feedback').text("Please Select");
	}

});

initQuestion();

//Displays the fact that will inform the user of about sunscreen regardless if correct or not.
function displayFact () {
	$("#fact").text(questions[currentQuestion - 1].fact);
	if (questionCounter > questions.length - 1) {
	$("#fact").text(questions[currentQuestion].fact);
};
}


});