// var theElement = document.querySelector([CSS Selector for your element]);
var timerEl = document.getElementById('countdown');
var headerEl = document.getElementById('header');
var subheaderEl = document.getElementById('subheader');
var listEl = document.getElementById('listanswers');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startQuiz = document.getElementById('startQuiz');

var codingQuestions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
// how to store the codingAnswers? Is an array best?
var codingAnswer1 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5']

var timeLeft
var userScore
var userIntials

function gameOver(){
    headerEl.textContent = 'All Done'
    subheaderEl.textContent = 'You final score is ' + userScore

}
headerEl.textContent = 'Coding Quiz'
subheaderEl.textContent = 'Start Quiz'

// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
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
        // Call the `displayMessage()` function
       gameOver();
      }
    }, 1000);
  }

  function dispayQuestions(){
    var  x = x +1;
    var currentQuestion = codingQuestions[x];
    headerEl.textContent = currentQuestion
    subheaderEl.textContent
    li1.textContent = codingAnswer1[x]
    listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
  }

  var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

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
    countdown()
    
  });

