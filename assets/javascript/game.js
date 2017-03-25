// JS file for Trivia Game

// ========= Questions =========
var questOne = {
    question: "How many amendments comprise the Bill of Rights to the Constitution?",
    choice1: "Eight",
    choice2: "Nine",
    choice3: "Ten",
    choice4: "Twelve",
    answer: "Ten",
    info: "<iframe src='assets/images/nerdzone.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed img-responsive-center-block' 'allowFullScreen' </iframe>"
};

var questTwo = {
    question: "When someone asserts their 'fifth amendment rights' (or, 'takes the Fifth,') a person is allowed to:",
    choice1: "Use a gun to defend themselves",
    choice2: "Confront their accuser in court",
    choice3: "Refuse to answer a question that may incriminate themselves",
    choice4: "Avoid cruel and unusual punishment",
    answer: "Refuse to answer a question that may incriminate themselves",
    info: "<iframe src='assets/images/phishsongs.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questThree = {
    question: "For which one of the following reasons may a person be convicted of treason in the United States?",
    choice1: "The person writes and publishes to the public at large a manifesto describing plans to make war or 'bring down' the government of the United States",
    choice2: "Two people testify that they saw the person giving weapons to an enemy soldier during war",
    choice3: "The President issues an Executive Order that has been reviewed by the U.S. Attorney General that the person committed an act of treason",
    choice4: "Two people testify that a person has spoken out against the government",
    answer: "Two people testify that they saw the person giving weapons to an enemy soldier during war",
    info: "<iframe src='assets/images/goodforme.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questFour = {
    question: "Prior to the ratification of the 19th Amendment in 1920, what was true?",
    choice1: "Women married to landowners of more than 100 acres had the right to vote for President",
    choice2: "All women had the right to vote for President",
    choice3: "Women did not have the right to vote at all, for the President or otherwise",
    choice4: "Women in certain states had the right to vote for President",
    answer: "Women in certain states had the right to vote for President",
    info: "<iframe src='assets/images/ladies.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questFive = {
    question: "The number of electors in each state that are assigned to a presidential candidate based upon",
    choice1: "Winner takes all",
    choice2: "According to the formula determined by the candidates",
    choice3: "According to the formula that each state determines",
    choice4: "Proportion of the popular vote the candidate wins",
    answer: "According to the formula that each states determines",
    info: "<iframe src='assets/images/justshutup.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questSix = {
    question: "What change did the Supreme Court case in 'Dred Scott v. Sandford' make to American life?",
    choice1: "It made slavery illegal in America",
    choice2: "It made it illegal to transport slaves across state lines",
    choice3: "It declared that blacks were not citizens and did not have the rights of citizens",
    choice4: "It confirmed that the children of slaves were born into slavery",
    answer: "It declared that blacks were not citizens and did not have the rights of citizens",
    info: "<iframe src='assets/images/whattheywant.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questSeven = {
    question: "Which Amendment abolished slavery?",
    choice1: "The 15th Amendment",
    choice2: "The 13th Amendment",
    choice3: "The 11th Amendment",
    choice4: "The 9th Amendment",
    answer: "The 13th Amendment",
    info: "<iframe src='assets/images/highfive.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"

};

var questEight = {
    question: "Which of the following is NOT an enumerated power given to the federal government?",
    choice1: "To regulate commerce with foreign nations",
    choice2: "To constitute tribunals inferior to the Supreme Court",
    choice3: "Bail out the national banks",
    choice4: "Establish a national bank",
    answer: "Establish a national bank",
    info: "<iframe src='assets/images/bank.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questNine = {
    question: "Which provision in the U.S. Constitution cannot be altered through the amendment process?",
    choice1: "The provision that requires equal state representation in the U.S. Senate",
    choice2: "The provision that establishes votiing qualifications in national elections",
    choice3: "The provision that gives congress the authority to declare war",
    choice4: "The provision that prohibits granting titles of nobility",
    answer: "The provision that requires equal state representation in the U.S. Senate",
    info: "<iframe src='assets/images/fruitsodomy.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questTen = {
    question: "Who has the power to declare war?",
    choice1: "The President",
    choice2: "The U.S. Senate",
    choice3: "The U.S. Congress",
    choice4: "The U.S. House of Representatives",
    answer: "The U.S. Congress",
    info: "<iframe src='assets/images/donotgoogle.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};

var questEleven = {
    question: "Who can stop the President from making unwise agreements with foreign nations?",
    choice1: "The Senate must agree to the ratification of all treaties",
    choice2: "Twitter can shut down the President's account",
    choice3: "The Supreme Court must review all agreements",
    choice4: "The President is forbidden to negotiate",
    answer: "The Senate must agree to the ratification of all treaties",
    info: "<iframe src='assets/images/onelastkiss.gif' alt='an animated image of S. Colbert' width='480' height='500.8' frameBorder='0' class='giphy-embed' 'allowFullScreen'</iframe>"
};


// Creating array of trivia-questions:
var tQuestions = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight, questNine, questTen, questEleven];


// Setting initial var values:
var questions = [];
var num = 0;
var time = 15;
var numbercorrect = 0;
var numberwrong = 0;
var numtimeout = 0;



// ========= Functions ==========
// / Start button in which first GIF is replaced with a second GIF

$(".start").click(function() {

//RESERVED $("#first").html("<img src='assets/images/closetabs.gif' alt='an animated image of S. Colbert'/>");
var second = "<img src='assets/images/scolbert.gif' alt='an animated image of S. Colbert'/>";

$(".first").replaceWith(second);
$(".start").hide();

});


$("button").click(function() {
	questions = tQuestions;
	nextquestion();
	$(".start").hide();
	
});


// Sets the time back to 15s, sets 1s interval for the timer and displays the next question:

function nextquestion() {
	time = 15;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".response1").html(questions[num].choice1);
	$(".response2").html(questions[num].choice2);
	$(".response3").html(questions[num].choice3);
	$(".response4").html(questions[num].choice4);
	$(".info").empty();
};


// Counts down remaining time. Stops if time = 0 and changes color to red once time goes below 5s:
function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stop();
		$(".choice").empty();
	} else if (time <= 5) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

// Stops timer. Will advance to next question if there are more, otherwise, the game will end: 
function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};


// Choosing on a response by hover and click:
$(".choice").click(function() {

	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
	} else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});

// Tells the user know they got the question right and displays a gif/image:
function correctanswer() {
	$(".question").addClass("red");
	$(".question").html("<p>CORRECT</p>");
	$(".info").html("<p>"+tQuestions[num].info+"</p>");
}

// Counts incorrect answers, tells the user they are wrong, and displays a gif/image:
function wronganswer() {
	numberwrong++;
	$(".question").html("<p>INCORRECT<br> The correct answer is: "+tQuestions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
};

// Counts a failure to answer the question, tells the user they are out of time, and displays an image:
function timeout() {
	numtimeout++;
	$(".question").html("<p>TIME'S UP! <br> The correct answer is: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Tells the user how many questions they got right/wrong/unanswered. Resets variables and displays start button so the user can play again:

function endgame() {
	$(".question").html("<h2>You got " + numbercorrect + " answers correct!</h2>"
		+ "<h2>You got " + numberwrong + " INCORRECT!</h2>" + "<h2>You didn't answer " + numtimeout + " questions!</h2>");
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numtimeout=0;
	$(".start").show();
};

