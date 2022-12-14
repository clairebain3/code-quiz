

// declare variables
var timerEl = document.getElementById('countdown');
var headerEl = document.getElementById('header');
var subheaderEl = document.getElementById('subheader');
var listEl = document.getElementById('listAnswers');
var answers = document.getElementById('answers');
var answerScore = document.getElementById('answerScore');
var viewHighScore = document.getElementById('viewHighScore');
// var clearBtn = document.getElementById('clearBtn');
var formBtn = document.getElementById('formBtn');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startQuiz = document.getElementById('startQuiz');
var highScoresEl = document.createElement("ul");


// load questions and answers into array
var codingQuestions = new Array ();
codingQuestions[0] = new Array ('Arrays in javascript start at ____?', '0', '1', '2', '3');
codingQuestions[1] = new Array ('___ is a commonly-used data type', 'The dom', 'For loops', 'String', 'HTML');
codingQuestions[2] = new Array ('Which of the below is NOT a commonly-used web programming language?', 'HTML', 'CSS', 'JavaScript', 'Console Log');
codingQuestions[3] = new Array ('What percentage of websites use JQuery?', '10%', '100%', '90%', '50%');
codingQuestions[4] = new Array ('Which of the below could be contained in a boolean type variable?', '900', 'true', 'Giraffes', '67.3');
// declare answer key
var answerKey = ['0','String','Console Log','90%','true']


let timeLeft = 60;
let userScore = 0;
let highScore = '';
let userIntials = '';
var questionCount = 0;
let arrHighScores = [];
answerCount = 0;
userForm.setAttribute("style", "display:none;");
// clearBtn.setAttribute("style", "display:none;");
headerEl.textContent = 'Coding Quiz'
subheaderEl.textContent = 'Click the button to start the quiz. Answering incorrectly will subtract 5 seconds from the timer'


// function to clear screen when game finishes
function gameOver(){
    headerEl.textContent = 'All Done'
    subheaderEl.textContent = 'Your final score is ' + userScore
    answerScore.setAttribute("style", "display:none;");
    userForm.setAttribute("style", "display:inline;");

}


// Timer that counts down from 60

function countdown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `gameOver()` function
       gameOver();
      }
    }, 1000);
  }

  function dispayQuestions(){
    // this will just display the first question and remove the start button
    // remove the start quiz button
    startQuiz.setAttribute("style", "display:none;");
    listEl.textContent = codingQuestions[0][0];
    // display the first question and answer set

    li1.textContent =   codingQuestions[0][1];
    li2.textContent =   codingQuestions[0][2];
    li3.textContent =  codingQuestions[0][3];
    li4.textContent =  codingQuestions[0][4];
    li1.setAttribute("class", "answerBtn");
    li2.setAttribute("class", "answerBtn");
    li3.setAttribute("class", "answerBtn");
    li4.setAttribute("class", "answerBtn");
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

  }

  // function to display the next question ans answer set
  function nextQuestion(){
    if(questionCount < 4){
    questionCount = questionCount + 1
    listEl.textContent = codingQuestions[questionCount][0];
    li1.textContent =  codingQuestions[questionCount][1];
    li2.textContent =  codingQuestions[questionCount][2];
    li3.textContent =  codingQuestions[questionCount][3];
    li4.textContent =  codingQuestions[questionCount][4];
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
  }
    else{
      // clear the screen of the question and answers
      listEl.remove();
      li1.remove();
      li2.remove();
      li3.remove();
      li4.remove();
      // call game over function
      gameOver();
      timeLeft = 0;
      

    }
  }

// function that runs when user clicks on an answer button. Checks if it's right, then calls next question function
  listAnswers.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches(".answerBtn")) {
      var state = element.textContent;
      console.log(answerKey[answerCount] + state);
        if (state === answerKey[answerCount]){
          userScore += 5;
          answerScore.textContent = 'Right'
          // screen reads right
        }
        else{
          timeLeft -=5;
          answerScore.textContent = 'Wrong'
        }
        answerCount +=1

    nextQuestion();
    }
  
  });

  function storeHighScores() {
    // Stringify and set key in localStorage to arrHighScores array
    localStorage.setItem("scores", JSON.stringify(arrHighScores));
  }

  function init() {
    // Get stored highscores from localStorage
    var storedHighScores = JSON.parse(localStorage.getItem("scores"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedHighScores !== null) {
      arrHighScores = storedHighScores;
    }
  
  }


// function that runs when user submits high score
  formBtn.addEventListener("click", function(event){
    // get any high scores from local storage
    init();
    event.preventDefault();
    userIntials = document.getElementById('initials').value;
    subheaderEl.textContent = '';
    subheaderEl.appendChild(highScoresEl);
    userForm.setAttribute("style", "display:none;");
    headerEl.textContent = 'High Scores'
    arrHighScores.push(userIntials + ": " + userScore);
  

    for (var i = 0; i < arrHighScores.length; i++) {
      var highscore = arrHighScores[i];
  
      var li = document.createElement("li");
      li.textContent = highscore;

      highScoresEl.appendChild(li);
    }
    // store any high scores in local storage
    storeHighScores();
    // clearBtn.setAttribute("style", "display:inline;");
  
  })

  // function to view high scores page
  function viewHighScores(){
    init();
    subheaderEl.textContent = '';
    subheaderEl.appendChild(highScoresEl);
    userForm.setAttribute("style", "display:none;");
    headerEl.textContent = 'High Scores'
    for (var i = 0; i < arrHighScores.length; i++) {
      var highscore = arrHighScores[i];
  
      var li = document.createElement("li");
      li.textContent = highscore;

      highScoresEl.appendChild(li);
      
      clearButton.setAttribute("class", "answerBtn");
      listEl.appendChild(clearButton);
    }

  }


viewHighScore.addEventListener("click", function(event){
viewHighScores();

})

// clearButton.addEventListener("click", function(event){
// clearHighScores()

// })

function clearHighScores(){
  localStorage.clear();
  highScoresEl.remove();


}



    // var li = document.createElement("li");
    // li.textContent = userIntials + ": " + userScore;
    // highScoresEl.appendChild(li);

    // var goBack = document.createElement("button")
    // subheaderEl.appendChild(goback);
    
    // headerEl.textContent = '';

  

  


  startQuiz.addEventListener("click", function(event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();
    countdown();
    dispayQuestions();
  });

