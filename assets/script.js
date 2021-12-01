var questionsArr = [{question: 'Inside which HTML element do we put the JavaScript?', choices: ['<script>', '<javascript>', '<js>', '<style>'], correctAnswer: '<script>'},{question: 'Where is the correct place to insert a JavaScript?', choices: ['<head>', '<body>', 'Both <head> and <body> are correct', 'None of the above'], correctAnswer: 'Both <head> and <body> are correct'}, {question: 'A useful tool used during development and debugging for printing content to the debugger is:', choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'], correctAnswer: 'console.log'},  {question: 'Arrays in JavaScript can be used to store _______.', choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'], correctAnswer: 'all of the above'} ]
var currentQuestion= 0;
var time= 60;
var gameOver = false;

//high score array
var HighScores = [];

// get reference to #start element
var startButton = document.querySelector("#start");
// add event listener to start button
startButton.addEventListener("click", beginQuiz);

//function to begin quiz
 function beginQuiz() {
     //hide starting screen
   document.getElementById("start-area").style.display="none"
   //display quiz
   document.getElementById("quiz-area").style.display="block"
   renderDisplay();
   //begin timer
   timer();    
 }

 //function to display quiz questions
 function renderDisplay() {
     console.log(currentQuestion);
     console.log(questionsArr.length);
     //check if all questions have been answered
     if (currentQuestion>questionsArr.length-1) {
        recordScore();
        return;
     }
     document.getElementById("questions").innerText=questionsArr[currentQuestion].question;
     document.getElementById("button1").innerText=questionsArr[currentQuestion].choices[0];
     document.getElementById("button2").innerText=questionsArr[currentQuestion].choices[1];
     document.getElementById("button3").innerText=questionsArr[currentQuestion].choices[2];
     document.getElementById("button4").innerText=questionsArr[currentQuestion].choices[3];
 };

 //check answers
 document.getElementById("quiz-area").addEventListener("click", function(event){
    
     if (currentQuestion>questionsArr.length-1) { 
         console.log(event);
         document.getElementById("quiz-area").style.display="none";
        return;
    }; 
     checkAnswer(event.target.innerText);
    
 })

 //function to time quiz
 function timer(){
     var timerInterval= setInterval(function(){
         if (time===0 || gameOver){
             displayScores();
             clearInterval(timerInterval);
             return;
         }
         time--
         document.getElementById("time").innerText=time;
     },1000)
 }

 //function to check answers, deduct time for incorrect
 function checkAnswer(answer){
if (answer===questionsArr[currentQuestion].correctAnswer) {
  currentQuestion++  
} else {
    time=time-10;
    currentQuestion++;
}

renderDisplay();
 };

 function recordScore(){
     gameOver=true;
        var initials = prompt("Your score is " + time + ". Please enter your initials");
        localStorage.setItem("initials",JSON.stringify({time:time, initials:initials}))
        document.getElementById("quiz-area").style.display="none"
        document.getElementById("high-scores").style.display="block"
};

function displayScores(){
    var li = document.createElement("li")
    var storage = JSON.parse(localStorage.getItem("initials"))
    console.log(storage);
    li.innerText= storage.initials +" " + storage.time;
    document.getElementById("score-list").append(li);
};