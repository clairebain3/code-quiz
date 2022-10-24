// var theElement = document.querySelector([CSS Selector for your element]);
var timerEl = document.getElementById('countdown');
var headerEl = document.getElementById('header');
var subheaderEl = document.getElementById('subheader');
var listEl = document.getElementById('listAnswers');
var answers = document.getElementById('answers');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startQuiz = document.getElementById('startQuiz');

var codingQuestions = new Array ();
codingQuestions[0] = new Array ('Arrays in javascript start at ____?', '0', '1', '2', '3');
codingQuestions[1] = new Array ('question 2', 'Answer 12', 'Answer 2', 'Answer 3', 'Answer 4');
codingQuestions[2] = new Array ('Question 3', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4');
codingQuestions[3] = new Array ('Question 4', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4');
codingQuestions[4] = new Array ('Question 5', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4');


let timeLeft = 60;
var userScore
var userIntials
var questionCount = 0

function gameOver(){
    headerEl.textContent = 'All Done'
    subheaderEl.textContent = 'Your final score is ' + userScore

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

    li1.textContent = "1: " + codingQuestions[0][1];
    li2.textContent = "2: " + codingQuestions[0][2];
    li3.textContent = "3: " + codingQuestions[0][3];
    li4.textContent = "4: " + codingQuestions[0][4];
    li1.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    li2.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    li3.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    li4.setAttribute("style", " color:white; background: purple; padding: 5px; margin: 10px;");
    // li2.setAttribute("style", "display:inline;");
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
    li1.textContent = "1: " + codingQuestions[questionCount][1];
    li2.textContent = "2: " + codingQuestions[questionCount][2];
    li3.textContent = "3: " + codingQuestions[questionCount][3];
    li4.textContent = "4: " + codingQuestions[questionCount][4];
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

  listAnswers.addEventListener("click", function (event) {
    nextQuestion();
  
    // // get letter from clicked letter button's `data-letter` attribute and use it for display
    // displayLetterEl.text($(event.target).attr("data-letter"));
    // displayEl.append(displayLetterEl);
  });

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

