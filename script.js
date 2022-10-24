// var theElement = document.querySelector([CSS Selector for your element]);
var timerEl = document.getElementById('countdown');
var headerEl = document.getElementById('header');
var subheaderEl = document.getElementById('subheader');
var listEl = document.getElementById('listAnswers');
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var startQuiz = document.getElementById('startQuiz');

var codingQuestions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']
// how to store the codingAnswers? Is an array best?
var codingAnswer0 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
var codingAnswer1 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
var codingAnswer2 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
var codingAnswer3 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
var codingAnswer4 = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']

var timeLeft
var userScore
var userIntials
var questionCount = 0

function gameOver(){
    headerEl.textContent = 'All Done'
    subheaderEl.textContent = 'You final score is ' + userScore

}
headerEl.textContent = 'Coding Quiz'
subheaderEl.textContent = 'Click the button to start the quiz. Answering incorrectly will subtract 5 seconds from the timer'

// Timer that counts down from 60
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
        // Call the `gameOver()` function
       gameOver();
      }
    }, 1000);
  }

  function dispayQuestions(){
    // this will just display the first question and remove the start button
    // remove the start quiz button
    startQuiz.setAttribute("style", "display:none;");
    listEl.textContent = codingQuestions[0];
    // display the first question and answer set
    li1.textContent = codingAnswer0[0];
    li2.textContent = codingAnswer0[1];
    li3.textContent = codingAnswer0[2];
    li4.textContent = codingAnswer0[3];
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

  }

  function nextQuestion(){
    if(questionCount < 5){
    questionCount = questionCount + 1
    listEl.textContent = codingQuestions[questionCount];
    li1.textContent = eval('codingAnswer' + questionCount);
  }
    else{
      gameOver();

    }
  }

  answers.on("click", ".letter-button", function (event) {
    var displayLetterEl = $("<div>");
  
    displayLetterEl.addClass("letter");
  
    // get letter from clicked letter button's `data-letter` attribute and use it for display
    displayLetterEl.text($(event.target).attr("data-letter"));
    displayEl.append(displayLetterEl);
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

