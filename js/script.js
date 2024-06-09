function generateAwayScore1() {
  const minCeiled = Math.ceil(15);
  const maxFloored = Math.floor(30);
  document.getElementById("1q-score-away").value = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
}

function generateAwayScore2() {
  const minCeiled = Math.ceil(15);
  const maxFloored = Math.floor(30);
  document.getElementById("2q-score-away").value = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
}

function generateAwayScore3() {
  const minCeiled = Math.ceil(15);
  const maxFloored = Math.floor(30);
  document.getElementById("3q-score-away").value = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
}

function generateAwayScore4() {
  const minCeiled = Math.ceil(15);
  const maxFloored = Math.floor(30);
  document.getElementById("4q-score-away").value = Math.floor(
    Math.random() * (maxFloored - minCeiled) + minCeiled
  );
}

function calculateAwaySum() {
  // Get the values from the input fields
  var awayScore1q = document.getElementById("1q-score-away").valueAsNumber || 0;
  var awayScore2q = document.getElementById("2q-score-away").valueAsNumber || 0;
  var awayScore3q = document.getElementById("3q-score-away").valueAsNumber || 0;
  var awayScore4q = document.getElementById("4q-score-away").valueAsNumber || 0;

  // Calculate the sum
  var awaySum = awayScore1q + awayScore2q + awayScore3q + awayScore4q;

  // Display the sum in the sum-field
  document.getElementById("final-score-away").value = awaySum;
}

function calculateHomeSum() {
  // Get the values from the input fields
  var homeScore1q = document.getElementById("1q-score-home").valueAsNumber || 0;
  var homeScore2q = document.getElementById("2q-score-home").valueAsNumber || 0;
  var homeScore3q = document.getElementById("3q-score-home").valueAsNumber || 0;
  var homeScore4q = document.getElementById("4q-score-home").valueAsNumber || 0;

  // Calculate the sum
  var homeSum = homeScore1q + homeScore2q + homeScore3q + homeScore4q;

  // Display the sum in the sum-field
  document.getElementById("final-score-home").value = homeSum;
}
var countdownInterval;
function startCountdown() {
  // Set the countdown duration in seconds
  var countdownDuration = 60; // Change this to your desired duration

  // Calculate the end time
  var endTime = new Date().getTime() + countdownDuration * 1000;

  // Update the countdown every second
  countdownInterval = setInterval(function () {
    var distance = endTime - new Date().getTime();

    // Calculate seconds
    var seconds = Math.floor(distance / 1000);

    // Display the countdown in the "countdown" span
    document.getElementById("countdown").innerHTML = seconds;

    // Check if the countdown is complete
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "0";
    }
  }, 1000);
}

function stopCountdown() {
  // Clear the interval to stop the countdown
  clearInterval(countdownInterval);
  document.getElementById("countdown").innerHTML = 60;
}
