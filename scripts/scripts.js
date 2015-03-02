$(document).ready (function() {



//question objects
var questions = [
{
  qNum: 1,
  q: "What country produces Sherry?",
  choices: ["Spain", "Portugal", "United States", "South Africa"],
  correct: 1,
  definition: "Jerez is the town in Spain where Sherry is produced."
},

{
  qNum: 2,
  q: "Where is the Mosel wine growing region?", 
  choices: ["Austria", "Spain", "France", "Germany"],
  correct: 4,
  definition: "The Mosel is a river that runs into the Rhine south of Bonn in Germany."
},

 {
  qNum: 3,
  q: "Pinotage was created in 1925 by crossing Pinot Noir and which other grape??",
  choices: ["Chenin Blanc", "Cinsaut", "Merlot", "Cabernet Franc"],
  correct: 3,
  definition: "In 1925 Pinotage was created by Professor Perold using a crossing of Pinot Noir and Cinsault."
},

{
  qNum: 4,
  q: "Where is the noble grape variety Tannat grown??",
  choices: ["Chile.", "Spain", "Italy", "Southern France"],
  correct: 4,
  definition: "Tannat is best known as the dominant grape variety in Madiran and is also planted in other French regions in the Southwest."
},

{
  qNum: 5,
  q: "What is the process for removing the suspended solids or lees from grape juice or wine?",
  choices: ["Blending", "Clarification", "Cyroextraction", "Chaptalisation"],
  correct: 2,
  definition: "Clarification is the process of removing suspended solids or lees from wine."
},

{
  qNum: 6,
  q: "What grape is also known as Hermitage in South Africa?",
  choices: ["Merlot", "Cabernet Sauvignon", "Grenache", "Cinsaut"],
  correct: 4,
  definition: "Cinsaut was the most widely planted red variety in South Africa until it was overtaken by cabernet sauvignon during the last decade of the 20th Century."
}
];

//global variables
var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions = questions.length;
var questionIndex = 0;
var correctText = "Correct!";
var wrongText = "Incorrect";


// on clicking begin
  $("#begin").click(function() {
    //  hide instructions
    $("#instructions").fadeOut("fast");
    $("#quiz").show("slow", getQuestion);
  });
  
// starting new game function
 function startGame() {
    currentQuestion = 1;
    correctAnswers = 0;
    questionIndex = 0;
    $("#question").show();
    $("#choices").show();
    $("#submitAnswer").show();
    $("#playAgain").hide();
    $('input:radio[name=radios]').attr('checked',false);
    getQuestion();
 };

 //get question and choices, show question #
 function getQuestion() {
  // questionIndex++;
  $("#currentQ").text(questions[questionIndex].q);
  $("#choice0").text(questions[questionIndex].choices[0]);
  $("#choice1").text(questions[questionIndex].choices[1]);
  $("#choice2").text(questions[questionIndex].choices[2]);
  $("#choice3").text(questions[questionIndex].choices[3]);
  $("#count").text("Question " + currentQuestion + " of 6");
 };


//check Answer function
  function checkAnswer() {
    // console.log("answer checked");
    var radioValue = false;
    var userChoice = document.getElementsByName('radios');
    for (var i = 0; i < userChoice.length; i++) {
      if(userChoice[i].checked) {
        radioValue = userChoice[i].value;
      };
    };

    //check that they selected a choice
    if (radioValue === false) {
      alert("Please pick an answer");
    }

    // if right answer
    else if (radioValue == questions[questionIndex].correct) {
      // show "correct"
      $("#submitAnswer").html('<h2>' + correctText + '</h2>');
      // show definition
      $("#definition").show()
      $("#definition").text(questions[questionIndex].definition);
      correctAnswers++;

    } else {
      // if wrong answer show "wrong"
      $("#submitAnswer").html('<h2>' + wrongText + '</h2>');
      // show definition
      $("#definition").show()
      $("#definition").text(questions[questionIndex].definition);
    
    };
    //  show next button
    if (questions[questionIndex].qNum == 6) {

      if (radioValue == questions[questionIndex].correct) {
        // show "correct"
        $("#submitAnswer").html('<h2>' + correctText + '</h2>');
        // show definition
        $("#definition").show()
        $("#definition").text(questions[questionIndex].definition);

        } else {
      // if wrong answer show "wrong"
        $("#submitAnswer").html('<h2>' + wrongText + '</h2>');
      
        }

        $("#nextQ").hide(); 
        $("#count").text("Congrats! You got " + correctAnswers + " out of 6 correct!");
        // "play again" option
        $("#playAgain").show();
      
        // $("#choices").hide();
        $("#submitAnswer").hide();

    } else {
        $("#nextQ").show();
    };

    

  }; //end checkAnswer function

  $("#nextQ").click(function() {
      nextQuestion();
      $('input:radio[name=radios]').attr('checked',false);
    });

  //  click check answer
  $("#submitAnswer").click(function() {
      checkAnswer();
  });

   //next question function:

function nextQuestion() {

  // hide next button
  $("#nextQ").hide();
  //show check answer option
  $("#submitAnswer").html('<h2>Check Answer</h2>');
  $("#definition").hide();
  currentQuestion++;
  questionIndex++;
  getQuestion();

}; //end next Question function

    //play again function

    $("#playAgain").click(function() {
      $("#submitAnswer").html('<h2>Check Answer</h2>');
      $("#nextQ").show();
      $("#definition").hide();
      startGame();
    });

}); // end document ready function
