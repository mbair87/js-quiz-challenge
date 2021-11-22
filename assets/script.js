var questionsArr = [{question: 'question1 goes here', choices: ['a', 'b', 'c', 'd'], correctAnswer: 'a'},{question: 'question2 goes here', choices: ['a', 'b', 'c', 'd'], correctAnswer: 'b'}, {question: 'question3 goes here', choices: ['a', 'b', 'c', 'd'], correctAnswer: 'c'} ]


// get reference to #start element
var startButton = document.querySelector("#start");
// add event listener to start button
startButton.addEventListener("click", beginQuiz);