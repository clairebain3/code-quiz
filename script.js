// var theElement = document.querySelector([CSS Selector for your element]);
var timerEl = document.getElementById('countdown');

var codingQuestions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
// how to store the codingAnswers? Is an array best?

var timeLeft
var userScore
var userIntials

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
       // do something
      }
    }, 1000);
  }

  countdown()