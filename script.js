// var theElement = document.querySelector([CSS Selector for your element]);
var timerEl = document.getElementById('countdown');
var headerEl = document.getElementById('header');
var subheaderEl = document.getElementById('subheader');
var listEl = document.getElementById('listAnswers');
var answers = document.getElementById('answers');
var answerScore = document.getElementById('answerScore');
var formBtn = document.getElementById('formBtn');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startQuiz = document.getElementById('startQuiz');
// var ListEls = document.querySelectorAll("li");
var highScoresEl = document.createElement("ul");


var codingQuestions = new Array ();
codingQuestions[0] = new Array ('Arrays in javascript start at ____?', '0', '1', '2', '3');
codingQuestions[1] = new Array ('___ is a commonly-used data type', 'The dom', 'For loops', 'String', 'HTML');
codingQuestions[2] = new Array ('Which of the below is NOT a commonly-used web programming language?', 'HTML', 'CSS', 'JavaScript', 'Console Log');
codingQuestions[3] = new Array ('What percentage of websites use JQuery?', '10%', '100%', '90%', '50%');
codingQuestions[4] = new Array ('Which of the below could be contained in a boolean type variable?', '900', 'true', 'Giraffes', '67.3');

var answerKey = ['0','String','Console Log','90%','true']


let timeLeft = 60;
let userScore = 0;
let highScore = '';
let userIntials = '';
var questionCount = 0;
answerCount = 0;
userForm.setAttribute("style", "display:none;");

function gameOver(){
    headerEl.textContent = 'All Done'
    subheaderEl.textContent = 'Your final score is ' + userScore
    answerScore.setAttribute("style", "display:none;");
    userForm.setAttribute("style", "display:inline;");

}
headerEl.textContent = 'Coding Quiz'
subheaderEl.textContent = 'Click the button to start the quiz. Answering incorrectly will subtract 5 seconds from the timer'
// li1.setAttribute("style", "display:none;");
// li2.setAttribute("style", "display:none;");
// li3.setAttribute("style", "display:none;");
// li4.setAttribute("style", "display:none;");
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
    // li1.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    // li2.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    // li3.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    // li4.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    li1.setAttribute("class", "answerBtn");
    li2.setAttribute("class", "answerBtn");
    li3.setAttribute("class", "answerBtn");
    li4.setAttribute("class", "answerBtn");
    // li3.setAttribute("style", "display:inline;");
    // li4.setAttribute("style", "display:inline;");
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    // listEl.children.setAttribute("class", "answerBtn"); // this probably needs a loop

  }

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

  // function checkAnswer(element){
  //   var state = element.textContent;
  //   console.log(answerKey[answerCount] + userScore + answerCount + state);
  //     if (state === answerKey[answerCount]){
  //       userScore = userScore + 5;
  //       answerScore.textContent = 'Right'
  //       // screen reads right
  //     }
  //     else{
  //       timeLeft -=5;
  //       answerScore.textContent = 'Wrong'
  //     }
  //     answerCount +=1

  // }

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

  formBtn.addEventListener("click", function(event){
    event.preventDefault();
    userIntials = document.getElementById('initials').value;
    console.log(userIntials)
    subheaderEl.textContent = '';
    subheaderEl.appendChild(highScoresEl);
    var li = document.createElement("li");
    li.textContent = userIntials + ": " + userScore;
    highScoresEl.appendChild(li);
    userForm.setAttribute("style", "display:none;");
    headerEl.textContent = 'High Scores'
    // var goBack = document.createElement("button")
    // subheaderEl.appendChild(goback);
    
    // headerEl.textContent = '';

  })

//   function navigate(direction) {
//     index = index + direction;
//     if (index < 0) { 
//       index = images.length - 1; 
//     } else if (index > images.length - 1) { 
//       index = 0;
//     }
//     currentImage = images[index];
//     carousel.style.backgroundImage = "url('" + currentImage + "')";
//   }


  startQuiz.addEventListener("click", function(event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();
    countdown();
    dispayQuestions();
  });

